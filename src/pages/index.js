import React, { useState } from "react"
import { cipher } from "../helpers"

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
    <div>
      <input 
        value={input}
        placeholder="Input"
        type="text"
        onChange={(e) => setInput(e.target.value)}
      />
      <input 
        value={key}
        placeholder="Key"
        type="text"
        onChange={(e) => setKey(e.target.value)}
      />
      <div>
        <input type="radio" value="encrypt" name="action" checked={action === "encrypt"} onChange={() => setAction("encrypt")} /> Encrypt
        <input type="radio" value="decrypt" name="action" checked={action === "decrypt"} onChange={() => setAction("decrypt")} /> Decrypt
      </div>
      <button onClick={onSubmit}>Submit</button>
      {results.map(({ input, key, action, result }) => {
        return (
          <div key={`${input}_${key}_${action}`}>
            <div>Input: {input}</div>
            <div>Key: {key}</div>
            <div>Action: {action}</div>
            <div>Result: {result}</div>
          </div>
        )
      })}
    </div>
  )
  
}

export default IndexPage
