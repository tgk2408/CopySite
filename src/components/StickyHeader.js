import { useState } from 'react';
import { DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './StickyHeader.css';


const StickyHeader = () => {
  const [open, setOpen] = useState(false);
  const baby = 1;
  return (
      <div className="sticky-header">
      HELLOOOOs
      <div className="dropdown-container">
      <Dropdown >
      <Dropdown.Toggle id="dropdown-custom-1" className="dropdown-container2">Pow! Zoom!</Dropdown.Toggle>
      <Dropdown.Menu className="super-colors">
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3" active>
      Active Item
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>{' '}
      </div>
      </div>    
  );
}
// <div className="dropdown-container2" onMouseEnter={() => { setOpen(true); }} onMouseLeave={() => { setOpen(false);}}>
//         <div className="dropdown-parent2"> brrrs</div>
//         <div className="dropdown-child-container2">
//           <div className="dropdown-child2">{open && baby}</div>
//           <div className="dropdown-child2">{open && baby}</div>
//           <div className="dropdown-child2">{open && baby}</div>
//           <div className="dropdown-child2">{open && baby}</div>
//           <div className="dropdown-child2">{open && baby}</div>
//         </div>
//       </div>

export default StickyHeader;