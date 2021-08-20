function onSearch() {
    let searchInput = document.getElementById("searchBox")
    let results = document.getElementById("results")
    console.log("Search button pressed, searching for " + searchInput.value)
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + searchInput.value)
        .then(response => response.json())
        .then(json => {
            //let def = json[0]
            for (let def of json) {
                let mean = def.meanings[0]
                let meanDef = mean.definitions[0]

                let outputHTML = `
                    <h2>${def.word}</h2>
                    <p><b>Meaning:</b> ${meanDef.definition}</p>
                    <p><b>Example:</b> ${meanDef.example}</p>
                `
                results.innerHTML += outputHTML
            }
        })
}

function toggleSearch() {
    let fullSearchElement = document.getElementById("fullSearchElement")
    let searchBox = document.getElementById("searchBox")
    if (fullSearchElement.hidden) {
        fullSearchElement.removeAttribute('hidden')
    } else {
        fullSearchElement.setAttribute('hidden', 'true')
        searchBox.value=""
    }
}