const Reset = (reset = false, action) => {
    switch (action.type) {
        case 'FALSE':
            return {
                ...reset, reset: true
            }
        case 'ANOTHER_ACTION' && 'RESET THE COUNT':
            return {
                ...reset, reset: false
            }
        default:
            return {
                ...reset, reset: false
            }
    }
}
export default Reset;