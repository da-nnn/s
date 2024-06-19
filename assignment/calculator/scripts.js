function appendNumber(number) {
    const result = document.getElementById('result');
    result.value += number;
}

function clearResult() {
    const result = document.getElementById('result');
    result.value = '';
}

function deleteLast() {
    const result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    const result = document.getElementById('result');
    try {
        result.value = eval(result.value);
    } catch (e) {
        result.value = 'Error';
    }
}
