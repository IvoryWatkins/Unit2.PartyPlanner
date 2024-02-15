//const state = {
//    parties: []
//}
const API_URL =  'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2401-FTB-WEB-FT'

//STATE
let parties = [{}, {} ,{}]

//RENDER
async function render() {
    parties = await getParties()

    const partiesUl = document.getElementById('parties')
    const partyLis = Parties.map((party)=> {
        const date = Date.parse(party.date)
        console.log('date.toString()', date)

        const partyLi = document.createElement('li')
        partyLi.innerHTML = `
        <h2>${party.name}<h2>
        <h2>Time: ${party.date}<h2>
        <h2>Location: ${party.location}<h2>
        <p>${party.description}<p>
        `
        const deleteButton = document.createElement('button')
        deleteButton.addEventListener('Click', () => deleteParty(party.id))
        partyLi.appendChild(deleteButton)
        //partyLi.innerText= 'one party'
        return partyLi
    })
    partiesUl.replaceChildren(...partyLis)
}
render()

//FETCH
async function getParties() {
    try {
    const response = await fetch(BASE_URL + '/events')
    const json = await response.json()
    return json.data
} catch (err) {
    console.error(err)
}
}

async function deleteParty(partyId) {
    try {
        await fetch(BASE_URL + '/events/' + partyId,)
    }
}

async function addParty(event) {
    event.preventDefault()
    const name = form.name.value
    const date = form.date.value
    const location = form.location.value
    const description = form.description.value
 
}