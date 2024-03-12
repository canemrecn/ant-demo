import React, { createContext, useContext, useState } from 'react';

// Context'in oluşturulması
const AppContext = createContext();

// Provider component'inin tanımlanması
export const AppProvider = ({ children }) => {
  const [state, setState] = useState({}); // Burada global state'inizi yönetebilirsiniz

  // Değerlerin ve fonksiyonların sağlanmasıs
  const value = {
    state, // Global state
    setState, // State'i güncellemek için fonksiyon
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook kullanımı için
export const useAppContext = () => useContext(AppContext);
