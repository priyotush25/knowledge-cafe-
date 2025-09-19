import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks, spenttimes }) => {
  return (
    <>
      <div className="w-1/3">
        <div className="text-xl text-blue-500 font-bold text-center border border-blue-400 bg-[#6047EC1A] mb-4 p-5 rounded-lg">
          Spent time on read : {spenttimes} min
        </div>
        <div className=" bg-gray-100 p-7 rounded-lg">
          <h1 className="text-xl font-bold mb-4">
            Bookmarks : {bookmarks.length}
          </h1>
          <div>
            {bookmarks.map((bookmark) => (
              <Bookmark bookmark={bookmark} key={bookmark.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookmarks;
