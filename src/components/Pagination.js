import React from "react";

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pagNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pagNumbers.push(i);
  }

  return (
    <div className="pagination" style={{ display: "flex", margin: "30px" }}>
      {pagNumbers.map((item) => (
        <li
          key={item}
          style={{
            border: "1px solid grey",
            padding: "5px 10px",
            margin: ".01px",
            listStyle: "none",
            color: "grey",
          }}
        >
          <button
            href="!#"
            style={{ border: "none", background: "transparent" }}
            onClick={() => paginate(item)}
          >
            {item}
          </button>
        </li>
      ))}
    </div>
  );
};

export default Pagination;
