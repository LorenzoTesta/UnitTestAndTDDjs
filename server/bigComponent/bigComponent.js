import {partAfn} from './partA'
import {partBfn} from './partB'



async function getBigComponentValue(a, b, c) {
    // it does stuff ...

    let partAResult = partAfn(a, b, c)

    let partBResult = await partBfn(b, c)

    switch(c) {
        case 'BROWN':
            return 1
        case 'BLACK':
            return 33
        case 'PINK':
            return 21
        default:
            return 0;
    }
}

export {getBigComponentValue}
