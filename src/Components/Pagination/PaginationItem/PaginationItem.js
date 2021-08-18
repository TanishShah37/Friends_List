

const PaginationItem = ({ page, setActivePage, activePage }) => {
  return (
    <li
      className={`${
        activePage === page ? 'pageItem active' : 'pageItem'
      }`}
      onClick={() => setActivePage(page)}
    >
      {page}
    </li>
  );
};

export default PaginationItem;
