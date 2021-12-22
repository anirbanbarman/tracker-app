import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import * as RootNavigation from "../navigationRef"


const authReducer = (state, action) => {
    switch (action.type) {
        case "arr_error":
            return { ...state, errorMessage: action.payload }

        case "signup":
            return { errorMessage: "", token: action.payload }

        case "signin":
            return { errorMessage: "", token: action.payload }

        case "clear_error_message":
            return { ...state, errorMessage: "" }
        case "signout":
            return { token: null, errorMessage: "" }



        default:
            return state;

    }


}



const signup = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post("/signup", { email, password });
            await AsyncStorage.setItem("token", response.data.token);
            dispatch({ type: "signin", payload: response.data.token });
            RootNavigation.navigate("mainFlow")

        } catch (error) {
            dispatch({ type: "arr_error", payload: error.response.data })

        }


    }
}
const signin = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post("/signin", { email, password });
        await AsyncStorage.setItem("token", response.data.token);
        dispatch({ type: "signup", payload: response.data.token });
        RootNavigation.navigate("mainFlow")

    } catch (error) {
        dispatch({ type: "arr_error", payload: error.response.data })

    }
}

const signout = (dispatch) => {
    return async () => {

        await AsyncStorage.removeItem("token");
        dispatch({ type: "signout" })
        RootNavigation.navigate("Signin")

    }
}

const clearErrorMessage = (dispatch) => {
    return () => {
        dispatch({ type: "clear_error_message" })
    }
}
const tryLocalSignin = (dispatch) => async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
        dispatch({ type: "signin", payload: token });
        RootNavigation.navigate("mainFlow")
    }
    else {
        RootNavigation.navigate("Signup")
    }

}


export const { Context, Provider } = createDataContext(
    authReducer,
    { signin, signup, signout, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: "" }
);