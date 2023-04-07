from miranda.framework.handle.plugins.base_plugin import BasePlugin
from win11toast import toast

class SamplePlugin(BasePlugin):
    def __init__(self):
        super().__init__()
        
    def add(self, arg1, arg2):
        return arg1 + arg2

    def toast(self, message):
        toast(message, 'python 🐍')