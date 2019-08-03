const globalReducer = (state = {} , action) => {
    switch(action.type){
        case 'SHOW_USER_NAME':
            console.log(action);
        return {
            ...state,
            name: state.name = action.value
        }

        default:
            return state
    }

}

export default globalReducer;
