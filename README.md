# PG Listing Portal

This is a React-based PG (Paying Guest) Listing Portal developed as part of my internship project with Apna Garh.

The portal allows students to explore available rental properties with filters based on rent, location, and availability. A basic login system is also implemented using React for demonstration purposes.

## Login Page

**To log in, use:**
- **Username:** `user`
- **Password:** `password`

A simple login page is included to simulate user authentication. It is implemented in:

`src/pages/Login.jsx`

Login is done using hardcoded credentials for testing purposes.

If the credentials are valid, the login state is saved in localStorage and access is granted.

Login page styling is handled in `Login.css`.

Example usage in your `App.jsx`:

```jsx
<Route path="/login" element={<Login onLogin={handleLoginSuccess} />} />

## Live Demo

Coming soon (You can deploy via Vercel or Netlify and add the link here.)

---

## Tech Stack

- React.js – Frontend framework
- Vite – Build tool
- CSS – Styling the components
- Dummy JSON – Simulated property data

---

## Features

- Property listing cards with image, rent, location, and availability
- Search and filter options by:
  - Rent
  - Location
  - Availability
- Pagination (Bonus feature)
- Login page with dummy user authentication (Bonus feature)

---

