import { withoutAuthAxios} from "../../Config/axios"
export const login = data => async _dispatch => {
    return new Promise(async (resolve, reject) => {
        await withoutAuthAxios().post("/auth/login", data)
            .then(
                response => {
                    resolve(response.data)
                    _dispatch({ type: "USER_DATA_UPDATE", payload: response.data.data.user });
                    _dispatch({ type: "SET_QR_CODE", payload: response.data.data.qr_code });
                    _dispatch({ type: "SAVE_TOKEN", payload: response.data.data.token ? response.data.data.token : null });
                },
                error => {
                    reject(error)
                }
            )
            .catch(
                error => {
                    console.log(error);
                }
            )
    })
}

export const LogOut = () => _dispatch => {
    return (
        _dispatch({ type: "LOGOUT" })
    )
}
