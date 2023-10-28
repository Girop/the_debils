import sqlite3
from to_json_defs import to_json_amendment, to_json_project, to_json_ann


def prepare_project(database_path):
    conn = sqlite3.connect(database_path)
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM project")
    projects = cursor.fetchall()
    cursor.execute("SELECT * FROM amendments")
    amendments = cursor.fetchall()
    cursor.execute("SELECT * FROM project_tags")
    tags = cursor.fetchall()
    conn.close()
    projects_finished = []
    pos = len(projects[0])
    for pro in projects:
        project = list(pro)
        project_id = project[0]
        project.append([])
        project.append([])
        for amendment in amendments:
            if amendment[0] == project_id:
                project[pos].append(to_json_amendment(amendment))
        for tag in tags:
            if tag[1] == project_id:
                project[pos + 1].append(tag[0])

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


def prepare_tags(database_path):
    conn = sqlite3.connect(database_path)
    cursor = conn.cursor()
    cursor.execute("SELECT name FROM project_tags")
    tags = cursor.fetchall()
    conn.close()
    all_tags = []
    for tag in tags:
        if tag[0] not in all_tags:
            all_tags.append(tag[0])
    return all_tags
