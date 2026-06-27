import './styles.css';
import { defineTool } from './sdk';
import { ExamplePanel } from './ExamplePanel';

// The editor imports this bundle and calls the default export once at startup,
// passing the CodefyUIPluginAPI. `defineTool` mounts your React component into a
// floating widget and makes the API available to the whole tree via hooks.
export default defineTool({ id: 'official-template-panel', title: 'Official Template' }, ExamplePanel);
