import { READ_USERS, REQUEST_LOADING } from "./actionTypes";

const initialState = {
  characters: [],
  charactersPagination: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  },
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case READ_USERS: {
      const { charactersPagination, characters } = action.payload;

      return {
        ...state,
        charactersPagination,
        characters,
      };
    }
    case REQUEST_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
