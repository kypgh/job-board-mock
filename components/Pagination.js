import React, { useState } from "react";
import withLoading from "./smart-shit/withLoading";

export const Pagination = withLoading(({ pageCount, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
});
