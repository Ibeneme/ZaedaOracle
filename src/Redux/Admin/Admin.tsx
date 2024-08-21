import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { baseApiUrl } from "../Waiting/waitingList"; // Ensure this path is correct

// Define the TypeScript interface for the payload
interface AdminLoginPayload {
  email: string;
  password: string;
}

// Define the TypeScript interface for the response data
interface AdminLoginResponse {
  token: string;
  message: any
  // Add other fields if needed
}

// Define the TypeScript interface for the state
interface AdminInterfaceState {
  loading: boolean;
  error: string | null;
  success: AdminLoginResponse | null; // Adjust this type based on what success contains
}

// Define the initial state
const initialState: AdminInterfaceState = {
  loading: false,
  error: null,
  success: null,
};

// Define the adminLogin thunk
export const adminLogin = createAsyncThunk<
  AdminLoginResponse, // The type of the return value
  AdminLoginPayload
>(
  'AdminInterface/adminLogin',
  async (payload: AdminLoginPayload) => {
    const { email, password } = payload;

    try {
      const response = await axios.post(
        `${baseApiUrl}/api/v1/admin/login`,
        { email, password }
      );
      console.log(response, 'Admin Login Response');
      return response.data; // Assuming response.data contains the token
    } catch (error) {
      console.error(error, 'Admin Login Error');
      // Return a default error message or error data
      return (error as AxiosError).response?.data || 'An error occurred';
    }
  }
);

// Define the slice
const AdminInterfaceSlice = createSlice({
  name: "AdminInterface",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(adminLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload;

        // Store the token in localStorage
        if (action.payload.token) {
          localStorage.setItem('adminToken', action.payload.token);
          // Optionally handle authorization or redirect here
          // e.g., navigate('/dashboard'); or update the app state
        }
      })
      .addCase(adminLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? (action.payload as string) : 'An error occurred';
      });
  },
});

export default AdminInterfaceSlice.reducer;
