const counter = 0;
const reducer = (state = counter, action) => {
  if (action.type == "incr") state = state + 1;
  if (action.type == "decr") state = state - 1;
  return state;
};
export default reducer;
