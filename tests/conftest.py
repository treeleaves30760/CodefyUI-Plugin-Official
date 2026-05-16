"""pytest conftest for plugin-author-side tests.

When this plugin is installed via ``cdui plugin install``, CodefyUI itself
registers it under the ``cdui_plugins.official_template.*`` synthetic
namespace. For local development we need to do the same thing manually so
``from cdui_plugins.official_template.nodes.hello_plugin_node import
HelloPluginNode`` works during ``pytest``.

This conftest:
  1. Registers a synthetic ``cdui_plugins`` namespace package
  2. Adds ``cdui_plugins.official_template`` whose ``__path__`` is this repo
  3. Lets Python's normal import machinery find ``nodes/...`` underneath

If you rename the plugin (`cdui.plugin.toml > [plugin].id`), update
``PLUGIN_ID`` below to match.
"""

from __future__ import annotations

import sys
import types
from pathlib import Path

PLUGIN_ID = "official-template"
_PY_ID = PLUGIN_ID.replace("-", "_")
_REPO_ROOT = Path(__file__).resolve().parents[1]

_pkg = sys.modules.get("cdui_plugins")
if _pkg is None:
    _pkg = types.ModuleType("cdui_plugins")
    _pkg.__path__ = []
    sys.modules["cdui_plugins"] = _pkg

_sub_name = f"cdui_plugins.{_PY_ID}"
if _sub_name not in sys.modules:
    _sub = types.ModuleType(_sub_name)
    _sub.__path__ = [str(_REPO_ROOT)]
    sys.modules[_sub_name] = _sub
    setattr(_pkg, _PY_ID, _sub)
