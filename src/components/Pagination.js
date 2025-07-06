import React from "react";
import {
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from "mdb-react-ui-kit";

const Pagination = ({
  currentPage,
  pageLimit,
  totalBlog,
  loadBlogsData,
}) => {
  const totalPages = Math.ceil(totalBlog / pageLimit);

  return (
    <MDBPagination center className="my-4">
      {currentPage > 0 && (
        <MDBPaginationItem>
          <MDBPaginationLink
            onClick={() =>
              loadBlogsData(
                (currentPage - 1) * pageLimit,
                currentPage * pageLimit,
                -1
              )
            }
          >
            Prev
          </MDBPaginationLink>
        </MDBPaginationItem>
      )}

      {/* Dynamic Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <MDBPaginationItem key={index} active={index === currentPage}>
          <MDBPaginationLink
            onClick={() =>
              loadBlogsData(
                index * pageLimit,
                (index + 1) * pageLimit,
                index - currentPage
              )
            }
          >
            {index + 1}
          </MDBPaginationLink>
        </MDBPaginationItem>
      ))}

      {currentPage < totalPages - 1 && (
        <MDBPaginationItem>
          <MDBPaginationLink
            onClick={() =>
              loadBlogsData(
                (currentPage + 1) * pageLimit,
                (currentPage + 2) * pageLimit,
                1
              )
            }
          >
            Next
          </MDBPaginationLink>
        </MDBPaginationItem>
      )}
    </MDBPagination>
  );
};

export default Pagination;
