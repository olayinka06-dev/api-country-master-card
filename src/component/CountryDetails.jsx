import React, { useState } from 'react';
import './Style.css';


function CountryDetails({ country, closeButton}) {

    const [selectedDetails, setSelectedDetails] = useState();

    if (!country) {
      return null;
    }
    
    const handleChangeDetails = (border) => {
        alert(border)
    }

    return (
        <>
            <div className="details-wrapper">
                <div className="btn-wrapper">
                    <button className='close-button' onClick={closeButton}>Close</button>
                </div>
                <div className="card">
                    <div className="picture">
                        <img src={country.flags.png} alt={country.flags.png} />
                    </div>
                    <div className="content-after">
                        <h3>{country.name}</h3>
                        <div className="about-after">
                            <div className="one">
                                <p><span>Native Name: </span>{country.nativeName}</p>
                                <p><span>Population:</span> {country.population}</p>
                                <p><span>Region:</span> {country.region}</p>
                                <p><span>Sub Region: </span>{country.subregion}</p>
                                <p><span>Capital:</span> {country.capital}</p>
                            </div>
                            <div className="two">
                                <p><span>Top Level Domain: </span>{country.topLevelDomain}</p>
                                <p><span>Currencies: </span>{country.currencies.map(c => c.name)}</p>
                                <p><span>Languages: </span>{country.languages.map(l => l.name + " ")}</p>
                            </div>
                        </div>
                        <div className="base">
                            <p><span>Border Countries: </span></p>
                            <div>{country.borders.map(border => (<div onClick={()=> handleChangeDetails(border)}>{border}</div>))}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default CountryDetails;