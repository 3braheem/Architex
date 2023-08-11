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
    <input className="w-full font-body" type="text" onChange={handleChange} />
  );
};

export default SearchBar;
