export const wrapArray = object => Array.isArray(object) ? object : [object]
export const compactArray = arr => arr.filter(el => el)