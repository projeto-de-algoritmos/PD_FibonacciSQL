function fibonacci(n) {
    const fibArray = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
    return fibArray[n];
}

function calcular() {
    const indexInput = document.getElementById('index');
    const resultParagraph = document.getElementById('result');

    const id = parseInt(indexInput.value);

    if (!isNaN(id) && id >= 0) {
        const fibonacciResult = fibonacci(id);
        resultParagraph.textContent = `Fibonacci(${id}) = ${fibonacciResult}`;
    } else {
        resultParagraph.textContent = 'Insira um número inteiro não negativo.';
    }
}
