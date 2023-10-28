import sqlite3
from to_json_defs import to_json_amendment, to_json_project, to_json_ann


def prepare_project(database_path):
    conn = sqlite3.connect(database_path)
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM project")
    projects = cursor.fetchall()
    cursor.execute("SELECT * FROM amendments")
    amendments = cursor.fetchall()
    conn.close()
    projects_finished = []
    pos = len(projects[0])
    for pro in projects:
        project = list(pro)
        project_id = project[0]
        project.append([])
        for amendment in amendments:
            if amendment[0] == project_id:
                project[pos].append(to_json_amendment(amendment))

        projects_finished.append(to_json_project(project))

    return projects_finished


def prepare_announcements(database_path):
    conn = sqlite3.connect(database_path)
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM announcements")
    announcements = cursor.fetchall()
    conn.close()
    all_announcements = []
    for annoucement in announcements:
        all_announcements.append(to_json_ann(annoucement))
    return all_announcements
