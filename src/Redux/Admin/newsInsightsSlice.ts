import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../baseUrl';

const axiosInstance = axios.create({
    baseURL: `${BASE_URL}/api/news-insights`, // Set your base URL here
});

// Define types
interface NewsInsight {
    _id: string;
    title: string;
    excerpt: string;
    image: string;
    content: string;
    dateCreated?: Date;
    dateUpdated?: Date;
}

interface NewsInsightsState {
    insights: NewsInsight[];
    insight: NewsInsight | null; // Add this line
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    response: any; // To store detailed responses if needed
}

interface ErrorResponse {
    message: string;
}

// Initial state
const initialState: NewsInsightsState = {
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
export const fetchNewsInsights = createAsyncThunk<any, void, { rejectValue: string }>(
    'newsInsights/fetchNewsInsights',
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

export const fetchNewsInsightById = createAsyncThunk<any, string, { rejectValue: string }>(
    'newsInsights/fetchNewsInsightById',
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

export const createNewsInsight = createAsyncThunk<
    any, // Replace with the actual type of the returned data if known
    { title: string; excerpt: string; image: File; content: string },
    { rejectValue: string }
>(
    'newsInsights/createNewsInsight',
    async ({ title, excerpt, image, content }, thunkAPI) => {
        try {
            // Create a FormData object to send as multipart/form-data
            const formData = new FormData();
            formData.append('title', title);
            formData.append('excerpt', excerpt);
            formData.append('image', image);
            formData.append('content', content);

            // Send a POST request to the server
            const response = await axiosInstance.post('/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Return the data from the response
            return response.data.newsInsight;
        } catch (error) {
            if (isAxiosError(error)) {
                // Handle errors from the server
                return thunkAPI.rejectWithValue(
                    error.response?.data.message || 'Failed to create news insight'
                );
            }
            // Handle other types of errors
            return thunkAPI.rejectWithValue('Failed to create news insight');
        }
    }
);

export const updateNewsInsight = createAsyncThunk<
    any, // Replace with the actual type of the returned data if known
    { _id: string; title?: string; excerpt?: string; image?: File; content?: string },
    { rejectValue: string }
>(
    'newsInsights/updateNewsInsight',
    async ({ _id, title, excerpt, image, content }, thunkAPI) => {
        try {
            // Create a FormData object to send as multipart/form-data
            const formData = new FormData();
            if (title) formData.append('title', title);
            if (excerpt) formData.append('excerpt', excerpt);
            if (content) formData.append('content', content);
            if (image) formData.append('image', image);

            // Send a PUT request to the server
            const response = await axiosInstance.put(`/${_id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Return the data from the response
            return response.data.newsInsight;
        } catch (error) {
            if (isAxiosError(error)) {
                // Handle errors from the server
                return thunkAPI.rejectWithValue(
                    error.response?.data.message || 'Failed to update news insight'
                );
            }
            // Handle other types of errors
            return thunkAPI.rejectWithValue('Failed to update news insight');
        }
    }
);

export const deleteNewsInsight = createAsyncThunk<any, string, { rejectValue: string }>(
    'newsInsights/deleteNewsInsight',
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

export const deleteAllNewsInsights = createAsyncThunk<void, void, { rejectValue: string }>(
    'newsInsights/deleteAllNewsInsights',
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
const newsInsightsSlice = createSlice({
    name: 'newsInsights',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Fetch news insights
        builder
            .addCase(fetchNewsInsights.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchNewsInsights.fulfilled, (state, action: PayloadAction<NewsInsight[]>) => {
                state.status = 'succeeded';
                state.insights = action.payload;
                state.response = action.payload;
            })
            .addCase(fetchNewsInsights.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.status = 'failed';
                state.error = action.payload || 'Failed to fetch news insights';
            });

        // Fetch news insight by ID
        builder
            .addCase(fetchNewsInsightById.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchNewsInsightById.fulfilled, (state, action: PayloadAction<NewsInsight>) => {
                state.status = 'succeeded';
                state.insight = action.payload; // Store single insight
                state.response = action.payload;
            })
            .addCase(fetchNewsInsightById.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.status = 'failed';
                state.error = action.payload || 'Failed to fetch news insight by ID';
            });

        // Create news insight
        builder
            .addCase(createNewsInsight.fulfilled, (state, action: PayloadAction<NewsInsight>) => {
                state.insights.push(action.payload);
                state.response = action.payload;
            })
            .addCase(createNewsInsight.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.status = 'failed';
                state.error = action.payload || 'Failed to create news insight';
            });

        // Update news insight
        builder
            .addCase(updateNewsInsight.fulfilled, (state, action: PayloadAction<NewsInsight>) => {
                const index = state.insights.findIndex((insight) => insight._id === action.payload._id);
                if (index >= 0) {
                    state.insights[index] = action.payload;
                }
                state.response = action.payload;
            })
            .addCase(updateNewsInsight.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.status = 'failed';
                state.error = action.payload || 'Failed to update news insight';
            });

        // Delete news insight
        builder
            .addCase(deleteNewsInsight.fulfilled, (state, action: PayloadAction<string>) => {
                state.insights = state.insights.filter((insight) => insight._id !== action.payload);
                state.response = action.payload;
            })
            .addCase(deleteNewsInsight.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.status = 'failed';
                state.error = action.payload || 'Failed to delete news insight';
            });

        // Delete all news insights
        builder
            .addCase(deleteAllNewsInsights.fulfilled, (state) => {
                state.insights = [];
                state.response = 'All insights deleted';
            })
            .addCase(deleteAllNewsInsights.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.status = 'failed';
                state.error = action.payload || 'Failed to delete all news insights';
            });
    },
});

export default newsInsightsSlice.reducer;
