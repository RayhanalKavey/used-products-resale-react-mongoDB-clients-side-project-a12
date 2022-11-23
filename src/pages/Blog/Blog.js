import React from "react";
import useTitle from "../../hooks/useTitle/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div>
      <h1 className="text-2xl"> Blogs </h1>
    </div>
  );
};

export default Blog;
