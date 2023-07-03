import React from 'react';
import { useState, useEffect } from 'react';
import countryData from "./AllData";
import styled from 'styled-components';
import {MdOutlineNightlight, MdOutlineLightMode} from "react-icons/md"

const Props = () => {
    const [countries, setCountries] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [selectInput, setSelectInput] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [view, setview] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null); // new state variable to track selected country
    // const [cancel, setcancel] = useState(false);

    
    useEffect(() => {
        setCountries(countryData)
    }, [])

    useEffect(() => {
        const filteredCountries = countryData.filter(count => {
          // filter by name and select input
          if (searchInput !== '' && !count.name.toLowerCase().includes(searchInput.toLowerCase())) {
            return false;
          }
          if (selectInput !== '' && count.region !== selectInput) {
            return false;
          }
          return true;
        });
        setCountries(filteredCountries);
      }, [searchInput, selectInput]);

      const handleSearchInput = e => setSearchInput(e.target.value);
      const handleSelectInput = e => setSelectInput(e.target.value);
      const handleCountryClick = country => {
        setSelectedCountry(country);
        setShowModal(true);
      }; // new event handler for country click

        const toggleDarkMode = () => {
            setIsDarkMode(!isDarkMode);
            setview(!view)
          };
          const handleCloseModal = () => {
            setSelectedCountry(null);
            setShowModal(false);
          };


    return (
    <>    
    {isDarkMode ? (<LightMode>
            <div className="app">
               <nav>
                    <h2>Where in the World?</h2>
                    {
                       view ? <button onClick={toggleDarkMode}><MdOutlineLightMode className='icon'/>Light Mode</button> : <button onClick={toggleDarkMode}><MdOutlineNightlight className='icon'/> Dark Mode</button>
                    }
               </nav>

                <div className="input-field">
                    <div className='first'>
                        <input type="text" value={searchInput} onChange={handleSearchInput} placeholder="Search by country name" />
                    </div>
                    <div className='second'>
                    <select value={selectInput} onChange={handleSelectInput}>
                        <option value="">All Regions</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                    </div>
                </div>
                <div className="enclosure">
                        { countries.map(country => (
                            <div className="container" key={country.alpha3Code} onClick={() => handleCountryClick(country)}>
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

                            ))

                        }
                    {selectedCountry && showModal && (
                          <div className={`positioned`}>
                            <button onClick={handleCloseModal}>Back</button>
                            <div className="position-center">
                                <div className="container-after">
                                    <div className="field-after">
                                        <div className="picture">
                                            <img src={selectedCountry.flags.png} alt={selectedCountry.flags.png} />
                                        </div>
                                        <div className="content-after">
                                            <h3>{selectedCountry.name}</h3>
                                            <div className="about-after">
                                                <div className="one">
                                                    <p><span>Native Name: </span>{selectedCountry.nativeName}</p>
                                                    <p><span>Population:</span> {selectedCountry.population}</p>
                                                    <p><span>Region:</span> {selectedCountry.region}</p>
                                                    <p><span>Sub Region:</span>{selectedCountry.subregion}</p>
                                                    <p><span>Capital:</span> {selectedCountry.capital}</p>
                                                </div>
                                                <div className="two">
                                                    <p><span>Top Level Domain:</span>{selectedCountry.topLevelDomain}</p>
                                                    <p><span>Currencies:</span>{selectedCountry.currencies.map(c => c.name)}</p>
                                                    <p><span>Languages:</span>{selectedCountry.languages.map(l => l.name + " ")}</p>
                                                </div>
                                            </div>
                                            <div className="base">
                                                <p><span>Border Countries:</span> </p>
                                                <div>{selectedCountry.borders.map(b => b + " ")}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </div>
                        )
                    }
                </div>
            </div>
        </LightMode>) : (
        <DarkMode>
            <div className="app">
               <nav>
                    <h2>Where in the World?</h2>
                    {
                       view ? <button onClick={toggleDarkMode}><MdOutlineLightMode className='icon'/>Light Mode</button> : <button onClick={toggleDarkMode}><MdOutlineNightlight className='icon'/> Dark Mode</button>
                    }
               </nav>

                <div className="input-field">
                    <div className='first'>
                        <input type="text" value={searchInput} onChange={handleSearchInput} placeholder="Search by country name" />
                    </div>
                    <div className='second'>
                    <select value={selectInput} onChange={handleSelectInput}>
                        <option value="">All Regions</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                    </div>
                </div>
                <div className="enclosure">
                        { countries.map(country => (
                            <div className="container" key={country.alpha3Code} onClick={() => handleCountryClick(country)}>
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

                            ))

                        }
                    {selectedCountry && showModal && (
                          <div className={`positioned `}>
                            <button onClick={handleCloseModal}>Back</button>
                            <div className="position-center">

                                <div className="container-after">
                                    <div className="field-after">
                                        <div className="picture">
                                            <img src={selectedCountry.flags.png} alt={selectedCountry.flags.png} />
                                        </div>
                                        <div className="content-after">
                                            <h2>{selectedCountry.name}</h2>
                                            <div className="about-after">
                                                <div className="one">
                                                    <p><span>Native Name: </span>{selectedCountry.nativeName}</p>
                                                    <p><span>Population:</span> {selectedCountry.population}</p>
                                                    <p><span>Region:</span> {selectedCountry.region}</p>
                                                    <p><span>Sub Region:</span>{selectedCountry.subregion}</p>
                                                    <p><span>Capital:</span> {selectedCountry.capital}</p>
                                                </div>
                                                <div className="two">
                                                    <p><span>Top Level Domain:</span>{selectedCountry.topLevelDomain}</p>
                                                    <p><span>Currencies:</span>{selectedCountry.currencies.map(c => c.name)}</p>
                                                    <p><span>Languages:</span>{selectedCountry.languages.map(l => l.name + " ")}</p>
                                                </div>
                                            </div>
                                            <div className="base">
                                                <p><span>Border Countries:</span> </p>
                                                <div>{selectedCountry.borders.map(b => b + " ")}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </div>
                        )
                    }
                </div>
            </div>
        </DarkMode>
        )}
        </>
    )
}
// 

const LightMode = styled.div`
        --mainbody: rgb(250,250,250);
        --container: white;
        --content: white;
        --contentcolor: black;
        --border:rgb(243,243,243)
;
    .app{
        width: 100%;
        background-color: var(--mainbody) !important;
        background-color: rgb(250,250,250);
        transition: all .9s linear;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    nav button{
        border: none;
        padding: 10px 30px;
        background-color: transparent;
        color: var(--contentcolor);
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .icon{
        font-size: 30px;
    }
    .positioned{
        width: 100%;
        height: 100vh;
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--mainbody);
        top: 0;
        left: 0;
    }
    .position-center{
        width: 100%;
    }
    .cancel{
        display: none;
    }
    nav{
        width: 100%;
        height: 10vh;
        display: flex;
        justify-content: space-between;
        background-color: var(--content);
        align-items: center;
        color: var(--contentcolor);
        padding: 0 50px;
        z-index: 1000;

    }
    .input-field{
        width: 100%;
        display: flex;
        flex-direction: row;
        padding: 30px 50px;
    }
    .first{
        width: 100%;
    }
    .first input{
        width: 100%;
        padding: 12px;
        border-radius: 10px;
        border: none;
        background-color: var(--content);
        color: var(--contentcolor);
        box-shadow: 0px 4px 4px var(--border);
    }
    .second{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
    select{
        border-radius: 10px;
        border: none;
        padding: 12px;
        width: 150px;
        text-align: left !important;
        background-color: var(--content);
        color: var(--contentcolor);
        box-shadow: 0px 4px 4px var(--border);
    }
    option{
        border-radius: 5px;
    }
    .enclosure{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 50px;
        row-gap: 40px;
        padding: 30px 50px;
    }
    .container{
        display: flex;
        flex-direction: column;
        box-shadow: 0px 4px 4px var(--border);
        background-color: var(--container);
        /* background-color: white; */

    }
    img{
        width: 100%;
        height: 30vh;
    }
    .content{
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 30px;
        gap: 20px;
        background-color: var(--content);
        /* background-color: white; */
        color: var(--contentcolor);
    }
    .about{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .positioned button{
        position: absolute;
        top: 17%;
        left: 6%;
        background-color: var(--content);
        color: var(--contentcolor);
        padding: 10px 25px;
        border: none;
        box-shadow: 0px 4px 4px var(--border);
    }
    .container-after{
        padding: 0 80px;
        background-color: var(--mainbody);
    }
    .field-after{
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 30px;
    }
    .picture{
        width: 100%;
        height: 50vh;
    }
    .picture img{
        height: 50vh;
    }
    .content-after{
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: var(--container);
        gap: 10px;
        height: 50vh;
    }
    .about-after{
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 30px;
    }
    .one, .two{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .base{
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 5px;
        color: var(--contentcolor);
        margin-top: 50px;
    }
    .base div{
        display: flex;
        flex-direction: row;
        gap: 10px;
    }

    @media screen and (max-width: 1200px) {
        .enclosure{
            grid-template-columns: repeat(3, 1fr);
        }
        .input-field{
            flex-direction: column;
            gap: 30px;
        }
        .second{
            justify-content: flex-start;
        }
        nav{
            padding: 0 10px;
        }
        .positioned{
            flex-direction: column;
        }
    }

    @media screen and (max-width: 950px) {
        .enclosure{
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media screen and (max-width: 680px) {
        .enclosure{
            grid-template-columns: repeat(1, 1fr);
        }
    }


`
const DarkMode = styled.div`
        --mainbody: hsl(207, 26%, 17%);
        --container: hsl(209, 23%, 22%);
        --content: hsl(209, 23%, 22%);
        --contentcolor: white;
        --contentcolor2: #6a727a;
        --border: hsl(213.33333333333334, 9.677419354838712%, 18.23529411764706%);

    .app{
        width: 100%;
        background-color: var(--mainbody) !important;
        background-color: rgb(250,250,250);
        transition: all .9s linear;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    nav button{
        border: none;
        padding: 10px 30px;
        background-color: transparent;
        color: var(--contentcolor);
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .icon{
        font-size: 30px;
    }
    .positioned{
        width: 100%;
        min-height: 100vh;
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--mainbody);
        top: 0;
        left: 0;
        overflow-y: auto;
    }
    .position-center{
        width: 100%;
        /* display: flex;
        align-items: center;
        justify-content: center; */
    }
    .cancel{
        display: none;
    }
    nav{
        width: 100%;
        height: 10vh;
        display: flex;
        justify-content: space-between;
        background-color: var(--content);
        align-items: center;
        color: var(--contentcolor);
        padding: 0 50px;
        z-index: 1000;
    }
    .input-field{
        width: 100%;
        display: flex;
        flex-direction: row;
        padding: 30px 50px;
    }
    .first{
        width: 100%;
    }
    .first input{
        width: 100%;
        padding: 12px;
        border-radius: 10px;
        border: none;
        background-color: var(--content);
        color: var(--contentcolor);
        box-shadow: 0px 4px 4px var(--border);
    }
    .second{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
    select{
        border-radius: 10px;
        padding: 12px;
        border: none;
        width: 150px;
        text-align: left !important;
        background-color: var(--content);
        color: var(--contentcolor);
        box-shadow: 0px 4px 4px var(--border);

    }
    option{
        border-radius: 5px;
    }
    .enclosure{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 50px;
        row-gap: 40px;
        padding: 30px 50px;
    }
    .container{
        display: flex;
        flex-direction: column;
        box-shadow: 0px 4px 4px var(--border);
        background-color: var(--container);
        /* background-color: white; */

    }
    img{
        width: 100%;
        height: 30vh;
    }
    .content{
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 30px;
        gap: 20px;
        background-color: var(--content);
        /* background-color: white; */
        color: var(--contentcolor);
    }
    .about{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .positioned button{
        position: absolute;
        top: 17%;
        left: 6%;
        background-color: var(--content);
        color: var(--contentcolor);
        padding: 10px 25px;
        border: none;
        box-shadow: 0px 4px 4px var(--border);
    }
    .container-after{
        padding: 0 80px;
    }
    .field-after{
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 30px;
    }
    .picture{
        width: 100%;
        height: 50vh;
    }
    .picture img{
        height: 50vh;
    }
    .content-after{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        height: 50vh;
    }
    .container-after h2{
        color: var(--contentcolor);
    }
    .about-after{
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 30px;
        color: var(--contentcolor2);
    }
    span{
        color: var(--contentcolor) !important;
    }
    .one, .two{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .base{
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 5px;
        color: var(--contentcolor);
        margin-top: 50px;
    }
    .base div{
        color: var(--contentcolor2);
        background-color: var(--content);
        display: flex;
        flex-direction: row;
        gap: 10px;
    }

    @media screen and (max-width: 1200px) {
        .enclosure{
            grid-template-columns: repeat(3, 1fr);
        }
        .input-field{
            flex-direction: column;
            gap: 30px;
        }
        .second{
            justify-content: flex-start;
        }
        .positioned{
            flex-direction: column;
        }
        .position-center{
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .field-after{
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        nav{
            padding: 0 10px;
        }
    }

    @media screen and (max-width: 950px) {
        .enclosure{
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media screen and (max-width: 680px) {
        .enclosure{
            grid-template-columns: repeat(1, 1fr);
        }
    }


`

export default Props;