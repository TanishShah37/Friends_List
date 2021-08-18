

const Sort = ({ sort, setSort }) => {
  return (
    <div className='sortContainer'>
      <p className='text'>Sort:</p>
      <select
        className='select'
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value={false}></option>
        <option value="fav">Favourites on Top</option>
        <option value="noFav">Not Favourites at Top</option>
      </select>
      {sort ? (
        <p className='clear' onClick={() => setSort(false)}>
          Clear
        </p>
      ) : null}
    </div>
  );
};

export default Sort;
