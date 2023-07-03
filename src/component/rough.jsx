// // Home.jsx

// import { useState } from 'react';
// import countryData from './countryData';
// import Navigation from './Navigation';
// import SearchInput from './SearchInput';
// import FetchedData from './FetchedData';
// import CountryDetails from './CountryDetails';

// function Home() {
//   const [countries, setCountries] = useState(countryData);
//   const [searchInput, setSearchInput] = useState('');
//   const [selectInput, setSelectInput] = useState('');
//   const [selectedCountry, setSelectedCountry] = useState(null);

//   const handleSearchInput = e => setSearchInput(e.target.value);
//   const handleSelectInput = e => setSelectInput(e.target.value);
//   const handleCountryClick = country => setSelectedCountry(country);

//   const filteredCountries = countries.filter(country => {
//     if (searchInput !== '' && !country.name.toLowerCase().includes(searchInput.toLowerCase())) {
//       return false;
//     }
//     if (selectInput !== '' && country.region !== selectInput) {
//       return false;
//     }
//     return true;
//   });

//   return (
//     <div className="App">
//       <Navigation />
//       <SearchInput value={searchInput} onChange={handleSearchInput} selectValue={selectInput} onSelectChange={handleSelectInput} />
//       <FetchedData countries={filteredCountries} onClick={handleCountryClick} />
//       <CountryDetails country={selectedCountry} />
//     </div>
//   );
// }

// export default Home;

// // Navigation.jsx

// import { useState } from 'react';

// function Navigation() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const handleToggleMode = () => setIsDarkMode(prev => !prev);

//   return (
//     <nav className={isDarkMode ? 'dark-mode' : 'light-mode'}>
//       <button onClick={handleToggleMode}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
//     </nav>
//   );
// }

// export default Navigation;

// // SearchInput.jsx

// function SearchInput({ value, onChange, selectValue, onSelectChange }) {
//   return (
//     <div>
//       <input type="text" value={value} onChange={onChange} placeholder="Search by country name" />
//       <select value={selectValue} onChange={onSelectChange}>
//         <option value="">All Regions</option>
//         <option value="Africa">Africa</option>
//         <option value="Americas">Americas</option>
//         <option value="Asia">Asia</option>
//         <option value="Europe">Europe</option>
//         <option value="Oceania">Oceania</option>
//       </select>
//     </div>
//   );
// }

// export default SearchInput;

// // FetchedData.jsx

// function FetchedData({ countries, onClick }) {
//   return (
//     <ul>
//       {countries.map(country => (
//         <li key={country.alpha3Code} onClick={() => onClick(country)}>
//           {country.name}
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default FetchedData;

// // CountryDetails.jsx

// function CountryDetails({ country }) {
//   if (!country) {
//     return null;
//   }

//   return (
//     <div>
//       <h2>{country.name}</h2>
//       <img src={country.flag} alt={country.name} />
//       <p>Capital: {country.capital}</p>
//       <p>Population: {country.population}</p>
//       <p>Region: {country.region}</p>
//       <p>
