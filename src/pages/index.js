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
  grid-auto-rows: 275px;
  width: 100%;
`

const Message = styled('div')`
  padding: 0 16px;
`

const MessageItem = styled('div')`
  margin-bottom: 8px;
  overflow-wrap: break-word;
`

const Textarea = styled('textarea')`
  font-family: inherit;
  font-size: inherit;
  width: 300px;
`

const BoldText = styled('h4')`
  display: inline;
`

const IndexPage = () => {
  const [input, setInput] = useState("")
  const [key, setKey] = useState("")
  const [results, setResults] = useState([])
  const [action, setAction] = useState("encrypt")

  const onSubmit = () => {
    const result = {
      input,
      key,
      action,
      result: cipher(input, key, action),
    }

    setResults([...results, result])
  }

  const updateKey = (e) => {
    console.log('e.target.value', e.target.value)
    if (/^[a-zA-Z]+$/.test(e.target.value)) {
      setKey(e.target.value)
    }
  }

  return (
    <Container>
      <h2>Vigenere Cipher</h2>
      <div>
        <Label>Input:</Label>
        <Textarea 
          value={input}
          placeholder="Input"
          rows={4}
          maxLength={150}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div>
        <Label>Key:</Label>
        <input
          value={key}
          placeholder="Key"
          type="text"
          onChange={updateKey}
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
            <Message key={`${input}_${key}_${action}`}>
              <MessageItem><BoldText>Input: </BoldText>{input}</MessageItem>
              <MessageItem><BoldText>Key: </BoldText>{key}</MessageItem>
              <MessageItem><BoldText>Action: </BoldText>{action}</MessageItem>
              <MessageItem><BoldText>Result: </BoldText>{result}</MessageItem>
            </Message>
          )
        })}
      </MessageList>
    </Container>
  )
}

export default IndexPage
