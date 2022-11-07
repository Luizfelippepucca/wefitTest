import { useCallback, useRef } from "react";

const useDebounce = () => {
  const debounceTimeOut = useRef<NodeJS.Timeout>();

  const debounce = useCallback((func: () => void) => {
    if (debounceTimeOut.current) {
      clearTimeout(debounceTimeOut.current);
    }

    debounceTimeOut.current = setTimeout(() => {
      func();
    }, 1000);
  }, []);

  return { debounce };
};

export default useDebounce;
