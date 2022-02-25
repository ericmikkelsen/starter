import zip from './zip.js'
/**
 * @param options
 * @param {string} options.username 
 * @param {string} options.project
 * @param {string} options.table
 * @param {string} options.APIKey
 * @returns {object} returns an object with query_string, fields, and data attributes, where data what you requested 
 */
const getTable = async (options) =>{
    const query_string = {"query_string":`SELECT * FROM \"${options.username}/${options.project}\".\"${options.table}\";`}
    const response = await fetch(`https://api.bit.io/api/v1beta/query/`,{
        body: JSON.stringify(query_string),
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${options.APIKey}`,
            "Accept": "application/json",
        },
        method: 'POST',
    });
    const result = await response.json();
    
    const table = result.data.map((row) => {
        const keys = Object.keys(result.fields)
        const newRow = zip(keys,row)
        return newRow
    })
    return table
}

export {getTable}