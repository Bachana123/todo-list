const Modal = ({toggleModal, activeTodoModal, deleteModal}) => {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={() => toggleModal()}>Cancel</button>
      <button className="btn" onClick={() => {deleteModal(activeTodoModal)}}>Confirm</button>
    </div>
  );
};

export default Modal;
