import React, { useState, createContext } from "react";

// Context
export const PaginationContext = createContext();

// Pagination Controller
export const Pagination = ({ totalItems, itemsPerPage = 10, children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(totalItems / itemsPerPage);
  const hasPrevPage = currentPage > 1;
  const hasNextPage = currentPage < maxPage;

  const contextValue = {
    currentPage,
    maxPage,
    setCurrentPage,
    hasPrevPage,
    hasNextPage,
  };

  return (
    <PaginationContext.Provider value={contextValue}>
      {children}
    </PaginationContext.Provider>
  );
};

// Page numbers
export const PageNumbers = ({ children }) => {
  const { currentPage, maxPage, setCurrentPage } =
    useContext(PaginationContext);

  return (
    <>
      {[...Array(maxPage)].map((p, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          disabled={currentPage === i + 1}
        >
          {i + 1}
        </button>
      ))}
    </>
  );
};

// Next button
export const NextButton = ({ children }) => {
  const { currentPage, maxPage, setCurrentPage } =
    useContext(PaginationContext);

  return (
    <button
      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, maxPage))}
      disabled={currentPage === maxPage}
    >
      {children}
    </button>
  );
};

// Previous button
export const PrevButton = ({ children }) => {
  const { currentPage, setCurrentPage } = useContext(PaginationContext);

  return (
    <button
      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
    >
      {children}
    </button>
  );
};
