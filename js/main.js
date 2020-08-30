function getData(){
    let season = document.querySelector("#season").value;
    let round = document.querySelector("#round").value;
    fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    .then(response => response.json())
    .then(rawData => {
        console.log(rawData)
        for(let i = 0; i < 7; i++){

        // Getting Name Data
        let givenName = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName
        let familyName = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName
        let fullName = `${givenName} ${familyName} `
        document.querySelector(`#familyName-${i}`).innerHTML=fullName;
        // Getting Nationality Data
        
        let nationality = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality
        document.querySelector(`#nationality-${i}`).innerHTML=nationality;
        // Getting Constructor Data
        let constructor = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name
        document.querySelector(`#sponsor-${i}`).innerHTML=constructor;
        // Getting Points Data
        let points = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points
        document.querySelector(`#points-${i}`).innerHTML=points;
    }
    })
}