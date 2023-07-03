import React from 'react';
import './Style.css';


function Props2({ countries, onClick }) {
    return (
        <div className="enclosure">
            {countries.map(country => (
                <div className="container" key={country.alpha3Code} onClick={() => onClick(country)}>
                    <div className="field">
                        <img src={country.flags.png} alt={country.flags.png} />
                        <div className="content">
                            <h3>{country.name}</h3>
                            <div className="about">
                                <p>Population: {country.population}</p>
                                <p>Region: {country.region}</p>
                                <p>Capital: {country.capital}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))};
        </div>
    );
}
      

export default Props2;