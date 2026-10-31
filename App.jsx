import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="home">
      <p className="tag">PREMIUM CAR RENTALS</p>
      <h2>Find Your <span>Perfect Drive</span></h2>
      <p>
        Experience comfort, style and freedom
        with DriveLux car rental services.
      </p>
      <Link className="button" to="/register">
        Register Now
      </Link>
    </div>
  );
}

function Register() {
  const [form, setForm] = useState({
    name: "", email: "", password: "",
    age: "", mobile: "", gender: "", state: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const updateField = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitted(false);
  };

  const errors = {
    name: !/^[A-Za-z ]+$/.test(form.name.trim()),
    email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email),
    password: !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(form.password),
    age: !/^\d+$/.test(form.age) ||
         Number(form.age) < 18 || Number(form.age) > 30,
    mobile: !/^\d{10}$/.test(form.mobile)
  };

  const valid =
    form.name.trim() !== "" && !errors.name &&
    form.email !== "" && !errors.email &&
    form.password !== "" && !errors.password &&
    form.age !== "" && !errors.age &&
    !errors.mobile && form.mobile !== "" &&
    form.gender !== "" && form.state !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valid) setSubmitted(true);
  };

  return (
    <div className="card">
      <h2>Customer Registration</h2>
      <p className="subtitle">Join the DriveLux family</p>

      <form onSubmit={handleSubmit} noValidate>
        <label>Full Name</label>
        <input name="name" value={form.name}
          onChange={updateField} placeholder="Enter your name" />
        {form.name && errors.name &&
          <small>Enter letters and spaces only.</small>}

        <label>Email Address</label>
        <input name="email" type="email" value={form.email}
          onChange={updateField} placeholder="Enter your email" />
        {form.email && errors.email &&
          <small>Enter a valid email.</small>}

        <label>Password</label>
        <input name="password" type="password" value={form.password}
          onChange={updateField} placeholder="Minimum 8 characters" />
        {form.password && errors.password &&
          <small>Use uppercase, lowercase and a number.</small>}

        <label>Age</label>
        <input name="age" type="number" value={form.age}
          onChange={updateField} placeholder="Age 18–30" />
        {form.age && errors.age &&
          <small>Age must be between 18 and 30.</small>}

        <label>Mobile Number</label>
        <input name="mobile" type="tel" value={form.mobile}
          onChange={updateField} placeholder="10-digit mobile number" />
        {form.mobile && errors.mobile &&
          <small>Enter exactly 10 digits.</small>}

        <label>Gender</label>
        <select name="gender" value={form.gender} onChange={updateField}>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <label>State</label>
        <select name="state" value={form.state} onChange={updateField}>
          <option value="">Select State</option>
          <option>Tamil Nadu</option>
          <option>Kerala</option>
          <option>Karnataka</option>
          <option>Andhra Pradesh</option>
        </select>

        <button type="submit" disabled={!valid}>
          Submit Registration
        </button>

        {submitted &&
          <p className="success">
            Registration completed successfully!
          </p>}
      </form>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Drive<span>Lux</span></h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/register">Registration</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <footer>
        <h2>DriveLux</h2>
        <p>Drive in your own style.</p>
        <p>© 2026 DriveLux Car Rental</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;