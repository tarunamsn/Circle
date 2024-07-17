import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThread } from "../../types/app";
import { getThreads } from "../../lib/api/call/thread";

export const getThreadsAsync = createAsyncThunk<IThread[], void, { rejectValue: string }>(
   "thread/getThreads", async (_, { rejectWithValue }) => {
      try {
         const { data } = await getThreads();

         console.log("data", data);
         return data;
      } catch (error) {
         return rejectWithValue("error");
      }
   }
);
