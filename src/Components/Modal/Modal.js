const Modal = ({ handleClickYes, setModal }) => {
  const handleContainerClick = (e) => {
    e.stopPropagation();
    setModal(false);
  };

  return (
    <div className="modal">
      <div onClick={handleContainerClick} className="outerContainer">
        <div className='container'>
          <button onClick={() => setModal(false)} className='close'>
            X
          </button>
          <div className='innerContainer'>
            <p className='text'>Are You sure you want delete this friend from  the list?</p>
            <div className='btnContainer'>
              <button onClick={() => setModal(false)} className='btn'>
                No
              </button>
              <button onClick={handleClickYes} className='btn'>
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
