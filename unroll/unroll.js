

function unroll(result) {
    let squareArray = [[1,  2,   3,  4],
                    [5,  6,   7,  8],
                    [9,  10, 11, 12],
                    [13, 14, 15, 16]];
    if (squareArray.length == 0) {
        return result;
    }
    result = result.concat(squareArray.shift());
    
    squareArray.forEach(function(rightEnd) {
        result.push(rightEnd.pop());
    });

    result = result.concat(squareArray.pop().reverse());

    let e = [];
    squareArray.forEach(function(leftEnd){
        e.push(leftEnd.shift());
    });
    result = result.concat(e.reverse());
    console.log(squareArray, result)
    return run(squareArray, result);
}
