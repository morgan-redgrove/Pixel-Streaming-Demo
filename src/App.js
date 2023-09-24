import "rsuite/dist/rsuite.min.css";
import { ButtonGroup, Button } from "rsuite";
import { MetaProvider, MetaEditor, Hooks } from "pixel-streaming";

const Player = () => {
  const actions = Hooks.actions();

  return (
    <MetaEditor
      debugMode
      showToolbar
      psHost="ws://127.0.0.1:80"
      psConfig={{
        autoConnect: true,
        hoveringMouse: true,
        fakeMouseWithTouches: true,
        matchViewportRes: true,
      }}
    />
  );
};

export default function AppHOC() {
  return (
    <MetaProvider>
      <Player />
    </MetaProvider>
  );
}
