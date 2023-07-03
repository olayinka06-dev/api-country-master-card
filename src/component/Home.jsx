import { useEffect, useState } from 'react';
import countryData from './AllData';
import Navigation from './Navigation';
import SearchInput from './SearchInput';
import Props2 from './Props2';
import CountryDetails from './CountryDetails';
import './Style.css';

function Home() {
  const [countries, setCountries] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [selectInput, setSelectInput] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [toggle, setToggle] = useState(false);


  useEffect(() => {
    setCountries(countryData)
  })

  const handleSearchInput = e => setSearchInput(e.target.value);
  const handleSelectInput = e => setSelectInput(e.target.value);
  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    setToggle(true)
  };

  const handleToggleMode = () => setIsDarkMode(prev => !prev);
  const handleCloseButtonClick = () => {
    setToggle(false)
  };

  const filteredCountries = countries.filter(country => {
    if (searchInput !== '' && !country.name.toLowerCase().includes(searchInput.toLowerCase())) {
      return false;
    }
    if (selectInput !== '' && country.region !== selectInput) {
      return false;
    }
    return true;
  });

  // const handleChangeDetails = (border) => {
  //   alert(border);
  // }

  return (
    <div className={ `app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navigation handle={handleToggleMode}/>
      {
        toggle ? "" : (<SearchInput value={searchInput} onChange={handleSearchInput} selectValue={selectInput} onSelectChange={handleSelectInput} />)
      }
      {
        toggle ? (<CountryDetails country={selectedCountry} closeButton={handleCloseButtonClick} />) : (<Props2 countries={filteredCountries} onClick={handleCountryClick} />)
      }
    </div>
  );
}

export default Home;