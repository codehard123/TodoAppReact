import React from "react"

class App extends React.Component{
	constructor()
	{
		super()
		this.state={
			newTodo:"",
			todos:[
			{
				id:1,name:"Play Golf"
			},
			{
				id:2,name:"watch mirzapur"
			}
			]
		}
	}
	handleChange=(event) =>{
		this.setState({
			newTodo:event.target.value
		})
	}
	addTodo=(event) =>{
		const newtodo={
			name:this.state.newTodo,
			id:this.state.todos.length+1
		}
		const oldTodo=this.state.todos;
		oldTodo.push(newtodo)
		this.setState({
			todos:oldTodo
		})

	}
deleteTodo=(index) =>{
	const todos=this.state.todos;
	delete todos[index]
	this.setState({todos});
}	
	
	render()
	{
		
		return(
			<div className="container">
			<h1 className="">TODO Application</h1>
			<input type="text" name="Todo" className="my-4 form-control" placeholder="Add a new todo" onChange={this.handleChange}/>
			<button className="btn btn-danger mb-4" onClick={this.addTodo}>Add a new Todo
				
			</button>
			<ul className="list-group">
			{
			this.state.todos.map((item,index) => {
				
				return (
					
					<li className="list-group-item" key={item.id}>{item.name}
					<button className="btn btn-danger ml-4" onClick={() =>{this.deleteTodo(index)}}>X</button>
					</li>
					
					)

		})
		}
			</ul>
			</div>
			
		)

	}
}
export default App