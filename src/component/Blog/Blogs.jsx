import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ({ bookmarksHandle, spenttimeHandle }) => {
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
          <Blog
            blog={blog}
            key={blog.id}
            bookmarksHandle={bookmarksHandle}
            spenttimeHandle={spenttimeHandle}
          />
        ))}
      </div>
    </>
  );
};

export default Blogs;
