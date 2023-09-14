let transactions = []

function createTransactionContainer (id) {
    const container = document.createElement('div')
    container.classList.add('transaction')
    container.id = `transaction-${id}`
    return container
}

function createTransactionTitle(name) {
    const title = document.createElement('span')
    title.classList.add('transaction-title')
    title.textContent = name
    return title
}

function createTransactionAmount(amount) {
    const span = document.createElement('span')
    
    const formater = Intl.NumberFormat('pt-br', {
        compactDisplay: 'long',
        currency: 'BRL',
        style: 'currency'
    })
    const formatedAmount = formater.format(amount)

    if (amount > 0) {
        span.textContent = `${formatedAmount} C`
        span.classList.add('transaction-amount', 'credit')
    } else {
        span.textContent = `${formatedAmount} D`
        span.classList.add('transaction-amount', 'debit')
    }
    return span
}

function createEditTransactionBtn(transaction) {
    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-btn')
    editBtn.innerHTML = '<img src="img/pencil-square.svg" alt="pencil-square">' 
    editBtn.addEventListener('click', () => {
        document.querySelector('#id').value = transaction.id // o id do input é 'id'
        document.querySelector('#name').value = transaction.name
        document.querySelector('#amount').value = transaction.amount
    })
    return editBtn
}

function createDeleteTransactionBtn (id){
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')
    deleteBtn.innerHTML = '<img src="img/trash3.svg" alt="Trash3">'
    deleteBtn.addEventListener('click', async () => {
        await fetch(`http://localhost:3000/transactions/${id}`, { method: 'DELETE'})
        deleteBtn.parentElement.remove()
        const indexToRemove = transactions.findIndex((t) => t.id === id)
        transactions.splice(indexToRemove, 1)
        updateBalance()
    })
    return deleteBtn
}

function renderTransaction(transaction) {
    const container = createTransactionContainer(transaction.id)
    const title = createTransactionTitle(transaction.name)
    const amount = createTransactionAmount(transaction.amount)
    const editBtn = createEditTransactionBtn(transaction)
    const deleteBtn = createDeleteTransactionBtn(transaction.id)

    container.append(editBtn, deleteBtn, title, amount)
    document.querySelector('#transactions').append(container)
}

async function saveTransaction (ev) {
    ev.preventDefault()

    const id = document.querySelector('#id').value
    const name = document.querySelector('#name').value
    const amount = parseFloat(document.querySelector('#amount').value)

    if (id) {
        // atualizar a transação com esse id (já existente)
        const response = await fetch(`http://localhost:3000/transactions/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ name, amount}),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const transaction = await response.json()
        const indexToRemove = transactions.findIndex((t) => i.id === id)
        transaction.splice(indexToRemove, 1, transaction) // (indice de onde remover, qnt de elementos a remover, nova transação a ser inserida)
        document.querySelector(`transaction-${id}`).remove()
        renderTransaction()
    } else {
        // criar nova transação
        const response = await fetch('http://localhost:3000/transactions', {
            method: 'POST',
            body: JSON.stringify({name, amount}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const transaction = await response.json()
        transactions.push(transaction)
        renderTransaction(transaction)
    }
    
    ev.target.reset()
    updateBalance()
}

async function fetchTransactions() {
    return await fetch('http://localhost:3000/transactions').then(res => res.json())
}

function updateBalance() {
    const balanceSpan = document.querySelector('#balance')
    const balance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0)
    const formater = Intl.NumberFormat('pt-br', {
        compactDisplay: 'long',
        currency: 'BRL',
        style: 'currency'
    })
    balanceSpan.textContent = formater.format(balance)
}

async function setup(){
    const results = await fetchTransactions()
    transactions.push(...results)
    transactions.forEach(renderTransaction) // transaction => renderTransaction(transaction)
    updateBalance()
}

document.addEventListener('DOMContentLoaded', setup)
document.querySelector('form').addEventListener('submit', saveTransaction)

