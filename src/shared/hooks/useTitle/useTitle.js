import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `AccuDental - ${title}`;
  }, [title]);
};
export default useTitle;
