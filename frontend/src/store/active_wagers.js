import { updateBalance } from './session';

const LOAD_ALL = 'active_wagers/LOAD_ALL';
const CANCEL_ONE = 'active_wagers/CANCEL_ONE';

const csrfToken = document.cookie
  .split('; ')
  .find((row) => row.startsWith('XSRF-TOKEN=')) // Look for 'XSRF-TOKEN'
  ?.split('=')[1]; // Extract the token value

if (!csrfToken) {
  console.error('CSRF token not found in cookies');
}

const loadAll = (active_wagers_arr) => {
  return {
    type: LOAD_ALL,
    payload: active_wagers_arr, // Pass the array directly
  };
};

const cancelOne = (wagerId) => {
  return {
    type: CANCEL_ONE,
    payload: wagerId,
  };
};

export const cancelOneWager = (wagerId) => async (dispatch) => {
  const res = await fetch(`http://localhost:5000/api/wagers/cancel/${wagerId}`, {
    credentials: 'include', // Ensures cookies are sent with the request
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrfToken, // Include the CSRF token
    },
  });
  const data = await res.json();

  dispatch(updateBalance(data.userId));
  dispatch(cancelOne(data.wagerId));
};

export const loadAllActiveWagers = (user_id) => async (dispatch) => {
  const res = await fetch(`http://localhost:5000/api/users/active_wagers/${user_id}`, {
    method: 'GET',
    credentials: 'include', // Ensures cookies are sent with the request
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrfToken, // Include the CSRF token
    },
  });
  const data = await res.json();
  dispatch(loadAll(data.active_wagers)); // Pass only the active_wagers array
};

const initialState = [];

export default function active_wagersReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ALL:
      return action.payload; // Replace the state with the new array
    case CANCEL_ONE:
      return state.filter((active_wager) => active_wager.id !== action.payload);
    default:
      return state; // Explicitly return the previous state for unknown actions
  }
}