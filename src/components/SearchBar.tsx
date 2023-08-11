interface ISearchBar {
  handleSearch: (e: string) => void;
}

const SearchBar = ({ handleSearch }: ISearchBar) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    handleSearch(e.target.value);
  };
  return (
    <input
      placeholder="Search..."
      className="w-full font-body p-1 focus:outline-none"
      type="text"
      onChange={handleChange}
    />
  );
};

export default SearchBar;
