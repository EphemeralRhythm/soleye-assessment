import searchIcon from "../../assets/icons/search.svg";

const DomainSearchBar: React.FC = () => {
  return (
    <>
    <div className="flex items-center justify-center w-full px-4">
      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-full my-5">
        <input
          type="text"
          placeholder="Type the domain you want"
          className="flex-grow px-4 py-2 text-lg text-gray-700 outline-none"
        />
        <button className="bg-blue-500 p-4 flex items-center justify-center text-white h-full">
          <img src={searchIcon} className="w-6" />
        </button>
      </div>
    </div>
    </>
  );
};

export default DomainSearchBar;
