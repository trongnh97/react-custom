import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "constants/server";

export const fetchPhotos = createAsyncThunk('photo/fetchPhoto', async (body: any, thunkAPI) => {
    const response = await fetch(`${BASE_URL}?_page=${body.page}&limit=${body.limit}`);
    const data = await response.json();
    return data;
});

const initialState = {
    photos: [],
    name: "",
};

const photoSlice = createSlice({
    name: "photo",
    initialState: initialState,
    reducers: {
        setName(state, action) {
            state.name = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchPhotos.fulfilled, (state, action) => {
            state.photos = action.payload;
        });
    },
});

export const { setName } = photoSlice.actions;
export default photoSlice.reducer;
