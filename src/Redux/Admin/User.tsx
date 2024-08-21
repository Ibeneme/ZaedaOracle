import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseApiUrl } from "../Waiting/waitingList"; // Adjust this path if necessary

// Define the TypeScript interfaces for user data and responses
interface User {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  communitySub: boolean;
  verified: boolean;
  communitySubscribed: boolean;
  provider: boolean;
  createdAt: string;
  totalBalance: number;
  totalEarnings: number;
  totalWithdrawn: number;
}

interface FetchUsersResponse {
  users: User[];
}

interface UserState {
  loading: boolean;
  error: string | null;
  users: User[] | null;
}

// Define the initial state
const initialState: UserState = {
  loading: false,
  error: null,
  users: null,
};

// Define async thunks for fetching users
export const fetchAllUsers = createAsyncThunk<FetchUsersResponse, void>(
  "users/fetchAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseApiUrl}/api/v1/admin/users`);
      return response.data;
    } catch (error) {
      console.error("Fetch All Users Error:", error);
      return rejectWithValue("Failed to fetch all users");
    }
  }
);

export const fetchProviders = createAsyncThunk<FetchUsersResponse, void>(
  "users/fetchProviders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseApiUrl}/api/v1/users/providers`);
      return response.data;
    } catch (error) {
      console.error("Fetch Providers Error:", error);
      return rejectWithValue("Failed to fetch providers");
    }
  }
);

export const fetchCommunitySubscribedUsers = createAsyncThunk<
  FetchUsersResponse,
  void
>(
  "users/fetchCommunitySubscribedUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseApiUrl}/api/v1/users/community-subscribed`);
      return response.data;
    } catch (error) {
      console.error("Fetch Community Subscribed Users Error:", error);
      return rejectWithValue("Failed to fetch community subscribed users");
    }
  }
);

// Define the slice
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.users;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || "An error occurred";
      })
      .addCase(fetchProviders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProviders.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.users;
      })
      .addCase(fetchProviders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || "An error occurred";
      })
      .addCase(fetchCommunitySubscribedUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCommunitySubscribedUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.users;
      })
      .addCase(fetchCommunitySubscribedUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || "An error occurred";
      });
  },
});

export default userSlice.reducer;
