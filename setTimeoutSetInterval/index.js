console.log("Programa iniciado!")

// const timeoutId = setTimeout(() => {
//     // bloco de código
//     console.log("3 segundos se passaram desde que o programa foi iniciado.");
// }, 3000); // 3000 milésimos = 3 segundos

// clearTimeout(timeoutId)

let seconds = 0
const intervalId = setInterval(() => {
    // bloco de código
    seconds += 3
    console.log(`Se passaram ${seconds} segundos.`)
    if (seconds > 10){
        clearInterval(intervalId)
        console.log("Tempo esgotado! Encerrando...");
    }
}, 1000 * 3);
