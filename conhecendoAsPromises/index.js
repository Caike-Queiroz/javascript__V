// pendente - pending
// resolvida - resolved
// rejeitada - rejected

// const p = new Promise((resolve, reject) => {
//     console.log('A promise está sendo executada')
//     setTimeout(() => {
//         if (true) {
//             reject(false)
//         }
//         console.log('Resolvendo a promise ...');
//         resolve(true) // ela encerra a promisse com sucesso
//     }, 1000 * 2);
// })

// console.log(p)

// setTimeout(() => {
//     console.log(p)
// }, 1000 * 5)

function execute() {
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executada.')
        setTimeout(() => {
            console.log('Resolvendo a promise...')
            resolve('Resultado')
        }, 3 * 1000)
    })
}

const p = execute()

console.log(p)

setTimeout(() => {
    console.log(p)
}, 5 * 1000)