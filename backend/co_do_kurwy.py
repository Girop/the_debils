from flask import jsonify
import sqlite3
import json
from Amendment_class import to_json_amendment, to_json_project

conn = sqlite3.connect("backend\database\database.db")

cursor = conn.cursor()
"""cursor.execute(
    "CREATE TABLE IF NOT EXISTS project (project_id INTERGER PRIMARY KEY, project_type TEXT, content TEXT, post_date TEXT, vote_date TEXT, approves INTEGER, disapproves INTEGER, FOREIGN KEY (project_type) REFERENCES Project_type(name))"
)
cursor.execute(
    "CREATE TABLE IF NOT EXISTS amendments (project_id ID, author TEXT, title TEXT, date TEXT, position INTEGER, lenght INTEGER, approves INTEGER, disapproves INTEGER, content TEXT, FOREIGN KEY (project_id) REFERENCES project(project_id))"
)
cursor.execute(
    "INSERT INTO project VALUES (1, 'Official', 'Ustawa o ochronie danych osobowych', '2020-01-01', '2020-01-01', 0, 0)"
)
cursor.execute(
    "INSERT INTO project VALUES (2, 'Proposition', 'Ustawa o ochronie danych osobowych', '2020-01-01', '2020-01-01', 0, 0)"
)
cursor.execute(
    "INSERT INTO amendments VALUES (1, 'Jan Kowalski', 'Zmiana w art. 1', '2020-01-01', 1, 1, 0, 0, 'Zmienić art. 1')"
)
cursor.execute(
    "INSERT INTO amendments VALUES (1, 'Jan Kowalski', 'Zmiana w art. 2', '2020-01-01', 2, 1, 0, 0, 'Zmienić art. 2')"
)
cursor.execute(
    "INSERT INTO amendments VALUES (2, 'Jan Kowalski', 'Zmiana w art. 1', '2020-01-01', 1, 1, 0, 0, 'Upupic kaczora')"
)
conn.commit()"""


to_send()
