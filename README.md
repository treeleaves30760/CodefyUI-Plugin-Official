# CodefyUI-Plugin-Official

> The official starter template for [CodefyUI](https://github.com/treeleaves30760/CodefyUI) plugin packs. **Fork this repo to publish your own plugin.**

This template is a complete, working CodefyUI plugin. It ships:

- A fully-commented [`cdui.plugin.toml`](./cdui.plugin.toml) manifest
- Two example nodes — [`HelloPlugin`](./nodes/hello_plugin_node.py) (minimal) and [`MovingAverage`](./nodes/moving_average_node.py) (uses torch + Teaching Inspector steps)
- Example workflows under [`examples/`](./examples) the CodefyUI example browser picks up
- An [`assets/`](./assets) directory CodefyUI serves at `/plugins/<your-id>/assets/...`
- A `tests/` suite a forker can extend

Users install this exact repo with:

```bash
cdui plugin install treeleaves30760/CodefyUI-Plugin-Official
# or pin a tag
cdui plugin install treeleaves30760/CodefyUI-Plugin-Official@v0.1.0
```

---

## Forking the template (5 minutes)

1. **Fork on GitHub** — hit the *Fork* button at the top of this page.
2. **Clone your fork** locally:
   ```bash
   git clone git@github.com:your-username/your-repo.git
   cd your-repo
   ```
3. **Edit [`cdui.plugin.toml`](./cdui.plugin.toml)**:
   - Change `plugin.id` to a globally-unique kebab-case name (`^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$`). It must NOT collide with a built-in catalog id (`c1`–`c6`).
   - Update `name`, `description`, `version`, `authors`, `homepage`.
   - Keep `schema_version = 1` and align `requires_codefyui` with the CodefyUI version you've tested against.
4. **Replace the example nodes** in [`nodes/`](./nodes) with yours. Each `.py` file under `nodes/` whose classes subclass `BaseNode` and define `NODE_NAME` gets auto-registered.
5. **Update [`tests/conftest.py`](./tests/conftest.py)** — change `PLUGIN_ID` to match the id in your manifest.
6. **Test locally** (see [Local testing](#local-testing) below).
7. **Push to GitHub**, tag a release, and tell your users:
   ```bash
   cdui plugin install your-username/your-repo
   ```

---

## File layout

```
your-plugin-repo/
├── cdui.plugin.toml          # REQUIRED — the manifest
├── README.md
├── LICENSE
├── nodes/                    # REQUIRED — your BaseNode subclasses
│   ├── __init__.py           # REQUIRED, empty
│   └── *.py                  # one or more node files
├── presets/                  # optional — *.json preset files
├── examples/                 # optional — graph.json under <Category>/<Name>/
├── assets/                   # optional — static files served at /plugins/<id>/assets/
└── tests/                    # optional — your own pytest suite
    ├── conftest.py
    └── test_*.py
```

The directory names in `[content]` of the manifest are **conventions**, not magic. You can override any of them in `cdui.plugin.toml` if you want a different layout, but the defaults match this template.

---

## Manifest reference

| Field | Required | Notes |
|-------|----------|-------|
| `plugin.id` | ✔ | lowercase kebab-case; `^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$`; used as install-dir name and Python module name (kebab → snake). |
| `plugin.name` | ✔ | Display name. |
| `plugin.version` | ✔ | Semver. |
| `plugin.description` | ✔ | One paragraph; shown in `info` / `search` / palette tooltips. |
| `plugin.schema_version` | ✔ | `1` today. The CLI rejects unknown versions. |
| `plugin.requires_codefyui` | ✔ | PEP 440 specifier — pin the lowest version you've tested against. |
| `plugin.authors`, `license`, `homepage` | — | Free-text metadata, surfaced in `info`. |
| `content.nodes_dir` | — | Default `nodes`. |
| `content.presets_dir` | — | Default `presets`. |
| `content.examples_dir` | — | Default `examples`. |
| `content.assets_dir` | — | Default `assets`. Mounted at `/plugins/<id>/assets/`. |
| `python_deps.<name>` | — | Constraint string (`>=1.0`, `==2.3.4`, or bare version). Installed via `uv pip install` into the codefyui venv. |
| `lessons.chapters`, `lessons.lessons` | — | Cross-link to a textbook / lesson series. Shown in `info` and tooltips. |
| `security.allowed_modules` | — | Extras for the AST validator allow-list. Forces `--trust-author` on URL installs. |

---

## Writing a node

Subclass `BaseNode`, define `NODE_NAME` / `CATEGORY` / `DESCRIPTION`, implement the classmethods plus `execute`:

```python
from app.core.node_base import (
    BaseNode, DataType, ParamDefinition, ParamType, PortDefinition,
)

class MyNode(BaseNode):
    NODE_NAME = "MyNode"
    CATEGORY = "Demo"
    DESCRIPTION = "What this node does."

    @classmethod
    def define_inputs(cls):
        return [PortDefinition(name="x", data_type=DataType.TENSOR)]

    @classmethod
    def define_outputs(cls):
        return [PortDefinition(name="y", data_type=DataType.TENSOR)]

    @classmethod
    def define_params(cls):
        return [ParamDefinition(name="factor", param_type=ParamType.FLOAT, default=1.0)]

    def execute(self, inputs, params, progress_callback=None, *, context=None):
        return {"y": inputs["x"] * params["factor"]}
```

Available `DataType` values: `TENSOR`, `MODEL`, `DATASET`, `DATALOADER`, `OPTIMIZER`, `LOSS_FN`, `SCALAR`, `STRING`, `IMAGE`, `LIST`, `ANY`, `TRIGGER`.

Available `ParamType` values: `INT`, `FLOAT`, `STRING`, `BOOL`, `SELECT`, `MODEL_FILE`, `IMAGE_FILE`, `TENSOR_GRID`.

### Teaching Inspector integration

If your node performs a multi-step computation, record intermediate tensors with `StepRecorder`:

```python
from app.core.step_trace import StepRecorder

def execute(self, inputs, params, *, context=None):
    verbose = context is not None and getattr(context, "verbose", False)
    recorder = StepRecorder() if verbose else None

    y = inputs["x"] * 2
    if recorder is not None:
        recorder.record("double", "y = 2x", x=inputs["x"], y=y)

    y = y + 1
    if recorder is not None:
        recorder.record("offset", "y = y + 1", y=y)

    result = {"output": y}
    if recorder is not None and recorder.steps:
        result["__steps__"] = recorder.steps
    return result
```

Students who toggle ⚙ Settings → Verbose mode and click your node in the canvas see every step.

See [`nodes/moving_average_node.py`](./nodes/moving_average_node.py) for a runnable example.

---

## AST security gate

CodefyUI runs a strict AST validator on every `nodes/*.py` file before it'll install a third-party plugin from a URL. Blocked by default:

**Modules** (top-level): `os`, `subprocess`, `shutil`, `sys`, `importlib`, `ctypes`, `socket`, `http`, `urllib`, `requests`, `pathlib`, `tempfile`, `signal`, `pickle`, `shelve`, `code`, `codeop`, `compileall`.

**Builtin calls**: `exec`, `eval`, `compile`, `__import__`, `breakpoint`, `globals`, `locals`, `getattr`*, `setattr`*, `delattr`*.

*\* `getattr` / `setattr` / `delattr` are allowed when the attribute name is a string literal: `getattr(context, "verbose", False)` works, `getattr(obj, dynamic_name)` doesn't.*

If your plugin legitimately needs one of the banned modules, list it in `[security].allowed_modules` and users must install with `--trust-author`. Use this **sparingly** — most teaching nodes don't need it, and asking for it makes installation friction.

---

## Local testing

The example tests show the pattern. The tricky bit: at test time you haven't `cdui plugin install`'d the plugin, so the `cdui_plugins.<your-id>.*` synthetic namespace doesn't exist. [`tests/conftest.py`](./tests/conftest.py) sets it up manually.

Run with the CodefyUI backend venv active:

```bash
# from your plugin repo root
cd path/to/CodefyUI/backend          # any directory with the codefyui venv works
uv run pytest path/to/your-plugin/tests/
```

Or set `PYTHONPATH` to include CodefyUI's `backend/`:

```bash
cd path/to/your-plugin
PYTHONPATH=path/to/CodefyUI/backend pytest tests/
```

---

## Publishing

1. Commit your changes.
2. Tag a release: `git tag v0.1.0 && git push --tags`.
3. Push the branch: `git push`.

Users now install your plugin with one of:

```bash
cdui plugin install your-username/your-repo
cdui plugin install your-username/your-repo@v0.1.0
cdui plugin install https://github.com/your-username/your-repo
```

`cdui plugin install` will:
1. Resolve the ref to a SHA via the GitHub API.
2. Download the tarball from `codeload.github.com`.
3. Read + validate your manifest.
4. AST-validate every `nodes/*.py`.
5. Atomically move the contents to `<USER_DATA>/plugins/<your-id>/`.
6. Run `uv pip install` for your `python_deps`.
7. Hot-reload the running backend if `cdui start` is up.

A confirmation prompt protects users on first install; pass `-y` to skip it in CI.

---

## What goes where

| You want to ship... | Put it in... | Discovered as |
|---------------------|--------------|---------------|
| A node | `nodes/your_node_file.py` | `/api/nodes` with `provider: "plugin:<your-id>"` |
| A preset | `presets/*.json` | `/api/presets` |
| An example graph | `examples/<Category>/<Name>/graph.json` | `/api/examples/list` with `source: "plugin:<your-id>"` |
| A static file (CSV, image, JSON) | `assets/your_file` | `/plugins/<your-id>/assets/your_file` |

---

## License

This template is MIT (see [LICENSE](./LICENSE)) — your fork is free to use any license you like.

CodefyUI itself is AGPL-3.0-only.
