/**
 * Add element to the end of array
 * @param {Array} array
 * @param {*} element
 * @returns {Array}
 */

function append(arr, element){
    if (!(arr instanceof Array)) return [];
    if (isIterable(element)) {
        return [...arr, ...element];
    } else {
        return [...arr, element];
    }
}

/**
 * Add element to the start of array
 * @param {Array} array
 * @param {*} element
 * @returns {Array}
 */

function prepend(arr, element){
    if (!(arr instanceof Array)) return [];
    if (isIterable(element)) {
        return [...element, ...arr];
    } else {
        return [element, ...arr];
    }
}

function isIterable(obj) {
    // checks for null and undefined
    if (obj == null) {
      return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
}

exports.append = append;
exports.prepend = prepend;


