const Bookmark = ({ bookmark }) => {
  return (
    <>
      <div className="p-5 rounded-xl bg-white mb-4">
        <h1 className="text-xl font-medium">{bookmark.title}</h1>
      </div>
    </>
  );
};

export default Bookmark;
