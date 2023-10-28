from flask import Flask, request, jsonify
from prepare_defs import prepare_project, prepare_announcements
from os import path


script_path = path.abspath(__file__)
script_directory = path.dirname(script_path)
database_path = path.join(script_directory, r"database/database.db")


app = Flask(__name__)


@app.route("/getProjects", methods=["GET"])
def amendment():
    if request.method == "GET":
        resp = jsonify(prepare_project(database_path))
        resp.headers["Access-Control-Allow-Origin"] = "*"
        return resp


@app.route("/getAnnouncements", methods=["GET"])
def announcement():
    if request.method == "GET":
        resp = jsonify(prepare_announcements(database_path))
        resp.headers["Access-Control-Allow-Origin"] = "*"
        return resp

if __name__ == "__main__":
    app.run(debug=True)
