//chama assim que o browser for carregado
window.onload = () => {
    console.log("Foi viu!!")
    const btn = document.getElementById('btnCalcular')
    btn.onclick = click
    function obterValorInput(id) {
        const item = document.getElementById(id)
        return item.value
    }
    function click() {
        const tipoOperacao = obterValorInput('tipoOperacao')
        const valor1 = obterValorInput('valor1')
        const valor2 = obterValorInput('valor2')
        const resultado = Matematica[tipoOperacao]( valor1, valor2)
        console.log("Resultado e", resultado) 
        document.getElementById('resultado')
        .innerText = `
        A operacao de ${tipoOperacao}, ${valor1} por ${valor2} e ${resultado}`
    }
}
