import PaginationItem from "./PaginationItem";

const Pagination = ({ activePage, setActivePage, dataKeys }) => {
  const pageCount = Math.ceil(dataKeys.length / 4);

  const handlePrevBtnClick = () => {
    if (activePage > 1) setActivePage(activePage - 1);
  };

  const handleNextBtnClick = () => {
    if (activePage < pageCount) setActivePage(activePage + 1);
  };

  const renderbreadcrumb = () => {
    const breadcrumb = [];

    for (let i = 0; i < pageCount; i++) {
      breadcrumb.push(
        <PaginationItem
          key={`page-${i}`}
          page={i + 1}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      );
    }

    return breadcrumb;
  };

  if (pageCount > 1) {
    return (
      <nav className='paginationContainer'>
        <ul className='list'>
          <li className='prev' onClick={handlePrevBtnClick}>
           Prev
          </li>
          {renderbreadcrumb()}
          <li className='next' onClick={handleNextBtnClick}>
           Next
          </li>
        </ul>
      </nav>
    );
  }
  return null;
};

export default Pagination;
