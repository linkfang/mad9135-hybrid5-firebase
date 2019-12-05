import React from "react"
import { db } from "../firebase"
import ModalWindow from './ModalWindow'
import '../App.css'

class SavedList extends React.Component {

  state = {
    todos: [],
    editing: false,
    updatedTodo: "",
    currentTodo: ""
  }

  componentDidMount() {
    db.collection("categories").onSnapshot( collection => {
      collection.forEach(doc => this.setState({ todos: doc.data().all }))
    })
  }

  deleteTodo = (todo) => {
    let updateArray = this.state.todos.filter( item=> item != todo )
    db.collection("categories").doc("Todos").update({
      all: updateArray
    })
  }

  hideOverlay = () =>{
    this.setState({editing: false})
  }

  editTodo = () =>{

    if(!this.state.updatedTodo.trim()){
      alert("Type in something please.")
      return
    }

    let updateArray = this.state.todos.map( item => {
      if (item.id == this.state.currentTodo.id) {
        return {
          todo: this.state.updatedTodo,
          id: item.id
        }
      }
      return item
    })

    db.collection("categories").doc("Todos").update({
      all: updateArray
    })

    this.hideOverlay()
    this.setState({updatedTodo: ""})
  }

  handleChange = ({ target }) => {
    this.setState({ updatedTodo: target.value })
  }

  render() {
    const todos  = this.state.todos
    return (
      <div>
        {
          this.state.editing
          ? (<ModalWindow hideOverlay={ this.hideOverlay } handleChange={ this.handleChange }
          editTodo = { this.editTodo }/>)
          : (<div></div>)
        }
        {todos.map(item => (

        <h4 className="todoItem"
        key={item.id}>
          {item.todo}  
          
          <div>
          <button className="editBtn"
          onClick={ ()=> {
            this.setState({editing: true, currentTodo: item})
            }} >Edit</button> 
          <button className="deleteBtn"
          onClick={ ()=> {
            this.deleteTodo(item) 
            }} >Delete</button> 
          </div>
        </h4>

        ))}
      </div>
    )
  }
}

export default SavedList
