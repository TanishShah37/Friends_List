
const Container = ({ children }) => {
  return (
    <div className='container'>
      <div className='innerContainer'>{children}</div>
    </div>
  );
};

export default Container;
