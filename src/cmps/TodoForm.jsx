import React from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import UseTodoHook from '../Hooks/UseFormHook'
import Button from '@material-ui/core/Button';

function TodoForm(props) {
    const [value,handleChange,reset]=UseTodoHook('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        props.addTodo(value)
        reset()
    }
    return (<Paper style={{margin:"1rem 0 1rem 0"}}>
        <form style={{display: "flex", justifyContent:"space-between",alignItems:"center", marginLeft:"1.5rem",marginRight:"1.5rem"}}
   onSubmit={handleSubmit} >
            <TextField label="Add New Task" margin="normal"   value={value} onChange={handleChange}></TextField>
            <Button style={{margin:"5px",height:"fit-content"}} onClick={handleSubmit} color="primary" variant="outlined">save</Button>
        </form>
    </Paper>
    )
}

export default TodoForm
