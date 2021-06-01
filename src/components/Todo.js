const Todo = ({text, toggleModal}) => {
  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={() => toggleModal(text)}>Delete</button>
      </div>
    </div>
  )
}

export default Todo;