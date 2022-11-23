import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Assignment-12 - ${title}`;
  }, [title]);
};

export default useTitle;
