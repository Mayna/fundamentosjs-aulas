let frutaExistenteNoMercado = false
let temCPUSuficiente = true

// obter valor do terminal

const args = process.argv
const saldo = args[args.lenght -1]

console.log('args', args)
console.log('saldo', saldo)

const idade = 19


//if else de forma simplificada 
const resultado = idade >= 18 ?
                           "Pode dirigir" :
                           "Nao Pode Dirigir!"
console.log ('resultado', resultado)