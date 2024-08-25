import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../baseUrl';

interface ContactState {
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ContactState = {
  name: '',
  email: '',
  subject: '',
  message: '',
  status: 'idle',
  error: null,
};

// Async thunk for submitting the contact form
export const submitContactForm = createAsyncThunk(
  'contact/submitContactForm',
  async (
    { name, email, subject, message }: { name: string; email: string; subject: string; message: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/contact`, { name, email, subject, message });
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setSubject: (state, action: PayloadAction<string>) => {
      state.subject = action.payload;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(submitContactForm.fulfilled, (state) => {
        state.status = 'succeeded';
        state.name = '';
        state.email = '';
        state.subject = '';
        state.message = '';
      })
      .addCase(submitContactForm.rejected, (state, action: PayloadAction<any>) => {
        state.status = 'failed';
        state.error = action.payload.error;
      });
  },
});

export const { setName, setEmail, setSubject, setMessage } = contactSlice.actions;

export default contactSlice.reducer;
