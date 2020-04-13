export const clickReducer = (state = { msg: '' }, action) => {
    switch(action.type){
        case 'CLICK_HELLO':
            console.log("click reducer");
            return {...state, msg: 'son'};
        default:
            return state;
    }
}