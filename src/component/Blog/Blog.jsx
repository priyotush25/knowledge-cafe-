import PropTypes from "prop-types";
import { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, bookmarksHandle, spenttimeHandle }) => {
  const [isButton, setIsbutton] = useState(false);

  const clikHandle = () => {
    bookmarksHandle(blog);
    setIsbutton(!isButton);
  };

  return (
    <>
      <div className="mb-10 border-b-2 border-gray-200 pb-9">
        {/* cover image */}
        <img
          src={blog.coverImage}
          alt=""
          className="w-full h-[450px] object-cover rounded-lg mb-8"
        />
        {/* user section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <img
              src={blog.author.image}
              alt=""
              className="h-14 w-14 object-cover rounded-full"
            />
            <div>
              <p className="font-bold text-2xl">{blog.author.name}</p>
              <p className="text-base font-medium mt-2 text-gray-500">
                {blog.postDate}
              </p>
            </div>
          </div>
          <div className="text-gray-500 font-medium flex gap-1">
            <p>{blog.readingTime}</p>
            <button className="text-2xl" onClick={clikHandle}>
              {isButton ? <FaBookmark /> : <CiBookmark />}
            </button>
          </div>
        </div>

        {/* title section */}
        <h2 className="py-8 text-4xl font-bold leading-14">{blog.title}</h2>

        {/* hash tag */}
        <div className="flex items-center gap-2 text-gray-500 font-normal">
          {blog.hashtags.map((hashtag, index) => (
            <p key={index}>{hashtag}</p>
          ))}
        </div>
        <div className="mt-4">
          <button
            className="text-blue-600 border-b-2 font-semibold"
            onClick={() => spenttimeHandle(blog)}
          >
            Mark as read
          </button>
        </div>
      </div>
    </>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  bookmarksHandle: PropTypes.func.isRequired,
};

export default Blog;
