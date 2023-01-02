import React from "react";
import { Checkbox, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { CustomTestCaseWrapper } from "./CodeEditor.style";

const CustomTestCase = ({ setIsCustomTest, isCustomTest }) => {
  return (
    <Container data-testid="custom-test" sx={{}}>
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
  );
};

export default CustomTestCase;
