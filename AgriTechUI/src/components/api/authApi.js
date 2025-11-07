import axios from "axios";

const BASE_URL = "http://localhost:8080/api/auth";

// Create a pre-configured Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

//  Login API
export const loginUser = async (username, password) => {
  try {
    const response = await api.post("/login", { username, password });

    if (!response.data.accessToken) {
      throw new Error(response.data.message || "Invalid credentials");
    }

    return response.data;
  } catch (error) {
    console.error(" Login API Error:", error);
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

//  Register API
export const registerUser = async (userData) => {
  try {
    const response = await api.post("/register", userData);
    return response.data; 
  } catch (error) {
    console.error(" Register API Error:", error);
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};
