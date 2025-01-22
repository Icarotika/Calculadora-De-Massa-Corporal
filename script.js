document.getElementById('imc-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Insira a porra dos valores correspondentes ao seu peso e altura.");
        return;
    }

    // Cálculo do IMC
    const imc = weight / (height * height);

    // Determinando a categoria do IMC
    let category = '';

    if (imc < 18.5) {
        category = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        category = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        category = 'Sobrepeso';
    } else {
        category = 'Obesidade';
    }

    // Exibindo o resultado
    document.getElementById('imc-value').textContent = imc.toFixed(2);
    document.getElementById('category').textContent = category;
    document.getElementById('result').style.display = 'block';
});
