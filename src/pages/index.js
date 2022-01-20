import React, { useState } from "react"
import styled from "@emotion/styled"
import { cipher } from "../helpers"

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border: 12px black solid;
  border-radius: 24px;
  margin: 48px auto;
  max-width: 1280px;
`

const Label = styled('label')`
  display: block;
  margin-bottom: 4px;
`

const MessageList = styled('div')`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-auto-rows: 200px;
  width: 100%;
`

const MessageItem = styled('div')`
  text-align: center;
`;

const IndexPage = () => {
  const [input, setInput] = useState("");
  const [key, setKey] = useState("");
  const [results, setResults] = useState([]);
  const [action, setAction] = useState("encrypt");

  const onSubmit = () => {
    const result = {
      input,
      key,
      action,
      result: cipher(input, key, action),
    };

    setResults([...results, result]);
  };

  return (
    <Container>
      <h2>Vigenere Cipher</h2>
      <div>
        <Label>Input:</Label>
        <input 
          value={input}
          placeholder="Input"
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div>
        <Label>Key:</Label>
        <input
          value={key}
          placeholder="Key"
          type="text"
          onChange={(e) => setKey(e.target.value)}
        />
      </div>
      <div>
        <input 
          type="radio"
          value="encrypt"
          name="action"
          checked={action === "encrypt"}
          onChange={() => setAction("encrypt")}
        /> 
        <span>Encrypt</span>
        <input 
          type="radio"
          value="decrypt"
          name="action" 
          checked={action === "decrypt"}
          onChange={() => setAction("decrypt")} 
        />
        <span>Decrypt</span>
      </div>
      <button onClick={onSubmit}>Submit</button>
      <MessageList>
        {results.map(({ input, key, action, result }) => {
          return (
            <MessageItem key={`${input}_${key}_${action}`}>
              <div>Input: {input}</div>
              <div>Key: {key}</div>
              <div>Action: {action}</div>
              <div>Result: {result}</div>
            </MessageItem>
          )
        })}
      </MessageList>
    </Container>
  )
}

export default IndexPage
