import sqlite3


def add_project(data, databse_path):
    project_id = data["project_id"]
    project_type = data["project_type"]
    title = data["title"]
    content = data["content"]
    post_date = data["post_date"]
    vote_date = data["vote_date"]
    approves = data["approves"]
    disapproves = data["disapproves"]
    author = data["author"]
    tags = data["tags"]

    conn = sqlite3.connect(databse_path)
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO project VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        (
            project_id,
            project_type,
            title,
            content,
            post_date,
            vote_date,
            approves,
            disapproves,
            author,
        ),
    )

    for tag in tags:
        cursor.execute("INSERT INTO project_tags VALUES (?, ?)", (tag, project_id))
    conn.commit()
    conn.close()

def add_amendment(data, databse_path):
    project_id = data["project_id"]
    author = data["author"]
    date = data["date"]
    position = data["position"]
    lenght = data["lenght"]
    approves = data["approves"]
    disapproves = data["disapproves"]
    content = data["content"]

    conn = sqlite3.connect(databse_path)
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO amendments VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        (project_id, author, date, position, lenght, approves, disapproves, content),
    )
    conn.commit()
    conn.close()
