import React, {useState} from 'react';
import {Dropdown} from "react-bootstrap";

const DropdownComp = ({title, items}) => {

    const [current, setCurrent] = useState(title)
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {current}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {items.map(item => <Dropdown.Item onClick={() => setCurrent(item)}>{item}</Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default DropdownComp;