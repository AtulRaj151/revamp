import React from "react";
import Divider from "@mui/material/Divider";
import { Container } from "@mui/material";
import {
  OutputTextWrapper,
  ResultBlockTimeContainer,
} from "./CodeEditor.style";

const OutputView = () => {
  return (
    <Container
      data-testid="output-view-container"
      sx={{ display: "flex", flex: "2 1 auto", flexDirection: "column" }}
    >
      <Divider sx={{ margin: 1 }} />
      <div data-testid="submit-help">
        <b>Note</b>: When you Compile & Test code, the code is run against
        sample inputs. When you Submit code, the code is run against sample
        input as well as multiple hidden test cases. In order to solve the
        problem, your code must pass all of the test cases.
      </div>
      <Divider sx={{ margin: 1 }} />
      <ResultBlockTimeContainer data-testid="result-block-time-details">
        <div data-testid="time">
          <OutputTextWrapper>
            <b>Time(Sec)</b>
          </OutputTextWrapper>
          <OutputTextWrapper>249234</OutputTextWrapper>
        </div>
        <div data-tesid="memory">
          <OutputTextWrapper>
            <b>Memory(KiB)</b>
          </OutputTextWrapper>
          <OutputTextWrapper>2</OutputTextWrapper>
        </div>
        <div data-tesid="langauge">
          <OutputTextWrapper>
            <b>language</b>
          </OutputTextWrapper>
          <OutputTextWrapper>C</OutputTextWrapper>
        </div>
      </ResultBlockTimeContainer>
      <Divider sx={{ margin: 1 }} />
      <Container data-testid="input-detail">
        <OutputTextWrapper>
          <b>Input</b>
        </OutputTextWrapper>
        <OutputTextWrapper>1</OutputTextWrapper>
        <OutputTextWrapper>2 3</OutputTextWrapper>
      </Container>
      <Divider sx={{ margin: 1 }} />
      <Container data-testid="output-detail">
        <OutputTextWrapper>
          <b>Output</b>
        </OutputTextWrapper>
        <OutputTextWrapper>4</OutputTextWrapper>
      </Container>
      <Divider sx={{ margin: 1 }} />
      <Container data-testid="expected-output" sx={{ marginBottom: "8px" }}>
        <OutputTextWrapper>
          <b>Expected Output</b>
        </OutputTextWrapper>
        <OutputTextWrapper>4</OutputTextWrapper>
      </Container>
      <Divider sx={{ margin: "8px 0" }} />
    </Container>
  );
};

export default OutputView;
