import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import Todo from './Todo'



function TodoList(props) {
  if(props.todos.length)
    return (
        <Paper>
            <List>
            {props.todos.map((todo)=>{
                return<> 
                        <Todo doneEditing={props.doneEditing} toggleTodo={props.toggleTodo} remove={props.remove} todo={todo}></Todo>
                    <Divider/>
                    </>
               
            })}
            </List>
        </Paper>
    )
    return null
}

export default TodoList
