import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import AceEditor from "react-ace";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import {GET_LANGUAGE,FIRST_SUBMISSION_URL, getSubmissionDetails} from '../../config/config'
import axios from "axios";


import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

import "./CodeEditor.style.css";

const EditorLayout = ({ setOutput }) => {
  const [language, setLanguage] = useState('');
  const [isCompiling, setIsCompiling] = useState(false);
  const [allLanguages, setAllLanguage] = useState([]);
  const [codeInput, setCodeInput] = useState('');
  const [ stdin, setStdin] = useState('');
  const [isCompileAndTestAcitve,setIsCompileAndTestActive] = useState(false);
  const onChange = (newValue) => {
     setCodeInput(newValue);
  }
  const handleLanguageChange = async (event) => {
    console.log("language id", event.target)
    setLanguage(event.target.value);
  };
  const handleCompileAndTest = async () => {
    if(codeInput != '' && language != '') {
      const request = {
        "source_code": `${codeInput}`,
        "language_id": `${language?.id}`,
        "stdin": `${stdin}`,
        "number_of_runs": 1,
      }
        await axios.post(FIRST_SUBMISSION_URL,request)
        .then(({data})=>{
          if(localStorage.getItem('myrecentcode')) {
               localStorage.removeItem('myrecentcode')
          }
          localStorage.setItem("myrecentcode", data?.token);
        })
        setTimeout(()=> {
           fetchSubmissionDetail();
        },2000)
    
    }
    setIsCompiling(true);
    setTimeout(()=>{
      setIsCompiling(false);
    },5000);

  }
  const fetchSubmissionDetail = ()=> {
         const token = localStorage.getItem('myrecentcode');
         console.log("this is token",token)
          const url = getSubmissionDetails(token);
          axios.get(url)
          .then(({data})=> {
            setOutput({...data,language: language, stdin:stdin });
          })
  }
  const fetchLanguage = () => {
     axios.get(GET_LANGUAGE).then((response)=> {
      setAllLanguage(response?.data)
      console.log(response?.data)
     })
  }
  console.log(language)
  useEffect(()=> {
    fetchLanguage();
  },[])
  return (
    <>
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
            <InputLabel id="demo-select-small">{language == '' ? 'Select Language': language?.name}</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={language?.name}
              label="javascript"
              onChange={handleLanguageChange}
            >

              {allLanguages.map((item)=> {
                         return (<MenuItem value={item} key={item?.id} >
                         {item?.name}
                       </MenuItem>)
              })}
            </Select>
          </FormControl>
        </Paper>
      </Box>

      <AceEditor
        placeholder="Enter here your code"
        mode={language?.name.split('')[0].toLowerCase()}
        theme="monokai"
        fontSize={14}
        width="100%"
        marginLeft="1%"
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        onChange={onChange}
        value={codeInput}
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
           {isCompiling ? (<p>Compiling...</p>) : (<p onClick={handleCompileAndTest}>Compile and Test</p>)} 
          </Button>
        </Paper>
      </Box>
    </>
  );
};

export default EditorLayout;
