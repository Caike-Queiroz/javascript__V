function sum(a, b) {
    const firstNumber = Number(a) // Converte os dois parâmetros para números
    const secondNumber = Number(b) // Converte os dois parâmetros para números

    if (isNaN(firstNumber) || isNaN(secondNumber)) { // Se um dos parâmetros retornar NaN, ele dá erro
        throw new Error('arguments must be two numbers')
    }

    return firstNumber + secondNumber
}

try {
    console.log(sum(2, 9))
    console.log(sum(true, 14))
    console.log(sum(undefined, 22)) // Da erro
    console.log(sum(18, "0"))
    console.log(sum(39, null)) // null considerado como 0
    console.log(sum(13, "zero")) // Da erro
} catch (error) {
    console.log("An error ocurred!")
    console.log(error.message)
} finally {
    console.log('Calculations finished.')
}