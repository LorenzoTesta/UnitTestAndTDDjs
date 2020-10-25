
function sum (x, y) {
    return x + y
}


function sortNumbers(a) {
    return a.sort(function(x,y) {
        return x - y
    })
}


export { sum, sortNumbers }
