import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../baseUrl";
//const BASE_URL = "http://localhost:3000/api/admin";

// Utility function to get error message
function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    return error.response?.data || "An error occurred";
  }
  return "An unexpected error occurred";
}

// Thunks

export const login = createAsyncThunk(
  "adminUser/login",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      console.log(email, password, "email, password");
      const response = await axios.post(`${BASE_URL}/api/admin/login`, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const sendOtp = createAsyncThunk(
  "adminUser/sendOtp",
  async ({ email }: { email: string }, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/admin/send-otp`, {
        email,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const changePassword = createAsyncThunk(
  "adminUser/changePassword",
  async (
    {
      email,
      otp,
      newPassword,
    }: { email: string; otp: string; newPassword: string },
    thunkAPI
  ) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/admin/change-password`,
        {
          email,
          otp,
          newPassword,
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const deleteAdmin = createAsyncThunk(
  "adminUser/deleteAdmin",
  async (id: string, thunkAPI) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/api/admin/delete-admin/${id}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

// Initial state
interface AdminUserState {
  loading: boolean;
  error: string | null;
  user: any | null;
  otpSent: boolean;
  passwordChanged: boolean;
  adminDeleted: boolean;
}

const initialState: AdminUserState = {
  loading: false,
  error: null,
  user: null,
  otpSent: false,
  passwordChanged: false,
  adminDeleted: false,
};

// Slice
const adminUserSlice = createSlice({
  name: "adminUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Send OTP
      .addCase(sendOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.otpSent = false;
      })
      .addCase(sendOtp.fulfilled, (state) => {
        state.loading = false;
        state.otpSent = true;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Change Password
      .addCase(changePassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.passwordChanged = false;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.loading = false;
        state.passwordChanged = true;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Delete Admin
      .addCase(deleteAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.adminDeleted = false;
      })
      .addCase(deleteAdmin.fulfilled, (state) => {
        state.loading = false;
        state.adminDeleted = true;
      })
      .addCase(deleteAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default adminUserSlice.reducer;
