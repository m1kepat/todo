import React from "react";
import { getPagesArray } from "../../../utils/pages";

const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages);

  return (
    <div className="pagination">
      <div className="pagination__body">
        {pagesArray.map((p) => (
          <span
            key={p}
            className={
              page === p
                ? "pagination__page pagination__page-current"
                : "pagination__page"
            }
            onClick={() => changePage(p)}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
