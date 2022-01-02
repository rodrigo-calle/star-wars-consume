import React, { useState, createContext, useContext } from 'react';

const PaginationContext = createContext();

// eslint-disable-next-line react/prop-types
export const PaginationProvider = ({ children }) => {
  const initalState = 1;

  const [pagination, setPagination] = useState(initalState);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const valuesToPass = {
    pagination,
    setPagination,
  };
  return (
    <PaginationContext.Provider value={valuesToPass}>
      {children}
    </PaginationContext.Provider>
  );
};

export const usePaginationContext = () => {
  const context = useContext(PaginationContext);
  if (context === undefined) {
    throw new Error('usePaginationContext is generating an errorr');
  }
  return context;
};
