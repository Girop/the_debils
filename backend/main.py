from flask import Flask, request, jsonify
from prepare_defs import prepare_project, prepare_announcements, prepare_tags
from add_defs import add_project, add_amendment
from os import path
from flask_cors import CORS

script_path = path.abspath(__file__)
script_directory = path.dirname(script_path)
database_path = path.join(script_directory, r"database/database.db")


app = Flask(__name__)
CORS(app)


@app.route("/getProjects", methods=["GET"])
def amendment():
    if request.method == "GET":
        resp = jsonify(prepare_project(database_path))
        return resp


@app.route("/getAnnouncements", methods=["GET"])
def announcement():
    if request.method == "GET":
        resp = jsonify(prepare_announcements(database_path))
        resp.headers["Access-Control-Allow-Origin"] = "*"
        return resp


@app.route("/getTags", methods=["GET"])
def tag_list():
    if request.method == "GET":
        resp = jsonify(prepare_tags(database_path))
        resp.headers["Access-Control-Allow-Origin"] = "*"
        return resp


@app.route("/addProject", methods=["POST"])
def add_project_route():
    if request.method == "POST":
        data = request.get_json()
        print("data: ", data)
        add_project(data, database_path)
        return "OK"


@app.route("/addAmendment", methods=["POST"])
def add_amendment_route():
    if request.method == "POST":
        data = request.get_json()
        add_amendment(data, database_path)
        return "OK"


if __name__ == "__main__":
    app.run(debug=True)
