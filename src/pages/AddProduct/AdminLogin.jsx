import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/api/admin/login`, {
        email,
        password,
      });
      console.log(res.data);
      if (res.data.success) {
        localStorage.setItem("admin", JSON.stringify({ email, password }));
        navigate("/admin/dashboard");
      } else {
        alert("Invalid Credentials");
      }
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border w-full p-2 mb-4 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border w-full p-2 mb-4 rounded"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
