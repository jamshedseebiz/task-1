
function add5(x) {
    return x + 5;
}

function multiplyBy3(x) {
    return x * 3;
}


function compose(func1, func2) {
    return function(value) {
        return func2(func1(value)); 
    };
}


const addAndMultiply = compose(add5, multiplyBy3);


console.log(addAndMultiply(10)); 
