
const Search = ({ name, handleChange, handleKeyPress }) => {
  return (
    <div className='searchContainer'>
      <input
        type="text"
        name="friend"
        placeholder="Search your friend's"
        className='search'
        value={name}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <p className='text'>Add a friend (Press Enter)</p>
    </div>
  );
};

export default Search;
