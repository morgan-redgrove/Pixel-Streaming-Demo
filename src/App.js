import "rsuite/dist/rsuite.min.css";
import { ButtonGroup, Button } from "rsuite";
import { MetaProvider, MetaEditor, Hooks } from "pixel-streaming";
import "./App.scss";

const Player = () => {
  const actions = Hooks.actions();

  return (
    <>
      <MetaEditor
        showToolbar
        psHost="ws://127.0.0.1:80"
        psConfig={{
          autoConnect: true,
          hoveringMouse: true,
          fakeMouseWithTouches: true,
          matchViewportRes: true,
        }}
      >
        <div className="logo">
          <img src="https://www.or3d.co.uk/wp-content/themes/or3d/assets/img/logo-white-no-strapline.svg" />
          <h1>Pixel Streaming Demo</h1>{" "}
        </div>
      </MetaEditor>
    </>
  );
};

export default function AppHOC() {
  return (
    <MetaProvider>
      <Player />
    </MetaProvider>
  );
}
