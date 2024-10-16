import css from "./SearchBox.module.css"



const SearchBox = ({value, onFilter}) => {
  return (
    <div className={css.SearchBox}>
      <p className={css.filterText}>Find contact by name</p>
      <input className={css.filterInput}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        placeholder="abc"
      />
    </div>
  )
}

export default SearchBox