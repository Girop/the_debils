def to_json_amendment(att):
    attributes = [
        "project_id",
        "author",
        "date",
        "position",
        "lenght",
        "approves",
        "disapproves",
        "content",
    ]
    dict_to_json = {}
    for a, b in zip(attributes, att):
        dict_to_json[a] = b
    return dict_to_json


def to_json_project(att):
    attributes = [
        "project_id",
        "project_type",
        "content",
        "post_date",
        "vote_date",
        "approves",
        "disapproves",
        "amendments",
    ]
    dict_to_json = {}
    for a, b in zip(attributes, att):
        dict_to_json[a] = b
    return dict_to_json
