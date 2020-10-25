
import {sleep} from '../utils/demoUtils'


async function partBfn(x, y) {
    // it does stuff...
    await sleep(2000)
    return 42
}

export {partBfn}
