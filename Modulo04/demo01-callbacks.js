const fs = require('fs')
fs.readFile('./arq.txt', (error, resposta) => {
    if (error) {
        console.error('foi nao hein', error.stack)
        return;
    }

    console.log('reposta', resposta.toString())
    fs.watchFile('./final.txt', resposta, (errorWrite, respostaWrite)=> {
        if(errorWrite){
            return;
        }
    })
})