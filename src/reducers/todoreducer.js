const initState = {
  todo: [],
  filter: "",
};
const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, todo: [...state.todo, action.payload] };
    case "FILTER":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default todoReducer;
