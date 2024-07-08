import React, { useState } from 'react'

export default function Hello({age}) {
  const [name, setName] = useState("MIKE");
  const msg = age > 19 ? "성인 입니다.": "미성년자 입니다.";

  return (
  <div>
    <h2 id="name">{name}({age}세) : {msg}</h2>
    <button onClick={()=>{
      setName(name==='MIKE' ? "Jane" : "MIKE");
    }}>Change</button>
  </div>
  )
}
