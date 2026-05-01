const result = document.querySelector('#result')

function appendToResult(element){
    // console.log(element)
    result.value += element;
};

function clearResult(){
    result.value = ''
};
function calculateResult(){
    try {
        result.value = (eval(result.value)).toFixed(2)
    } catch (error) {
        result.value = 'error'
    }
};
