import { useState } from "react";
import Blogs from "./component/Blog/Blogs";
import Bookmarks from "./component/Bookmarks/Bookmarks";
import Header from "./component/Header/Header";

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [spenttimes, setSpenttimes] = useState(0);

  const bookmarksHandle = (blog) => {
    console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const spenttimeHandle = (blog) => {
    const newspentTime = spenttimes + blog.readingTime;

    setSpenttimes(newspentTime);

    // remove
    const newBookmark = bookmarks.filter((bookmark) => blog.id !== bookmark.id);
    setBookmarks(newBookmark);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto p-4 flex md:flex-row flex-col items-start mt-10 gap-6">
        <Blogs
          bookmarksHandle={bookmarksHandle}
          spenttimeHandle={spenttimeHandle}
        />
        <Bookmarks bookmarks={bookmarks} spenttimes={spenttimes} />
      </main>
    </>
  );
};

export default App;
