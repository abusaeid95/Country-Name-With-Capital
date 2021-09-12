const loadData = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayData(data))
}

const displayData = (data) =>{
       const newDiv = document.getElementById('mdiv');
       for(const unitedCites of data){
            const containerDiv = document.createElement('div');
            containerDiv.classList.add('containDiv')
            containerDiv.innerHTML = `<h1>${unitedCites.name}</h1>
                                <h3>${unitedCites.capital}
                                    <br>
                                <button onclick="loadDetails('${unitedCites.name}')">Details</button>`
        newDiv.appendChild(containerDiv);
       }
}
const loadDetails = (name) =>{

    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => conountriesDetails(data))
}
const conountriesDetails = (info) =>{
    const nameHere = document.getElementById('countryDetails');
    for(const infoDetails of info){
        nameHere.innerHTML = `
            <h1>${infoDetails.name}</h1>
            <p>Population: ${infoDetails.population}</p>
            <img src="${infoDetails.flag}">
        `
    }

    }

loadData();