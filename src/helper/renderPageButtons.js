import Pagination from 'react-bootstrap/Pagination';

export const renderPaginationItems = (
  totalPages,
  maxVisiblePages,
  currentPage,
  handlePageClick
) => {
  const items = [];

  if (totalPages <= maxVisiblePages) {
    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </Pagination.Item>
      );
    }
  } else {
    const leftBound = Math.max(
      currentPage - Math.floor(maxVisiblePages / 2),
      1
    );
    const rightBound = Math.min(leftBound + maxVisiblePages - 1, totalPages);

    if (leftBound > 1) {
      items.push(
        <Pagination.Item key={1} onClick={() => handlePageClick(1)}>
          {1}
        </Pagination.Item>
      );
      if (leftBound > 2) {
        items.push(<Pagination.Ellipsis key="leftDots" />);
      }
    }

    for (let i = leftBound; i <= rightBound; i++) {
      items.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    if (rightBound < totalPages) {
      if (rightBound < totalPages - 1) {
        items.push(<Pagination.Ellipsis key="rightDots" />);
      }
      items.push(
        <Pagination.Item
          key={totalPages}
          onClick={() => handlePageClick(totalPages)}
        >
          {totalPages}
        </Pagination.Item>
      );
    }
  }

  return items;
};
