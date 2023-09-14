function imc(weight, height) {
    return new Promise((resolve, reject) => {
        if (typeof weight !== 'number' || typeof height !== 'number') {
            reject('Arguments must be of type number')
        } else {
            resolve(weight / (height ** 2))
        }
    })
}

function showImc(weight, height) {
    imc(weight, height).then((result) => {
        
        setTimeout(() => {
            console.log(`O resultado do IMC foi de ${result}`);
            if (result < 18.5) console.log('Situação: MAGREZA')
            else if (result < 25) console.log('Situação: NORMAL')
            else if (result < 30) console.log('Situação: SOBREPESO')
            else if (result < 40) console.log('Situação: OBESIDADE')
            else console.log('Situação: OBESIDADE GRAVE')
        }, 1000 * 4)
    }).catch((err) => {
        console.log(err)
    })

    console.log(`Calculando o IMC para o peso ${weight} e a altura ${height}`)
}

showImc(72, 1.78)
