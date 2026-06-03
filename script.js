document.addEventListener('DOMContentLoaded', () => {
    
    // --- Lógica do Simulador Sustentável ---
    const btnCalcular = document.getElementById('btn-calcular');
    const inputHectares = document.getElementById('hectares');
    const resultadoBox = document.getElementById('resultado');
    
    const aguaSpan = document.getElementById('agua-economizada');
    const co2Span = document.getElementById('co2-reduzido');

    // Fatores de conversão (boas práticas: centralizar constantes fora da função)
    const LITROS_AGUA_POR_HECTARE = 12000;
    const KG_CO2_POR_HECTARE = 450;

    const calcularImpacto = () => {
        const hectares = parseFloat(inputHectares.value);

        if (isNaN(hectares) || hectares <= 0) {
            alert('Por favor, insira um número válido de hectares.');
            resultadoBox.classList.add('hidden');
