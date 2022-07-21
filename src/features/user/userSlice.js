const initialState = {
  user: "",
  status: "idle",
};

const userSliceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'user':
      return {
        ...state,
        user: action.data
      }
    case 'loading':
      return { ...state, status: action.data }
    default:
      return state
  }
}

export default userSliceReducer



