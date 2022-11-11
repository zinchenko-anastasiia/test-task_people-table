import { configureStore } from '@reduxjs/toolkit';

import peopleSlice from './slices/personSlicer';

export const store = configureStore({
  reducer: {
    people: peopleSlice,
  },
});

export type TRootState = ReturnType<typeof store.getState>;
export type TRootDispatch = typeof store.dispatch;
