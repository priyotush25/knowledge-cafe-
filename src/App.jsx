import { useState } from "react";
import Blogs from "./component/Blog/Blogs";
import Bookmarks from "./component/Bookmarks/Bookmarks";
import Header from "./component/Header/Header";

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);

  const bookmarksHandle = (blog) => {
    console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto flex items-start mt-10 gap-6">
        <Blogs bookmarksHandle={bookmarksHandle} />
        <Bookmarks bookmarks={bookmarks} />
      </main>
    </>
  );
};

export default App;
