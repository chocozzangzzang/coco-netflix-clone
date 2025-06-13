import { Dropdown } from "react-bootstrap";
import "./MovieFilter.style.css";

const MovieSorter = () => {
  return (
    <div className="select-box">
        <Dropdown data-bs-theme="dark">
            <div className="sort-top">
                <div>Sort</div>
                <svg width={20} 
                    dataSlot="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clipRule="evenodd" fillRule="evenodd" d="M10 3a.75.75 0 0 1 .75.75v10.638l3.96-4.158a.75.75 0 1 1 1.08 1.04l-5.25 5.5a.75.75 0 0 1-1.08 0l-5.25-5.5a.75.75 0 1 1 1.08-1.04l3.96 4.158V3.75A.75.75 0 0 1 10 3Z" />
                </svg>
            </div>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" size="large">
                Sort By
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" active>Default</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Popularity(DESC)</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Popularity(ASC)</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-4">Title(DESC)</Dropdown.Item>
                <Dropdown.Item href="#/action-5">Title(ASC)</Dropdown.Item>
                </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default MovieSorter