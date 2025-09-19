const Bookmark = ({ bookmark }) => {
  return (
    <>
      <div className="p-5 rounded-xl bg-white mb-4">
        <h1 className="text-xl font-semibold">{bookmark.title}</h1>
      </div>
    </>
  );
};

export default Bookmark;
