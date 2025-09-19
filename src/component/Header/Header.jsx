import profile from "../../assets/profile.png";
const Header = () => {
  return (
    <>
      <header className="container mx-auto flex items-center justify-between p-2 md:p-4 border-b-2 border-gray-200">
        <h1 className="md:text-5xl text-2xl font-bold">Knowledge Cafe</h1>
        <img src={profile} alt="" />
      </header>
    </>
  );
};

export default Header;
