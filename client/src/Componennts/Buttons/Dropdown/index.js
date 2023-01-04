import './dropdown.css';
import React from 'react';
import DropdownIcon from '../../../Assests/icnos/dropdown-icon.png';

export default function Dropdown() {
    return (
        <form className='dropdown-button'>
            <img src={DropdownIcon} />
            <select>
                <option value="BMW"> Monthly
                </option>
                <option value="Mercedes"> Daily
                </option>
                <option value="Audi"> Weekly
                </option>
                <option value="Skoda"> Yearly
                </option>
            </select>
        </form>
    )
}
