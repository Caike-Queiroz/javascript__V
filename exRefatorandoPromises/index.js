async function imc(weight, height) {
  if (typeof weight !== "number" || typeof height !== "number") {
    return Promise.reject("Arguments must be of type number")
  }
  return weight / height ** 2
}

async function showImc(weight, height) {
    try {
        console.log(`Calculando o IMC para o peso ${weight} e a altura ${height}`)
        const result = await imc(weight, height)

        setTimeout(() => {
            console.log(`O resultado do IMC foi de ${result}`)
            if (result < 18.5) console.log("Situação: MAGREZA")
            else if (result < 25) console.log("Situação: NORMAL")
            else if (result < 30) console.log("Situação: SOBREPESO")
            else if (result < 40) console.log("Situação: OBESIDADE")
            else console.log("Situação: OBESIDADE GRAVE")
        }, 1000 * 4)
    } catch (error) {
        console.log(error)
    }

}

showImc(72, 1.78)
