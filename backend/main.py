from flask import Flask, request, jsonify
import sqlite3
import json
from Amendment_class import to_json_amendment, to_json_project


def to_send():
    conn = sqlite3.connect("backend\database\database.db")
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


app = Flask(__name__)


@app.route("/getProjects", methods=["GET"])
def amendment():
    if request.method == "GET":
        return to_send()


@app.route("/Announcement", methods=["GET"])
def announcement():
    if request.method == "GET":
        conn = sqlite3.connect("backend\database\database.db")
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM announcements")
        announcements = cursor.fetchall()
        conn.close()
        return jsonify(announcements)


if __name__ == "__main__":
    app.run(debug=True)
