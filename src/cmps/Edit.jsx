import React from 'react'
import UseTodoHook from '../Hooks/UseFormHook'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';



function Edit(props) {
    const [input, handleChange,reset] = UseTodoHook(props.input);
    const doneEditing=(e)=>{
            e.preventDefault()
            props.doneEditing(input)
            reset()
        }
  
    return (
    <div>
        <form style={{marginLeft:"1rem", display:"flex", justifyContent:"space-between"}} onSubmit={doneEditing}>
            <TextField 
            
                value={input}
                onChange={handleChange}
                autoFocus
            />
            <Button style={{margin:"5px"}} onClick={doneEditing} color="primary" variant="outlined">save</Button>
        </form>
    </div>
    )
}

export default Edit
