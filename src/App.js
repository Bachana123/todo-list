import Todo from './components/Todo'
import Modal from './components/Modal'
import Backdrop from './components/Backdrop'
import AddModal from './components/AddModal'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    "first to do",
    'second to do',
    'third to do'
  ])
  const [activeTodoModal, setActiveModal] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const toggleModal = (text) => {
    setShowModal(!showModal);
    if (text) {
      setActiveModal(text);
    }
  }

  const toggleAddModal = () => {
    setShowAddModal(!showAddModal);
  }

  const deleteModal = (modal) => {
    const newTodos = todos.filter(todo => todo !== modal);
    setTodos(newTodos)
    setShowModal(!showModal);
  }

  const addTodo = (newAddTodo) => {
    setTodos([newAddTodo, ...todos]);
  }

  return <div>
    <h1>My Todos</h1>
    <div className="actions">
      <button className="btn" onClick={toggleAddModal}>Add</button>
    </div>
    {todos.map((todo, index) => <Todo key={index} text={todo} toggleModal={toggleModal} />)}
    {showModal && <Modal toggleModal={toggleModal} activeTodoModal={activeTodoModal} deleteModal={deleteModal} />}
    {showAddModal && <AddModal addTodo={addTodo} toggleAddModal={toggleAddModal} />}
    {(showModal || showAddModal) && <Backdrop />}
  </div>
}

export default App;
