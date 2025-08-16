import anywidget
import traitlets
import pathlib

class CounterWidget(anywidget.AnyWidget):
    _esm = pathlib.Path("_frontend/index.js")
    count = traitlets.Int(0).tag(sync=True)
    dark = traitlets.Bool(False).tag(sync=True)