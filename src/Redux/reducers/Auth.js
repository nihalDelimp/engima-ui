

let initialState = {
    user: "",
    token: "",
    qr_code : ""
}


export default function auth(state = initialState, action) {
    switch (action.type) {
        case "USER_DATA_UPDATE":
            return { ...state, user: action.payload }
        case "SAVE_TOKEN":
            return { ...state, token: action.payload }
            case "SET_QR_CODE":
                return { ...state, qr_code: action.payload }
        case "LOGOUT":
            return { ...state, user: "", token: "" , qr_code : "" }
        default:
            return state
    }
}