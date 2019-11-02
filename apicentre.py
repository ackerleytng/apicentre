#!/usr/bin/env python

import os
import sys
import click
import yaml
from jinja2 import Template
from pydantic import BaseModel


class LinkInfo(BaseModel):
    path: str
    label: str
    addr: str

def render(links):
    with open("template.js") as file_:
        template = Template(file_.read())

    return template.render(links=links)

@click.command()
@click.argument('link_info_path', type=click.File('rb'))
def main(link_info_path):
    link_info_list = yaml.load(link_info_path.read(), Loader=yaml.SafeLoader)

    links = [LinkInfo(**l) for l in link_info_list]

    script_dir = os.path.dirname(os.path.abspath(__file__))
    with open(os.path.join(script_dir, "src", "App.js"), "w") as f:
        f.write(render(links))


if __name__ == "__main__":
    main()
