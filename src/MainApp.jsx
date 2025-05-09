import React, { useState } from 'react';
import './App.css'; // Use your existing styles

function MainApp() {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [availabilityFilter, setAvailabilityFilter] = useState('');
  const [maxRentFilter, setMaxRentFilter] = useState(10000);

  const listings = [
    {
      id: 1,
      title: 'Cozy Room in Downtown',
      location: 'Downtown',
      rent: 5000,
      status: 'Available',
      imageUrl: '/images/cozy_room_downtown.jpg',
    },
    {
      id: 2,
      title: 'Spacious Room near University',
      location: 'Near University',
      rent: 7000,
      status: 'Not Available',
      imageUrl: '/images/spacious_room_university.jpg',
    },
    {
      id: 3,
      title: 'Budget Room in City Center',
      location: 'City Center',
      rent: 4000,
      status: 'Available',
      imageUrl: '/images/budget_room_city_center.jpg',
    },
    {
      id: 4,
      title: 'Modern Room in Old Town',
      location: 'Old Town',
      rent: 6000,
      status: 'Available',
      imageUrl: '/images/cozy_room_downtown3.jpg',
    },
    {
      id: 5,
      title: 'Luxury Room in Beachside',
      location: 'Beachside',
      rent: 12000,
      status: 'Available',
      imageUrl: '/images/spacious_room_university.jpg',
    },
    {
      id: 6,
      title: 'Economy Room in Suburbs',
      location: 'Suburbs',
      rent: 3500,
      status: 'Not Available',
      imageUrl: '/images/7.jpg',
    },
    {
      id: 7,
      title: 'Sunny Room in Parkside',
      location: 'Parkside',
      rent: 5500,
      status: 'Available',
      imageUrl: '/images/4.jpg',
    },
    {
      id: 8,
      title: 'Premium Room by the Lake',
      location: 'Lakeview',
      rent: 8000,
      status: 'Available',
      imageUrl: '/images/spacious_room_university2.jpg',
    },
    {
      id: 9,
      title: 'Comfortable Room in Central Area',
      location: 'Central Area',
      rent: 6500,
      status: 'Available',
      imageUrl: '/images/8.jpg',
    },
    {
      id: 10,
      title: 'Stylish Room in Old District',
      location: 'Old District',
      rent: 4500,
      status: 'Not Available',
      imageUrl: '/images/10.jpg',
    },
  ];



  return (
    <div className="App">
      <div className="header">
        <h1>PG Listing Portal</h1>
        <button 
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem('isLoggedIn');
            window.location.reload();
          }}
        >
          Logout
        </button>
      </div>

      <div className="filters">
        <input 
          type="text" 
          placeholder="Search by name" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Filter by Location" 
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Filter by Availability" 
          value={availabilityFilter}
          onChange={(e) => setAvailabilityFilter(e.target.value)}
        />
        <input 
          type="number" 
          placeholder="Filter by Max Rent" 
          value={maxRentFilter}
          onChange={(e) => setMaxRentFilter(Number(e.target.value))}
        />
      </div>

      <div className="property-list">
        {listings
          .filter((listing) =>
            listing.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
            listing.location.toLowerCase().includes(locationFilter.toLowerCase()) &&
            (availabilityFilter === '' || listing.status.toLowerCase().includes(availabilityFilter.toLowerCase())) &&
            listing.rent <= maxRentFilter
          )
          .map((listing) => (
            <div key={listing.id} className="property-card">
              <img src={listing.imageUrl} alt={listing.title} className="property-image" />
              <h2>{listing.title}</h2>
              <p>Location: {listing.location}</p>
              <p>Rent: ₹ {listing.rent}/month</p>
              <p>Status: {listing.status}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MainApp;
