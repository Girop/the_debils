from flask import jsonify
import sqlite3
import json
from to_json_defs import to_json_amendment, to_json_project

conn = sqlite3.connect(r"backend/database/database.db")

cursor = conn.cursor()
cursor.execute(
    "CREATE TABLE IF NOT EXISTS project (project_id INTERGER PRIMARY KEY, project_type TEXT, title TEXT, content TEXT, post_date TEXT, vote_date TEXT, approves INTEGER, disapproves INTEGER, author TEXT, FOREIGN KEY (project_type) REFERENCES Project_type(name))"
)
cursor.execute(
    "CREATE TABLE IF NOT EXISTS amendments (project_id ID, author TEXT, date TEXT, position INTEGER, lenght INTEGER, approves INTEGER, disapproves INTEGER, content TEXT, FOREIGN KEY (project_id) REFERENCES project(project_id))"
)
cursor.execute(
    "CREATE TABLE IF NOT EXISTS announcements (announcement_id INTEGER PRIMARY KEY, title TEXT, content TEXT, date TEXT, author TEXT)"
)
cursor.execute(
    "INSERT INTO project VALUES (1, 'Official', 'Uchwała nr 1', 'Uchwała nr 1 dotycząca twojej matki', '2030-01-11', '2030-05-11', 50, 34, 'Jan Kowalski')"
)
cursor.execute(
    "INSERT INTO project VALUES (2, 'Proposition', 'Uchwała nr 2', 'Uchwała nr 2 dotycząca twojego ojca', '2014-10-24', '2014-11-24', 5000, 134, 'Kan Jowalski')"
)
cursor.execute(
    "INSERT INTO amendments VALUES (1, 'Adam Jablon', '2020-01-21', 1, 100, 1, 2, 'nie lubie gruszek')"
)
cursor.execute(
    "INSERT INTO amendments VALUES (1, 'Weronika', '2020-01-12', 2, 100, 0, 1, 'nie lubie jablek')"
)
cursor.execute(
    "INSERT INTO amendments VALUES (2, 'Adam Jablon', '2020-01-22', 1, 150, 30, 2, 'lubie gruszki')"
)
cursor.execute(
    "INSERT INTO announcements VALUES (1, 'Ważne ogłoszenie', 'Ważne ogłoszenie dotyczace twojej matki', '2030-05-11', 'Ban Bowalski')"
)
cursor.execute(
    "INSERT INTO announcements VALUES (2, 'Mniej ważne ogłoszenie', 'Akurat to dotyczy twojego ojca', '2014-10-24', 'Jowalska Jowalska')"
)
"""
cursor.execute("DROP TABLE IF EXISTS announcements")
cursor.execute(
    "CREATE TABLE IF NOT EXISTS announcements (announcement_id INTEGER PRIMARY KEY, title TEXT, content TEXT, date TEXT, author TEXT)"
)
cursor.execute(
    "INSERT INTO announcements VALUES (1, 'Ważne ogłoszenie', 'Ważne ogłoszenie dotyczace twojej matki', '2030-05-11', 'Jan Kowalski')"
)
cursor.execute(
    "INSERT INTO announcements VALUES (2, 'Mniej ważne ogłoszenie', 'Akurat to dotyczy twojego ojca', '2014-10-24', 'Kan Jowalski')"
)
"""
conn.commit()
conn.close()
