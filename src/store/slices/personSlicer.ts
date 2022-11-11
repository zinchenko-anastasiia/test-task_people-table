import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getPeople } from '../../Api';
import { Person } from '../../types/Person';

type PeopleState = {
  people: Person[];
  loading: boolean;
  error: string;
};

interface updatedPeopleState {
  person?: Person;
  newName?: string;
  newUsername?: string;
}

const initialState: PeopleState = {
  people: [],
  loading: false,
  error: '',
};

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<Person[]>) => {
      state.people = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    add: (state, action: PayloadAction<Person>) => {
      state.people.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      state.people = state.people.filter(
        (person) => person.id !== action.payload,
      );
    },
    update: (state, action: PayloadAction<updatedPeopleState>) => {
      const { newName, newUsername } = action.payload;
      // @ts-ignore
      state.people = [...state.people].map((person) => {
        // @ts-ignore
        if (person.id === action.payload.person.id) {
          return {
            ...person,
            name: newName,
            username: newUsername,
          };
        }
        return person;
      });
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.people = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default peopleSlice.reducer;
export const { remove, add, setLoading, update, set } = peopleSlice.actions;

export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
  return getPeople();
});
