import React, { useState } from "react";
import axios from "axios";

const Register = () => {
    const [form, setForm] = useState({
        full_name: "",
        username: "",
        email: "",
        phone: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/api/register/", form);
            alert("Registration successful!");
            setForm({ full_name: "", username: "", email: "", phone: "", password: "" });
        } catch (error) {
            console.error("Error:", error);
            alert("Registration failed!");
        }
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Register User</h2>
            <form onSubmit={handleSubmit}>
                <input name="full_name" value={form.full_name} onChange={handleChange} placeholder="Full Name" required /><br />
                <input name="username" value={form.username} onChange={handleChange} placeholder="Username" required /><br />
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required /><br />
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" required /><br />
                <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" required /><br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;