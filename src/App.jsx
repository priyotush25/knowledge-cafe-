import Blogs from "./component/Blog/Blogs";
import Bookmarks from "./component/Bookmarks/Bookmarks";
import Header from "./component/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto flex items-center mt-20">
        <Blogs />
        <Bookmarks />
      </main>
    </>
  );
};

export default App;
