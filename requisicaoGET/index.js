function createCountryCard(country){
    const card = document.createElement('div')
    card.classList.add('country')

    const countryName = country.name.common
    const name = document.createElement('h2')
    name.textContent = countryName
    
    const flag = document.createElement('img')
    flag.src = country.flags.svg
    flag.alt = countryName
    flag.title = countryName

    const capitalName = country.capital
    const cName = document.createElement('h3')
    cName.textContent = capitalName

    card.append(name, flag, cName)
    document.querySelector('#countries').append(card)
}

async function getCountries(){
    const response = await fetch('https://restcountries.com/v3.1/all')
    const countries = await response.json()

    console.log(countries)

    countries.forEach(country => createCountryCard(country)) 
    // é a mesma coisa que countries.forEach(createCountryCard)
}

getCountries()