import firebase from './config/firebase'
import React from 'react'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [{ title: "ghous", edit: false }, { title: "basit", edit: false }],
      value: '',
    }
  }
  add_todo = () => {
    // this.state.todos.push(this.state.value)
    // this.setState({
    //   value:this.state.todos
    // })
    let obj =
    {
      title: this.state.value
    }
    firebase.database().ref('/').child('todos')
      .push(obj);
    this.setState({
      todos: [...this.state.todos, obj],
      value: ''
    })
  }
  delete_todo = (index) => {
    ////////////////For DELETE ALL/////////////////////////
    // this.state.todos.splice(0,this.state.todos.length)
    // this.setState({
    //   todos:this.state.todos
    // })

    ////////////For deleting particular value///////////////
    this.state.todos.splice(index, 1);
    this.setState({
      todos: this.state.todos
    })
  }
  edit_todo = (index, value) => {
    this.state.todos[index].edit = true




    //OR
    //this.state.todos.splice(index,1,uv);
    this.setState({
      todos: this.state.todos
    })

    // let check=(v)=>{
    //    if(v.edit==true)
    //    {
    //        return <input type="text"/>
    //    }
    //    else{
    //        return v.title;
    //    }
    // }



  }
  handleChange = (e, i) => {
    this.state.todos[i].title = e.target.value
  }
  Update = (i) => {
    this.state.todos[i].edit = false;
    this.setState({
      todos: this.state.todos
    })
  }
  render() {
    //Ye samajhna hai destructuring
    let { todos, value } = this.state;
    return (
      <div>
        <input value={value} onChange={(e) => this.setState({ value: e.target.value })} type="text" placeholder="Enter value for the item to add todo" />
        <button onClick={this.add_todo}>Add Item</button>
        <ul>
          {todos.map((v, i) => {
            return <li key={i}>
              {v.edit ? <input placeholder={v.title} onChange={(e) => this.handleChange(e, i)} type="text" /> : v.title}

              {v.edit ? <button onClick={(e) => this.Update(i)}>Update</button> : <button onClick={() => this.edit_todo(i, v.title)}>Edit</button>}
              <button onClick={() => this.delete_todo(i)}>Delete</button>
            </li>
          })}
        </ul>
      </div>
    )
  }
}
export default App;
