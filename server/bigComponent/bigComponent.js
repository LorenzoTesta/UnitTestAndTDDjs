import {partAfn} from './partA'
import {partBfn} from './partB'



async function getBigComponentValue(a, b, c) {
    // it does stuff ...

    let partAResult = partAfn(a, b, c)

    let partBResult = await partBfn(b, c)

    let result = partAResult + ' - '
    switch(c) {
        case 'BROWN':
            result += 1
        case 'BLACK':
            result += 33
        case 'PINK':
            result += 21
        default:
            result += 0;
    }
    return result + ' - ' + partBResult
}

export {getBigComponentValue}
