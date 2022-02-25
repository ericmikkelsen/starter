/**
 * Create an object using 2 same length arrays
 * @param {string[]|number[]} keys the keys of the object
 * @param {string[]|number[]} values the values associated with those keys
 * @link https://stackoverflow.com/questions/39127989/create-an-object-from-an-array-of-keys-and-an-array-of-values
 */

const zip = (keys, values) => {
    // this could probably use some like validation or something
    const obj = {};
    keys.forEach((key, i) => {
        obj[key] = values[i];
    });
    return obj
}
export default zip