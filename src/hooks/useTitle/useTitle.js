import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Laptop Utopia - ${title}`;
  }, [title]);
};

export default useTitle;
