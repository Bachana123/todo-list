import { useState } from "react";

const AddModal = ({addTodo, toggleAddModal}) => {
  const [text, setText] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!text) {
      return
    }
    addTodo(text);
    toggleAddModal();
  }
  
  return (
    <form className="modal" onSubmit={(e) => submit(e)}>
      <p>Add new Todo</p>
      <input type="text" className="add-modal__input" onChange={(e) => setText(e.currentTarget.value)} placeholder="Write it down" />
      <div className="actions--add-modal">
        <button className="btn btn--alt" type="button" onClick={() => toggleAddModal()} >Cancel</button>
        <input className="btn" type="submit" value="save task" />
      </div>
    </form>
  )
}
 export default AddModal;