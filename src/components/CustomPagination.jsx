import React from "react";
import { Pagination } from "react-bootstrap";
import "../Assets/CustomPagination.css";

const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxPagesToShow = 10;
  totalPages = 10;
  let startPage = 1;
  let endPage = totalPages;

  if (totalPages > maxPagesToShow) {
    const halfPagesToShow = Math.floor(maxPagesToShow / 2);

    if (currentPage <= halfPagesToShow + 1) {
      startPage = 1;
      endPage = maxPagesToShow;
    } else if (currentPage >= totalPages - halfPagesToShow) {
      startPage = totalPages - maxPagesToShow + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - halfPagesToShow;
      endPage = currentPage + halfPagesToShow;
    }
  }

  return (
    <div className="footer shadow-sm mb-3">
      <div className="pageno">
        {currentPage} from {totalPages}
      </div>
      <Pagination>
        <Pagination.Prev
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        />
        {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
          <Pagination.Item
            key={startPage + i}
            active={startPage + i === currentPage}
            onClick={() => onPageChange(startPage + i)}
          >
            <div page-item>{startPage + i}</div>
          </Pagination.Item>
        ))}
        <Pagination.Next
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        />
      </Pagination>
    </div>
  );
};

export default CustomPagination;
