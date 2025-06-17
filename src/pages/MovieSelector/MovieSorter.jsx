import { Dropdown } from "react-bootstrap";
import "./MovieFilter.style.css";
import { useState } from "react";

const MovieSorter = ({ setSortBy }) => {

  const MENUS = [
    {display : 'title(DESC)', origin : 'title.desc'},
    {display : 'title(ASC)', origin : 'title.asc'},
    {display : 'popularity(DESC)', origin : 'popularity.desc'},
    {display : 'popularity(ASC)', origin : 'popularity.asc'},
    {display : 'vote average(DESC)', origin : 'vote_average.desc'},
    {display : 'vote average(ASC)', origin : 'vote_average.asc'},
  ];

  const [ selectedMenu, setSelectedMenu ] = useState("");
  const filtering = (index) => {
    if(index === "-1") {setSelectedMenu(""); setSortBy("");}
    else {
      setSelectedMenu(MENUS[index].display);
      setSortBy(MENUS[index].origin);
    }
  }

  return (
    <div className="select-box">
        <Dropdown data-bs-theme="dark" onSelect={filtering}>
            <div className="sort-top">
                <div>Sort {selectedMenu ? `: ${selectedMenu}` : ""}</div>
                <svg width={20} 
                    dataSlot="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clipRule="evenodd" fillRule="evenodd" d="M10 3a.75.75 0 0 1 .75.75v10.638l3.96-4.158a.75.75 0 1 1 1.08 1.04l-5.25 5.5a.75.75 0 0 1-1.08 0l-5.25-5.5a.75.75 0 1 1 1.08-1.04l3.96 4.158V3.75A.75.75 0 0 1 10 3Z" />
                </svg>
            </div>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" size="large">
                {selectedMenu ? selectedMenu : "Sort By"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item eventKey={-1} active={selectedMenu === ""}>--</Dropdown.Item>
                {
                  MENUS.map((menu, index) => (
                    <>
                      {!(index % 2) ? <Dropdown.Divider /> : <></>}
                      <Dropdown.Item eventKey={index} active={selectedMenu === menu.display}>{menu.display}</Dropdown.Item>
                    </>
                  ))
                }
                </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default MovieSorter