const ResetModal2 = (reset2 = false, action) => {
    switch (action.type){
        case "OPEN_MODEL_TWO":
            return {
                ...reset2, reset2: true
            }
            case 'CLOSE_MODEL-TWO':
            return {
                ...reset2, reset2: false
            }
        default:
            return {
                ...reset2, reset2: false
            }
    }
}
export default ResetModal2;