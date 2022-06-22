import './App.css';
import React from 'react';
import ListTodo from './components/ListTodo';

function App() {

  const [todo, setTodo] = React.useState(
    [
      {
        //hardcode todo
        id: 1,
        title: 'Learn React',
        content: 'lorem ipsum',
      }
    ]
  )

  const [formTodo, setFormTodo] = React.useState(
    {
      title: '',
      content: '',
    }
  )
  const [isUpdate, setUpdate] = React.useState(
    {
      id: null,
      status: false,
    }
  )

  ;

  
  const handleChange = (event) => {
    let data = {...formTodo};
    data[event.target.name] = event.target.value;
    setFormTodo(data);
  }
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    let data = [...todo];

    //validate
    if(formTodo.title === ''){
      return false;
    }
    
    //update data
    if(isUpdate.status === true){
      data.forEach((todo)=>{
        if(todo.id === isUpdate.id){
          todo.title = formTodo.title;
          todo.content = formTodo.content;
        }
      })
    }else{
      //add contact 
      data.push(
        {
          id: Math.floor(Math.random()*100) + 1,
          title: formTodo.title,
          content: formTodo.content,
        }
      )
      setTodo(data);
    }
    setFormTodo({title: "", content:""})
    setUpdate({id: null, status: false})
}

const handleBtnEdit = (id) => {
  let data = [...todo];
  let found = data.find((todo) => todo.id === id);
  setFormTodo({ title: found.title, content: found.content });
  setUpdate({ id: id, status: true });
}

const handleBtnDel = (id) => {
  let data = [...todo];
  let filter = data.filter((todo) => todo.id !== id);
  setTodo(filter);
}

const handleComplate = (id) => {

}

return (
    <div className='container'>
      <div className="App">
        <h1 className='px-3 py-3'>Todo List</h1>
        <form className='px-3 py-3' onChange={handleChange} onSubmit={handleSubmit}>
          <div className='form-group'>
            <input type='text' value={formTodo.title} className='form-control' name='title' placeholder='Title'></input>
          </div>
          <div className='form-group mt-3'>
            <input type='text' value={formTodo.content} className='form-control' name='content' placeholder='Content'></input>
          </div>
          <div>
            <button type="submit" className="btn btn-primary w-100 mt-3">
              Save
            </button>
          </div>
        </form>
        <ListTodo data={todo} handleDel={handleBtnDel} handleEdit={handleBtnEdit} handleComplate={handleComplate}/>
      </div>
    </div>
  );
}

export default App;
