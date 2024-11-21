const form = document.querySelector('form');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', (event) => {
    event.preventDefault();  


    // Lógica para verificar as respostas e calcular o resultado
    // ... (implemente aqui)

    // Exemplo de como mostrar o resultado
    resultado.textContent = 'Você acertou 3 de 5 perguntas!';
});
