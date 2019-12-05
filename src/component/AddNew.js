import React from "react"
import { db } from "../firebase"
import "../App.css"

class AddNew extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formValues:"",
      isSubmitting: false
    }
  }

  addTodo = async () => {
    const data = this.state.formValues
    if(!data.trim()){
      alert("Type in something please.")
      this.setState({ isSubmitting: false })
      return
    }

    let itemArray = []

    await db.collection("categories").doc("Todos").get()
        .then(doc => {
            if (doc.data()) {
                itemArray = doc.data().all
            }
            if (data) {
              let newData = {
                todo: data,
                id: Date.now()
              }
                itemArray.push(newData)
            }
        })
        .catch(err => {
            console.log("Something is wrong: " + err)
        })

    db.collection("categories").doc("Todos").set({
        all: itemArray
    })
    this.setState({ isSubmitting: false })
    
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ isSubmitting: true })
    this.addTodo()
  }

  handleChange = ({ target }) => {
    let formValues  = this.state.formValues
    formValues = target.value
    this.setState({ formValues })
  }

  render() {
    const { isSubmitting } = this.state
    return (
      <div>
          <h1>Add some todos here</h1>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>Todo: </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter the todo"
                  onChange={this.handleChange}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}>
                {isSubmitting ? "Please wait..." : "Submit"}
              </button>
            </form>
      </div>
    )
  }
}

export default AddNew
