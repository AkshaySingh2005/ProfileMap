import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { profiles } from "./data"; // Import the dummy data

interface Profile {
  id: string;
  name: string;
  location: string;
  bio: string;
  description: string;
  image: string;
}

interface ProfileState {
  profiles: Profile[];
}

const initialState: ProfileState = {
  profiles,
};

const profileSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {
    addProfile: (state, action: PayloadAction<Profile>) => {
      state.profiles.push(action.payload);
    },
    deleteProfile: (state, action: PayloadAction<string>) => {
      state.profiles = state.profiles.filter(
        (profile) => profile.id !== action.payload
      );
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      const index = state.profiles.findIndex(
        (profile) => profile.id === action.payload.id
      );
      if (index !== -1) {
        state.profiles[index] = action.payload;
      }
    },
  },
});

export const { addProfile, deleteProfile, updateProfile } =
  profileSlice.actions;

export default profileSlice.reducer;
