import { useState, useEffect } from 'react';

const useLocalStorage = (key) => {
  const [state, setState] = useState(
    () => JSON.parse(window.localStorage.getItem(key)) || null
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
export default useLocalStorage;
