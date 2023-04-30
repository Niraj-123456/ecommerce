import React from "react";
import styles from "./pagination.module.css";

const Pagination = ({
  gotoPage,
  canPreviousPage,
  canNextPage,
  previousPage,
  nextPage,
  pageCount,
  pageIndex,
  pageOptions,
}: any) => {
  return (
    <div className={styles.pagination__wrapper}>
      <button
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
        className={styles.previous__btn}
      >
        {"<"}
      </button>{" "}
      <div>
        {pageOptions?.map((page: number) => (
          <button
            key={page}
            className={
              pageIndex === page
                ? `${styles.page__number} ${styles.active}`
                : `${styles.page__number}`
            }
            onClick={() => gotoPage(page)}
          >
            {page + 1}
          </button>
        ))}
      </div>
      <button
        onClick={() => nextPage()}
        disabled={!canNextPage}
        className={styles.next__btn}
      >
        {">"}
      </button>{" "}
    </div>
  );
};

export default Pagination;
