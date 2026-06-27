import { useGraph, useNodeDefinitions, useToast, useApplyOperations } from './sdk';
import type { CodefyUIPluginAPI } from './sdk';

/**
 * A minimal React panel showing the SDK hooks in action: live graph state,
 * the node palette, toasts, and a graph mutation — all typed, no hand-written
 * `index.js`. Replace this with your own UI.
 */
export function ExamplePanel({ api }: { api: CodefyUIPluginAPI }) {
  const graph = useGraph();
  const definitions = useNodeDefinitions();
  const toast = useToast();
  const apply = useApplyOperations();

  const addLinear = () => {
    const result = apply([
      { op: 'add_node', node_type: 'Linear', position: { x: 240, y: 200 } },
    ]);
    if (result.results.every((r) => r.ok)) {
      toast('Added a Linear node', 'success');
    } else {
      toast('Could not add node — is the "Linear" type installed?', 'warning');
    }
  };

  return (
    <div className="cdui-example" data-testid="official-template-panel">
      <div className="cdui-example__title">Official Template (React)</div>
      <div className="cdui-example__row">
        plugin: <b>{api.pluginId}</b> · API v{api.apiVersion}
      </div>
      <div className="cdui-example__row">
        nodes on canvas: <b data-testid="node-count">{graph.nodes.length}</b>
      </div>
      <div className="cdui-example__row">
        node types available: <b>{definitions.length}</b>
      </div>
      <button className="cdui-example__btn" onClick={addLinear}>
        Add a Linear node
      </button>
    </div>
  );
}
