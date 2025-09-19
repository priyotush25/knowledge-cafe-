import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <>
      <div className="w-1/3 bg-gray-100 p-7">
        <h1 className="text-xl font-bold mb-4">
          Bookmarks : {bookmarks.length}
        </h1>
        <div>
          {bookmarks.map((bookmark) => (
            <Bookmark bookmark={bookmark} key={bookmark.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Bookmarks;
