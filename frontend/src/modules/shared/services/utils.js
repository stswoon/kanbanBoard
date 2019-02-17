// @flow

export const utils = {
    array: {
        lastElement: (array) => {
            if (!array || array.length === 0) {
                return null;
            }
            return array[array.length - 1];
        }
    },
    object: {
        deepCopy: (obj) => JSON.parse(JSON.stringify(obj))
    },
    string: {
        replaceAll: (str, find, replace) => {
            return str.replace(new RegExp(find, 'g'), replace);
        },
        interpolate: (str: string, params: object): string => {
            Object.keys(params).forEach((key) => {
                str = utils.string.replaceAll(str, "{" + key + "}", params.key);
            });
            return str;
        }
    }
};