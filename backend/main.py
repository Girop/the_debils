from flask import Flask, request
from prepare_defs import prepare_project, prepare_announcements
from os import path


script_path = path.abspath(__file__)
script_directory = path.dirname(script_path)
database_path = path.join(script_directory, r"database/database.db")


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

    return jsonify(projects_finished)


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
        resp = prepare_project()
        resp.headers["Access-Control-Allow-Origin"] = "*"
        return resp

@app.route("/getAnnouncements", methods=["GET"])
def announcement():
    if request.method == "GET":
        resp = prepare_announcements()
        resp.headers["Access-Control-Allow-Origin"] = "*"
        return resp


if __name__ == "__main__":
    app.run(debug=True)
