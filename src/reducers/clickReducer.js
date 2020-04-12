export const clickReducer = (state = { msg: '' }, action) => {
    switch(action.type){
        case '':
            return {...state, msg: 'son'};
        default:
            return state;
    }
}