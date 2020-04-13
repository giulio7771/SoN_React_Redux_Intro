export const clickHelloAction = (value) => {
    console.log("click hello action");
    return {
        type: 'CLICK_HELLO',
        msg: 'asd'
    }
}