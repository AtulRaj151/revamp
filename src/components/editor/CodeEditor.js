import React, { useState } from "react";
import { Container } from "@mui/material";
import SplitPane from "react-split-pane";
import OutputView from "./OutputView";

import EditorLayout from "./EditorLayout";
import CustomTestCase from "./CustomTestCase";

const Editor = () => {
  const [isCustomTest, setIsCustomTest] = useState(false);
  return (
    <Container
      sx={{
        marginTop: 10,
        height: "100vh",
      }}
    >
      <SplitPane
        split="vertical"
        minSize={50}
        defaultSize="40%"
        style={{ height: "auto" }}
      >
        <Container
          sx={{
            width: 1 / 2,
            height:'100vh',
            overflowY:'scroll'
          }}
          data-testid="problem-section"
        >
          Problems
        </Container>
        <Container
          sx={{
            padding: 2,
            height:'100vh',
            overflowY:'scroll'

          }}
          data-testid="editor-section"
        >
          <EditorLayout />
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CustomTestCase
              isCustomTest={isCustomTest}
              setIsCustomTest={setIsCustomTest}
            />

            <OutputView />
          </Container>
        </Container>
      </SplitPane>
    </Container>
  );
};

export default Editor;
