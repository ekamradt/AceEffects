import React from "react";
import SplitPane, { Pane } from "react-split-pane-v2-ts";

const HomePage = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  function setSize(size: any) {
    throw new Error("Function not implemented.");
  }

  return (
    <SplitPane
      // defaultSize={{ left: 50, right: 50 }}
      // size={{ left: collapsed ? 0 : 5, right: 590 }}
      // onSizeChange={(size) => setSize(size)}
      split="vertical"
      defaultSize={20}
       minSize={50}
       maxSize={30}
      style={{ background: "#f0f0f0", borderLeft: "1px solid #ccc" }}
    >
      <Pane initialSize="100px">
        <div>
          Pane 1<br />
          Pane 1<br />
          Pane 1<br />
        </div>
      </Pane>
      <Pane>
        <div>
          Pane 2 <br />
          Pane 2 <br />
        </div>
      </Pane>
    </SplitPane>
  );
};

export default HomePage;
