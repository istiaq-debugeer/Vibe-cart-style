// src/lib/videoSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  image: string;
  discount?: string;
};

export type Video = {
  id: string;
  title: string;
  seller: { name: string; avatar: string };
  videoUrl?: string;
  thumbnailUrl: string;
  description?: string;
  products: Product[];
  hashtags?: string[];
  likes?: number;
  comments?: number;
  isLive?: boolean;
};

// Async API call  
export const fetchVideoById = createAsyncThunk(
  "video/fetchById",
  async (id: string) => {
    // Replace with real API later
    const res = await fetch(`/api/videos/${id}`);
    return (await res.json()) as Video;
  }
);

const videoSlice = createSlice({
  name: "video",
  initialState: {
    current: null as Video | null,
    loading: false,
    error: null as string | null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchVideoById.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchVideoById.fulfilled, (state, action) => {
      state.current = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchVideoById.rejected, (state) => {
      state.loading = false;
      state.error = "Failed to load video";
    });
  },
});

export default videoSlice.reducer;
