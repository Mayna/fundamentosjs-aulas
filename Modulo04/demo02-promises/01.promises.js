const { rejects } = require('assert')
const { resolve } = require('path/posix')
const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

terminal.question('qual e seu nome')

function questionAsync(texto){
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, resolve)
    })
}

let nome = ""
let telefone = ""

Promise.resolve()
.then(() => questionAsync('Qual seu nome?'))
.then(respostaNome => {
    if(!respostaNome) throw new Error('Ta sem nada fia')
    nome = respostaNome
})
.then(() => questionAsync('Qual seu telefone'))
.then(respostaTelefone => {
    if(!respostaTelefone) throw new Error('Ta sem nada fia')
    telefone = respostaTelefone
}) 

.then(() => {
    console.log(`Nome: ${nome}, Telefone: ${telefone}`)
})
.catch(error => {
    console.error('Ta sem nada fia')
})
.finally(() => terminal.close())