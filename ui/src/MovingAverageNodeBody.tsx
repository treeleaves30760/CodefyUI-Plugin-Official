import type { NodeRenderContext } from './sdk';

/**
 * A custom React body for the MovingAverage node card, drawn via
 * `api.nodes.registerRenderer`. It receives the live node context and shows the
 * node's params — replace this with whatever inline UI your node needs.
 */
export function MovingAverageNodeBody({ node }: { node: NodeRenderContext['node'] }) {
  const entries = Object.entries(node.params);
  return (
    <div className="cdui-node-body" data-testid="ma-node-body">
      <div className="cdui-node-body__title">React node body</div>
      {entries.length === 0 ? (
        <div className="cdui-node-body__row">(no params)</div>
      ) : (
        entries.map(([key, value]) => (
          <div className="cdui-node-body__row" key={key}>
            <span>{key}</span>
            <b>{String(value)}</b>
          </div>
        ))
      )}
    </div>
  );
}
