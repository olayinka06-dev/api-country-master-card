import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './component/Home'
import CountryDetails from './component/CountryDetails';
function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path={'/countrydetails'} element={<CountryDetails/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
