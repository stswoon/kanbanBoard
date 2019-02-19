// @flow

export const utils = {
    object: {
        deepCopy: (obj) => JSON.parse(JSON.stringify(obj))
    }
};