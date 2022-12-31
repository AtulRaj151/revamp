import React, { useState } from "react";
import { Container, TextField } from "@mui/material";
import SplitPane from "react-split-pane";
import Checkbox from "@mui/material/Checkbox";
import TextareaAutosize from "@mui/base/TextareaAutosize";

import EditorLayout from "./EditorLayout";
import { CustomTestCaseWrapper } from "./CodeEditor.style";

const Editor = () => {
  const [isCustomTest, setIsCustomTest] = useState(false);
  return (
    <Container
      sx={{
        marginTop: 10,
      }}
    >
      <SplitPane split="vertical" minSize={50} defaultSize="40%">
        <Container
          sx={{
            width: 1 / 2,
          }}
        >
          Problems
        </Container>
        <Container
          sx={{
            padding: 2,
          }}
        >
          <EditorLayout />
          <Checkbox
            color="success"
            checked={isCustomTest}
            onClick={() => {
              setIsCustomTest(!isCustomTest);
            }}
          />
          <span>Custom Testcase</span>

          {isCustomTest && (
            <CustomTestCaseWrapper>
              <TextField
                id="outlined-multiline-static"
                label="testcase"
                multiline
                rows={4}
              />
            </CustomTestCaseWrapper>
          )}
        </Container>
      </SplitPane>
    </Container>
  );
};

export default Editor;
