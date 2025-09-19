import PropTypes from "prop-types";

const Blog = ({ blogs }) => {
  return (
    <>
      <h1>Blog : {blogs.length} </h1>
    </>
  );
};

Blog.protoType = {
  Blog: PropTypes.object.isRequired,
};

export default Blog;
