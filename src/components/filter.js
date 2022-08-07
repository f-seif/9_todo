export function Filter(searchValue, handleSearch) {
  return(
    <div className="input-group" style={{maxWidth:"50%"}}>
      <span className="input-group-text">Filter tasks</span>
      <input type="text" className="form-control" placeholder="Enter movie name" aria-label="Username" value={searchValue} onChange={handleSearch}/>
    </div>
  )
}
