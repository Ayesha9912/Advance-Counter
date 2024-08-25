
const Reducers = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            if (state <= 1) {
                return state = 0
            }
            return state - 1
        case 'RESET THE COUNT':
            return state = 0
        case 'SETTING':
            return state = action.payload
        default:
            return state
    }
}
export default Reducers