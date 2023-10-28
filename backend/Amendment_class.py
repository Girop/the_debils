import json
import datetime


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


class Project:
    def __init__(
        self,
        project_id: int,
        project_type: str,
        content: str,
        post_date: str,
        vote_date: str,
        approves: int,
        disapproves: int,
    ):
        self.project_id = project_id
        self.project_type = project_type
        self.content = content
        self.post_date = post_date
        self.vote_date = vote_date
        self.approves = approves
        self.disapproves = disapproves
        self.content = content

    @staticmethod
    def to_json(att):
        attributes = [
            "project_id",
            "project_type",
            "content",
            "post_date",
            "vote_date",
            "approves",
            "disapproves",
        ]
        dict_to_json = {}
        for a, b in zip(attributes, att):
            dict_to_json[a] = b
        return json.dumps(dict_to_json)
