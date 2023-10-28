from flask import Flask, request, jsonify
import sqlite3
from Amendment_class import to_json_amendment, to_json_project
from os import path

# Get the path to the currently running script
script_path = path.abspath(__file__)
print(script_path)
# Directory of the script
script_directory = path.dirname(script_path)
print(script_directory)

database_path = path.join(script_directory, r"database/database.db")
print(database_path)


def prepare_project():
    conn = sqlite3.connect(database_path)
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM project")
    projects = cursor.fetchall()
    cursor.execute("SELECT * FROM amendments")
    amendments = cursor.fetchall()
    conn.close()
    projects_finished = []
    for pro in projects:
        project = list(pro)
        project_id = project[0]
        project.append([])
        for amendment in amendments:
            if amendment[0] == project_id:
                project[7].append(to_json_amendment(amendment))

        projects_finished.append(to_json_project(project))

    return projects_finished


def prepare_announcements():
    conn = sqlite3.connect(database_path)
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM announcements")
    announcements = cursor.fetchall()
    conn.close()
    return jsonify(announcements)


app = Flask(__name__)


@app.route("/getProjects", methods=["GET"])
def amendment():
    if request.method == "GET":
        return prepare_project()


@app.route("/getAnnouncements", methods=["GET"])
def announcement():
    if request.method == "GET":
        return prepare_announcements()


if __name__ == "__main__":
    app.run(debug=True)
