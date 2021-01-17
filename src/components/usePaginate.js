import React, { useState } from 'react';

const usePaginate = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);
};

export default usePaginate;
