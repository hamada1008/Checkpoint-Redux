const ToggleReducer2 = (state = false , action) => {
        switch (action.type) {
    case "TOGGLE2" : return !state;
    default : return state;
}
};
export default ToggleReducer2