import React, { useContext } from "react";
import { Pagination } from "react-bootstrap";
import { userContext } from "../context/userContext";

const Pages = () => {
  const { limit, page, totalCount, setPage } = useContext(userContext);

  const pages = [];
  const pageCount = Math.ceil(totalCount / limit);

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <Pagination className="mt-3">
      {pages.map((item) => (
        <Pagination.Item
          key={item}
          active={page === item}
          onClick={() => setPage(item)}
        >
          {item}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default Pages;
