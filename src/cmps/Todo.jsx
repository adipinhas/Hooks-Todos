import React, {useState} from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import CheckBox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import Edit from './Edit'


function Todo(props) {
    const [isEditing, setIsEditing] = useState(false);
    
    const handleRemove=()=>{
        props.remove(props.todo.id)
    }
    const handleToggleTodo=()=>{
        props.toggleTodo(props.todo.id)
    }
    const handleEdit=()=>{
        setIsEditing(true)
    }
    const doneEditing=(input)=>{
       
        setIsEditing(false)
        props.doneEditing(props.todo.id,input)
    }
    return (
        <div> <ListItem style={{height:"60px"}}>
            {isEditing ?<ListItemText>
                     <Edit input={props.todo.task} doneEditing={doneEditing}/>
            </ListItemText> : (<>

                <CheckBox onClick={handleToggleTodo} checked={props.todo.completed}></CheckBox>
                    <ListItemText style={{textDecoration: props.todo.completed ? "line-through" : "none"}}>
                    {props.todo.task}
                    </ListItemText>
                    <IconButton onClick={handleRemove}>
                        <DeleteIcon ></DeleteIcon>
                    </IconButton>
                    <IconButton>
                        <EditIcon onClick={handleEdit}></EditIcon>
                    </IconButton>
                    </>
            )}
                </ListItem>
        </div>
    )
}

export default Todo
