document.addEventListener('DOMContentLoaded', () => {
    
    // --- Lógica do Simulador Sustentável ---
    const btnCalcular = document.getElementById('btn-calcular');
    const inputHectares = document.getElementById('hectares');
    const resultadoBox = document.getElementById('resultado');
    
    const aguaSpan = document.getElementById('agua-economizada');
    const co2Span = document.getElementById('co2-reduzido');

    // Fatores de conversão baseados em estimativas de sustentabilidade para 2026
    const LITROS_AGUA_POR_HECTARE = 12000;
    const KG_CO2_POR_HECTARE = 450;

    const calcularImpacto = () => {
        const hectares = parseFloat(inputHectares.value);

        // Validação do campo de entrada
        if (isNaN(hectares) || hectares <= 0) {
            alert('Por favor, insira um número válido de hectares.');
            resultadoBox.classList.add('hidden');
            return; // Interrompe a execução caso o valor seja inválido
        }

        // Cálculos de impacto ambiental
        const aguaEconomizada = hectares * LITROS_AGUA_POR_HECTARE;
        const co2Reduzido = hectares * KG_CO2_POR_HECTARE;

        // Atualizando a interface com os valores formatados no padrão brasileiro
        aguaSpan.textContent = aguaEconomizada.toLocaleString('pt-BR');
        co2Span.textContent = co2Reduzido.toLocaleString('pt-BR');

        // Mostra o container de resultados removendo a classe que o esconde
        resultadoBox.classList.remove('hidden');
    };

    // Ouvintes de eventos (Listeners)
    btnCalcular.addEventListener('click', calcularImpacto);

    // Opcional: Permite calcular também ao apertar a tecla "Enter" dentro do input
    inputHectares.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            calcularImpacto();
        }
    });

});
