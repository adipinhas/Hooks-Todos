import React ,{ useState,useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import ToolBar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import List from './TodoList'
import TodoForm from './TodoForm'
import uuid from 'uuid'
function TodoApp() {
    const initialTodos=JSON.parse(localStorage.getItem("todos") ||"[]")
    
    const [todos, setTodos] = useState(initialTodos);
    const addTodo= (inputValue)=>{
        setTodos([...todos,{id:uuid(),task:inputValue,completed:false}])
    }
    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    })
    const removeTodo=(todoId)=>{
        const updatedTodos=todos.filter((todo)=>{
            return todo.id!==todoId
        })
        setTodos(updatedTodos)
    }
    const toggleTodo=(todoId)=>{
        const updatedTodos =todos.map((todo)=>{
             return todo.id===todoId ? {...todo,completed:!todo.completed} : todo
        })
        setTodos(updatedTodos)
    }
        const doneEditing=(id,value)=>{
        const updatedTodos =todos.map((todo)=>{
            return todo.id===id ? {...todo,task:value} : todo
       })
       setTodos(updatedTodos)
        
    }
    return (
        <div>
          <Paper style={{
            backgroundColor:'#f5f5fa',
            width:'100vw',
            height:'100vh',margin:0,
            padding:0}}
            elevation={0}>
              <AppBar position="static" style={{height:'75px'}}>
                  <ToolBar>
                  <Typography >
                      Hooks Todo-List!!!!!!!!!!!!!!
                  </Typography>
                  </ToolBar>
              </AppBar>
              <Grid container justify="center">
                  <Grid item xs={11} md={6} lg={5}>

              <TodoForm addTodo={addTodo}/>
              <List doneEditing={doneEditing} toggleTodo={toggleTodo} remove={removeTodo} todos={todos}/>
                  </Grid>
              </Grid>

          </Paper>
        </div>
    )
}

export default TodoApp
