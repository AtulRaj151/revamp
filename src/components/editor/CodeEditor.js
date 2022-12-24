import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import SplitPane from "react-split-pane";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import AceEditor from "react-ace";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

import "./CodeEditor.style.css";
import { color } from "@mui/system";

const Editor = () => {
  const [language, setLanguage] = useState("javascript");
  function onChange(newValue) {
    console.log("change", newValue);
  }
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

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
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                width: 1,
                height: 40,
              },
              color: "Menu",
            }}
          >
            <Paper
              elevation={0}
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                color: "Menu",
              }}
            >
              <FormControl sx={{ minWidth: 175, marginRight: 4 }} size="small">
                <InputLabel id="demo-select-small">select language</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={language}
                  label="javascript"
                  onChange={handleLanguageChange}
                >
                  <MenuItem value="javascript" defaultChecked>
                    javascript
                  </MenuItem>
                  <MenuItem value="java">java</MenuItem>
                  <MenuItem value="c++">c++</MenuItem>
                </Select>
              </FormControl>
            </Paper>
          </Box>

          <AceEditor
            placeholder="Enter here your code"
            mode="javascript"
            theme="monokai"
            fontSize={14}
            width="100%"
            marginLeft="1%"
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            onChange={onChange}
            value={`function onLoad(editor) {
      console.log("i've loaded");
    }`}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 2,
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                width: 1,
                height: 60,
              },
              color: "Menu",
            }}
          >
            <Paper
              elevation={0}
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                color: "Menu",
                justifyContent: "space-around",
              }}
            >
              <Button
                variant="contained"
                sx={{ width: "27%", marginTop: "10px", height: 40 }}
                color="success"
              >
                Submit
              </Button>
              <Button
                variant="outlined"
                sx={{ width: "27%", marginTop: "10px", height: 40 }}
                color="success"
              >
                Compile and Test
              </Button>
            </Paper>
          </Box>
        </Container>
      </SplitPane>
    </Container>
  );
};

export default Editor;