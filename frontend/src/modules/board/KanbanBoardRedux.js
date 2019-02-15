export const actionTypes = {
    BOB_OIL_TABLE_LOADING: "BOB_OIL_TABLE_LOADING",
    BOB_OIL_TABLE_SET_DATA: "BOB_OIL_TABLE_SET_DATA"
};

const defaultSate = {data: {}, loading: false};

export const bobOilTableReducer = (state = defaultSate, action) => {
    switch (action.type) {
        case actionTypes.BOB_OIL_TABLE_LOADING:
            return {...state, loading: action.loading};
        case actionTypes.BOB_OIL_TABLE_SET_DATA:
            return {...state, data: action.data};
        default:
            return state;
    }
};

export const bobOilTableActions = {
    setLoading,
    setData
};

function setLoading(loading) {
    return {type: actionTypes.BOB_OIL_TABLE_LOADING, loading}
}

function setData(data) {
    return {type: actionTypes.BOB_OIL_TABLE_SET_DATA, data}
}