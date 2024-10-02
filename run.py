from g4f.gui import run_gui

import sys
import os.path
import webview
try:
    from platformdirs import user_config_dir
    has_platformdirs = True
except ImportError:
    has_platformdirs = False

import threading

from g4f.gui.gui_parser import gui_parser
from g4f.gui.server.js_api import JsApi
import g4f.version
import g4f.debug

from flask import url_for

import atexit

def on_closed():
    print("Stop Server...")

def run_webview(
    debug: bool = False,
    http_port: int = None,
    ssl: bool = True,
    storage_path: str = None,
    gui: str = None
):
    webview.settings['OPEN_EXTERNAL_LINKS_IN_BROWSER'] = True
    webview.settings['ALLOW_DOWNLOADS'] = True
    # f"g4f - {g4f.version.utils.current_version}",
    webview.create_window(
        "FreeAI App",
        "http://127.0.0.1:8080/chat/",
        text_select=True,
        js_api=JsApi(),
        width=1100, height=700
    )

    if has_platformdirs and storage_path is None:
        storage_path = user_config_dir("g4f-webview")
    webview.start(
        private_mode=False,
        storage_path=storage_path,
        debug=debug,
        http_port=http_port,
        ssl=ssl,
        gui=gui
    )


if __name__ == "__main__":
    atexit.register(on_closed)

    server = threading.Thread(target=run_gui)
    server.daemon = True
    server.start()
    
    parser = gui_parser()
    args = parser.parse_args()
    if args.debug:
        g4f.debug.logging = True
    run_webview(debug=args.debug, http_port=args.port, ssl=True, storage_path=None, gui=None)
