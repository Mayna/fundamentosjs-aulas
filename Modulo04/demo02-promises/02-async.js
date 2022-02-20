const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function questionAsync(texto){
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, msg => {
            if(!msg) return reject(new Error('O campo não pode ser vazio!'))
            return resolve(msg)
        })
    })
}

async function main(){
    try {
        const nome = await questionAsync('Qual seu nome?')
        const telefone = await questionAsync ('Qual seu telefone?')

    }
    catch (error) {
        console.log('Foi nao!', error.stack)
    }
    finally {
        terminal.close()
    }
}
 main()