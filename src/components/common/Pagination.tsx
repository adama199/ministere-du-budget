import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
const PER_PAGE = 24;
type Page = {
  page: number;
  next?: boolean;
  previous?: boolean;
  active: boolean;
};
type PaginationProps = {
  page: number;
  onPageChange: (nextPage: number) => any;
  total?: number;
  perPage?: number;
};


function Pagination({
  page,
  onPageChange,
  total,
  perPage = PER_PAGE,
}: PaginationProps) {
  const [pages, setPages] = useState<Page[]>([]);
  useEffect(() => {
    const numberOfPages = Math.ceil((total || 0) / perPage);
    const pages: Page[] = [];
    for (let i = 1; i <= numberOfPages; i++) {
      const newPage: Page = {
        active: page === i,
        page: i,
      };
      pages.push(newPage);
    }
    // console.log("p", pages, PER_PAGE, perPage);
    setPages(pages);
  }, [total, page, perPage]);
  if (pages?.length < 1) return null;

  return (
    /* @ts-ignore */
    <ReactPaginate
      breakLabel="..."
      initialPage={page - 1}
      nextLabel=">"
      onPageChange={(page) => onPageChange(page?.selected + 1)}
      pageRangeDisplayed={5}
      pageCount={total ? total : 0}
      previousLabel="<"
      //   renderOnZeroPageCount={null}
      pageClassName="page-item m-1"
      pageLinkClassName="page-link custom-page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link custom-previous-link"
      nextClassName="page-item"
      nextLinkClassName="page-link custom-next-link"
      breakClassName="page-item m-1"
      breakLinkClassName="page-link custom-break-link"
      containerClassName="pagination"
      activeClassName="active"
    />
  );
}

export default Pagination;
