import  { useState } from 'react'

export default function InputElement(){
    const [inputValue, setInputValue] = useState("")
    return (
        <div>
            <input placeholder = "some text in the multiverse savannah" onChange={(event)=>{setInputValue(event.target.value)}}/>
            {inputValue}
        </div>
    )
}