import React, { useState } from "react"

const IndexPage = () => {
  const [input, setInput] = useState("");
  const [key, setKey] = useState("");
  const [results, setResults] = useState([]);
  const [action, setAction] = useState("encrypt");

  const encrypt = () => {
    return {
      input,
      key,
      action,
      result: 'something'
    }
  };

  const decrypt = () => {
    return {
      input,
      key,
      action,
      result: 'something'
    }
  };

  const onSubmit = () => {
    let result
    if (action === "encrypt") {
      result = encrypt();
    } else {
      result = decrypt();
    }

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
      <div onChange={(e) => setAction(e.target.value)}>
        <input type="radio" value="encrypt" name="action" /> Encrypt
        <input type="radio" value="decrypt" name="action" /> Decrypt
      </div>
      <button onClick={onSubmit}>Submit</button>
      {results.map(result => {
        return (
          <div>
            <div>Input: {result.input}</div>
            <div>Key: {result.key}</div>
            <div>Action: {result.action}</div>
            <div>Result: {result.result}</div>
          </div>
        )
      })}
    </div>
  )
  
}

export default IndexPage
