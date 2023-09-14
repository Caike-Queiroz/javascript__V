function execute() {
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executada.')
        if (!true) {
            reject('A promise foi rejeitada')
        } else {
            setTimeout(() => {
                console.log('Resolvendo a promise...')
                resolve(42)
            }, 3 * 1000)
        }
    })
}

// result representa o resultado da promise resolvida
execute().then((result) => {
    console.log(`A promise foi resolvida. O resultado foi: ${result}`)
}).catch((err) => {
    console.log(`A promise foi rejeitada! Motivo: ${err}`)
}).finally(() => {
    console.log('A promise foi finalizada');
})
// finally n tem parâmetro