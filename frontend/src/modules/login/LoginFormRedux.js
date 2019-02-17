export const actionTypes = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT"
};

const defaultSate = {userEmail: localStorage.getItem("userEmail")};

export const loginReducer = (state = defaultSate, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {...state, userEmail: action.userEmail};
        case actionTypes.LOGOUT:
            return {...state, userEmail: null};
        default:
            return state;
    }
};

export const loginActions = {
    login,
    logout
};

function login(userEmail) {
    localStorage.setItem("userEmail", userEmail);
    return {type: actionTypes.LOGIN, userEmail};
}

function logout() {
    localStorage.removeItem("userEmail");
    return {type: actionTypes.LOGOUT};
}