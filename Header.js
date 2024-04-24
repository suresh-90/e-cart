import React, {useState} from 'react'
import '../Header/Header.css'
import Logo from  '../../Assests/logo.svg';
export default function Header() {
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    
    const handleSearch = async () => {
        try {
            const URL = "https://dummyjson.com/products/search?q="; 
            const response = await fetch(URL + searchInput);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setSearchResults(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="header">
            <div className="nav">
                <div className="logo">
                    <img src={Logo} alt="logo"/>
                </div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="search">
                    <input type="text" id="searchInput" placeholder="Search for Products, Brands and more..." value={searchInput} onClick={(e) => setSearchInput(e.target.value)}/>
                    <button className="btn" id="searchBtn" onClick="{handleSearch}">Search</button>
                </div>
            </div>
            <ul id="showData">
                {searchResults.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
