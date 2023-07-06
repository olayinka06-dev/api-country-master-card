import { useState, useEffect } from 'react';
import countryData from './countryData'; // assuming the data is in a separate file
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};
  min-height: 100vh;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  cursor: pointer;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${props => props.theme.modalBackground};
  color: ${props => props.theme.color};
  padding: 20px;
  z-index: 999;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${props => props.theme.buttonBackground};
  color: ${props => props.theme.buttonColor};
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const BorderCountryButton = styled.button`
  background-color: ${props => props.theme.buttonBackground};
  color: ${props => props.theme.buttonColor};
  border: none;
  padding: 10px;
  cursor: pointer;
  margin-bottom: 10px;
`;

function Overall() {
  const [countries, setCountries] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [selectInput, setSelectInput] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null); // new state variable to track selected country

  useEffect(() => {
    setCountries(countryData); // initialize with all the data
  }, []);

  useEffect(() => {
    const filteredCountries = countryData.filter(country => {
      // filter by name and select input
      if (searchInput !== '' && !country.name.toLowerCase().includes(searchInput.toLowerCase())) {
        return false;
      }
      if (selectInput !== '' && country.region !== selectInput) {
        return false;
      }
      return true;
    });
    setCountries(filteredCountries);
  }, [searchInput, selectInput]);

  const handleSearchInput = e => setSearchInput(e.target.value);
  const handleSelectInput = e => setSelectInput(e.target.value);
  const handleCountryClick = country => setSelectedCountry(country); // new event handler for country click
  const handleBorderCountryClick = borderCountry => setSelectedCountry(borderCountry); // event handler for border country click

  return (
    <Container>
      <input type="text" value={searchInput} onChange={handleSearchInput} placeholder="Search by country name" />
      <select value={selectInput} onChange={handleSelectInput}>
        <option value="">All Regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <List>
        {countries.map(country => (
          <ListItem key={country.alpha3Code} onClick={() => handleCountryClick(country)}>
            {country.name}
          </ListItem>
        ))}
      </List>Continued code:

```jsx
      {selectedCountry && (
        <Modal>
          <CloseButton onClick={() => setSelectedCountry(null)}>Close</CloseButton>
          <h2>{selectedCountry.name}</h2>
          <img src={selectedCountry.flag} alt={selectedCountry.name} />
          <p>Capital: {selectedCountry.capital}</p>
          <p>Population: {selectedCountry.population}</p>
          <p>Region: {selectedCountry.region}</p>
          <p>Subregion: {selectedCountry.subregion}</p>
          <h3>Border Countries:</h3>
          {selectedCountry.borders.map(borderCode => {
            const borderCountry = countryData.find(country => country.alpha3Code === borderCode);
            if (borderCountry) {
              return (
                <BorderCountryButton key={borderCountry.alpha3Code} onClick={() => handleBorderCountryClick(borderCountry)}>
                  {borderCountry.name}
                </BorderCountryButton>
              );
            }
            return null;
          })}
        </Modal>
      )}
    </Container>
  );
}

export default Overall;

