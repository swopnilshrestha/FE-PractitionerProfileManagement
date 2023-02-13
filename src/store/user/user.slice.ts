import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from "../../types/user";
import { StoreAPIState } from "../../types/common";

export interface UserSlice extends StoreAPIState {
  currentUser: User | undefined;
}

const INITIAL_STATE: UserSlice = {
  currentUser: undefined,
  status: "pending",
  error: undefined,
};

// export const fetchCurrentUserThunk = createAsyncThunk(
//   "currentUser",
//   fetchCurrentUser
// );

// export const uploadAvatarImageThunk = createAsyncThunk(
//   "currentUser/uploadAvatarImage",
//   (file: File, { rejectWithValue }) => {
//     try {
//       return uploadAvatarImage(file);
//     } catch (err: any) {
//       rejectWithValue(err.response.data);
//     }
//   }
// );

// export const removeAvatarImageThunk = createAsyncThunk(
//   "currentUser/removeAvatarImage",
//   (_, { rejectWithValue }) => {
//     try {
//       return removeAvatarImage();
//     } catch (err: any) {
//       rejectWithValue(err.response.data);
//     }
//   }
// );

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    resetCurrentUser: (state) => {
      state.currentUser = undefined;
      state.status = "idle";
      state.error = undefined;
    },
    updateCurrentUser: (state, action: PayloadAction<User>) => {
      return {
        ...state,
        currentUser: action.payload,
      };
    },
  },
  //   extraReducers: (builder) => {
  //     builder.addCase(fetchCurrentUserThunk.pending, (state) => {
  //       state.currentUser = undefined;
  //       state.status = "pending";
  //       state.error = undefined;
  //     });
  //     builder.addCase(fetchCurrentUserThunk.fulfilled, (state, action) => {
  //       state.currentUser = action.payload;
  //       state.status = "completed";
  //       state.error = undefined;
  //       Sentry.setUser({ id: action.payload.id });
  //     });
  //     builder.addCase(fetchCurrentUserThunk.rejected, (state, action) => {
  //       state.currentUser = undefined;
  //       state.status = "failed";
  //       state.error = action.error as Error;
  //     });
  //     builder.addCase(uploadAvatarImageThunk.pending, (state) => {
  //       state.error = undefined;
  //     });
  //     builder.addCase(uploadAvatarImageThunk.fulfilled, (state, { payload }) => {
  //       if (state.currentUser) {
  //         state.currentUser.avatarUrl = payload?.avatarUrl || undefined;
  //       }
  //       state.error = undefined;
  //     });
  //     builder.addCase(uploadAvatarImageThunk.rejected, (state, action) => {
  //       state.error = action.error as Error;
  //     });
  //     builder.addCase(removeAvatarImageThunk.pending, (state) => {
  //       state.error = undefined;
  //     });
  //     builder.addCase(removeAvatarImageThunk.fulfilled, (state) => {
  //       if (state.currentUser) {
  //         state.currentUser.avatarUrl = undefined;
  //       }
  //       state.error = undefined;
  //     });
  //     builder.addCase(removeAvatarImageThunk.rejected, (state, action) => {
  //       state.error = action.error as Error;
  //     });
  //   },
});
export const { resetCurrentUser, updateCurrentUser } = userSlice.actions;
export default userSlice.reducer;
