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
    },
    convert: {
        toPercentage: (data) => {
            return data < 1 ? data * 100 : data;
        },
        applyDefaults: (defaults) => {
            return (elem) => {
                let elemWithDefaults = {...elem};
                for (let key in defaults) {
                    if (defaults.hasOwnProperty(key)) {
                        let value = elem[key];
                        if (value == null || value === "") {
                            elemWithDefaults[key] = defaults[key];
                        }
                    }
                }
                return elemWithDefaults;
            }
        }
    }
};