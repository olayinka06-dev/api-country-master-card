import React from "react";
import './Style.css';


function SearchInput({ value, onChange, selectValue, onSelectChange }) {
    return (
        <div className="input-field">
            <div className='first'>
                <input type="search" value={value} onChange={onChange} placeholder="Search by country name" />
            </div>
            <div className='second'>
                <select value={selectValue} onChange={onSelectChange}>
                    <option value="">All Regions</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </div>
    );
  }
  
export default SearchInput;