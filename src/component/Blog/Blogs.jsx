import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ({ bookmarksHandle }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("post.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <>
      <div className="w-2/3">
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog.id} bookmarksHandle={bookmarksHandle} />
        ))}
      </div>
    </>
  );
};

export default Blogs;
