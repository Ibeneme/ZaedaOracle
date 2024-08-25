import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../baseUrl';

const axiosInstance = axios.create({
    baseURL: `${BASE_URL}/api/legal-insights`, // Set your base URL here
});

// Define types
interface LegalInsight {
    _id: string;
    title: string;
    description: string;
    image: string;
    dateCreated?: Date;
    dateUpdated?: Date;
}

interface LegalInsightsState {
    insights: LegalInsight[];
    insight: LegalInsight | null; // Add this line
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    response: any; // To store detailed responses if needed
}


interface ErrorResponse {
    message: string;
}

// Initial state
const initialState: LegalInsightsState = {
    insights: [],
    insight: null, // Initialize this as null
    status: 'idle',
    error: null,
    response: null, // Initialize response state
};


// Helper function to determine if an error is an Axios error
const isAxiosError = (error: any): error is import('axios').AxiosError<ErrorResponse> => {
    return error && error.isAxiosError && error.response && error.response.data && typeof error.response.data.message === 'string';
};

// Thunks
export const fetchLegalInsights = createAsyncThunk<any, void, { rejectValue: string }>(
    'legalInsights/fetchLegalInsights',
    async (_, thunkAPI) => {
        try {
            const response = await axiosInstance.get('/');
            return response.data;
        } catch (error) {
            if (isAxiosError(error)) {
                return thunkAPI.rejectWithValue(error.response?.data.message || 'Failed to fetch');
            }
            return thunkAPI.rejectWithValue('Failed to fetch');
        }
    }
);

export const fetchLegalInsightById = createAsyncThunk<any, string, { rejectValue: string }>(
    'legalInsights/fetchLegalInsightById',
    async (id, thunkAPI) => {
        try {
            const response = await axiosInstance.get(`/${id}`);
            return response.data;
        } catch (error) {
            if (isAxiosError(error)) {
                return thunkAPI.rejectWithValue(error.response?.data.message || 'Failed to fetch');
            }
            return thunkAPI.rejectWithValue('Failed to fetch');
        }
    }
);


export const createLegalInsight = createAsyncThunk<
    any, // Replace with the actual type of the returned data if known
    { title: string; description: string; image: File },
    { rejectValue: string }
>(
    'legalInsights/createLegalInsight',
    async ({ title, description, image }, thunkAPI) => {
        try {
            // Create a FormData object to send as multipart/form-data
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('image', image);

            console.log(title, description, image, 'lll')

            // Send a POST request to the server
            const response = await axiosInstance.post('/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Return the data from the response
            return response.data.legalInsight;
        } catch (error) {
            if (isAxiosError(error)) {
                // Handle errors from the server
                return thunkAPI.rejectWithValue(
                    error.response?.data.message || 'Failed to create legal insight'
                );
            }
            // Handle other types of errors
            return thunkAPI.rejectWithValue('Failed to create legal insight');
        }
    }
);

export const updateLegalInsight = createAsyncThunk<
    any, // Replace with the actual type of the returned data if known
    { _id: string; title?: string; description?: string; image?: File },
    { rejectValue: string }
>(
    'legalInsights/updateLegalInsight',
    async ({ _id, title, description, image }, thunkAPI) => {
        try {
            // Create a FormData object to send as multipart/form-data
            const formData = new FormData();
            if (title) formData.append('title', title);
            if (description) formData.append('description', description);
            if (image) formData.append('image', image);

            console.log(_id, title, description, image, 'Updating legal insight');

            // Send a PUT request to the server
            const response = await axiosInstance.put(`/${_id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Return the data from the response
            return response.data.legalInsight;
        } catch (error) {
            if (isAxiosError(error)) {
                // Handle errors from the server
                return thunkAPI.rejectWithValue(
                    error.response?.data.message || 'Failed to update legal insight'
                );
            }
            // Handle other types of errors
            return thunkAPI.rejectWithValue('Failed to update legal insight');
        }
    }
);

export const deleteLegalInsight = createAsyncThunk<any, string, { rejectValue: string }>(
    'legalInsights/deleteLegalInsight',
    async (id, thunkAPI) => {
        try {
            await axiosInstance.delete(`/${id}`);
            return id;
        } catch (error) {
            if (isAxiosError(error)) {
                return thunkAPI.rejectWithValue(error.response?.data.message || 'Failed to delete');
            }
            return thunkAPI.rejectWithValue('Failed to delete');
        }
    }
);

export const deleteAllLegalInsights = createAsyncThunk<void, void, { rejectValue: string }>(
    'legalInsights/deleteAllLegalInsights',
    async (_, thunkAPI) => {
        try {
            await axiosInstance.delete('/');
        } catch (error) {
            if (isAxiosError(error)) {
                return thunkAPI.rejectWithValue(error.response?.data.message || 'Failed to delete all');
            }
            return thunkAPI.rejectWithValue('Failed to delete all');
        }
    }
);

// Slice
// Slice
const legalInsightsSlice = createSlice({
    name: 'legalInsights',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Fetch legal insights
        builder
            .addCase(fetchLegalInsights.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchLegalInsights.fulfilled, (state, action: PayloadAction<LegalInsight[]>) => {
                state.status = 'succeeded';
                state.insights = action.payload;
                state.response = action.payload;
            })
            .addCase(fetchLegalInsights.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.status = 'failed';
                state.error = action.payload || 'Failed to fetch legal insights';
            });

        // Fetch legal insight by ID
        builder
            .addCase(fetchLegalInsightById.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchLegalInsightById.fulfilled, (state, action: PayloadAction<LegalInsight>) => {
                state.status = 'succeeded';
                state.insight = action.payload; // Store single insight
                state.response = action.payload;
            })
            .addCase(fetchLegalInsightById.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.status = 'failed';
                state.error = action.payload || 'Failed to fetch legal insight by ID';
            });

        // Create legal insight
        builder
            .addCase(createLegalInsight.fulfilled, (state, action: PayloadAction<LegalInsight>) => {
                state.insights.push(action.payload);
                state.response = action.payload;
            })
            .addCase(createLegalInsight.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.status = 'failed';
                state.error = action.payload || 'Failed to create legal insight';
            });

        // Update legal insight
        builder
            .addCase(updateLegalInsight.fulfilled, (state, action: PayloadAction<LegalInsight>) => {
                const index = state.insights.findIndex((insight) => insight._id === action.payload._id);
                if (index >= 0) {
                    state.insights[index] = action.payload;
                }
                state.response = action.payload;
            })
            .addCase(updateLegalInsight.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.status = 'failed';
                state.error = action.payload || 'Failed to update legal insight';
            });

        // Delete legal insight
        builder
            .addCase(deleteLegalInsight.fulfilled, (state, action: PayloadAction<string>) => {
                state.insights = state.insights.filter((insight) => insight._id !== action.payload);
                state.response = action.payload;
            })
            .addCase(deleteLegalInsight.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.status = 'failed';
                state.error = action.payload || 'Failed to delete legal insight';
            });

        // Delete all legal insights
        builder
            .addCase(deleteAllLegalInsights.fulfilled, (state) => {
                state.insights = [];
                state.response = 'All insights deleted';
            })
            .addCase(deleteAllLegalInsights.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.status = 'failed';
                state.error = action.payload || 'Failed to delete all legal insights';
            });
    },
});



export default legalInsightsSlice.reducer;
