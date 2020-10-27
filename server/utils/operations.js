import * as _ from 'lodash'

function sum (x, y) {
    return x + y
}


function sortNumbers(a) {
    return a.sort(function(x,y) {
        return x - y
    })
}


const MIN_VALID_PAGE = 0

function isValidPage(page) {
    return !_.isNil(page) && page >= MIN_VALID_PAGE;
}

export { sum, sortNumbers, isValidPage }
