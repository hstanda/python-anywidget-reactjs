import anywidget
import traitlets

class CounterWidget(anywidget.AnyWidget):
    _esm = "./_frontend/index.js"
    _css = ""
    count = traitlets.Int(0).tag(sync=True)
    dark = traitlets.Bool(False).tag(sync=True)
