function ListTodo({data, handleDel, handleEdit, handleComplate}){
  return (
    <div className="App">
      <div className="list-group">
        {data.map((todo)=>{
          return(
            <div className="list-group-item list-group-item-act">
              <div className="d-flex w-100 justify-content-between">
                <h4>{todo.title}</h4>
                <div>
                  <button className="btn btn-sm btn-primary " onClick={()=>handleEdit(todo.id)}>update</button>
                  <button className="btn btn-sm btn-danger" onClick={()=>handleDel(todo.id)}>delete</button>
                  <button className="btn btn-sm btn-success" onClick={()=>handleComplate(todo.id)}>complate</button>
                </div>
              </div>
              <p>{todo.content}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}
export default ListTodo;