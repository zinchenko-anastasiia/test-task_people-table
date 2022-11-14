import { createStore } from 'redux';
import { Action } from '../types/Action';
import { ActionsType } from '../types/ActionsType';
import { State } from '../types/State';

const initialState: State = {
  people: [],
  selectedPerson: null,
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionsType.SET_PEOPLE:
      return {
        ...state,
        people: [...action.payload],
      };
    case ActionsType.ADD_PERSON:
      return {
        ...state,
        people: [...state.people, action.payload],
      };

      case ActionsType.SELECT_PERSON:
        return {
          ...state,
          selectedPerson: action.payload,
        }

    default:
      return state;
  }
};

export const store = createStore(reducer)