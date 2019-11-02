import os
from jinja2 import Template
from pydantic import BaseModel

def render(links):
    with open("template.js") as file_:
        template = Template(file_.read())

    return template.render(links=links)

class LinkInfo(BaseModel):
    path: str
    label: str
    addr: str

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    links = [
        LinkInfo(path="pyjwt", label="Pyjwt", addr="https://pyjwt.readthedocs.io/en/latest/usage.html"),
    ]

    with open(os.path.join(script_dir, "src", "App.js"), "w") as f:
        f.write(render(links))


if __name__ == "__main__":
    main()
