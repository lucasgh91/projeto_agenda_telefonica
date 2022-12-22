const form = document.querySelector('form')
let listas = ''

form.addEventListener('submit', (e) => {
    e.preventDefault();
    criaLinha();
    atualizaTabela();
})

function criaLinha() {
    const inputNomeContato = document.getElementById('nomeContato')
    const inputTelContato = document.getElementById('telContato')

    let lista = '<tr>'
    lista += `<td>${inputNomeContato.value}</td>`
    lista += `<td>${inputTelContato.value}</td>`
    lista += '</tr>'

    listas += lista

    inputNomeContato.value = ''
    inputTelContato.value = ''
}

function atualizaTabela() {
    const tbody = document.querySelector('tbody')
    tbody.innerHTML = listas;
}