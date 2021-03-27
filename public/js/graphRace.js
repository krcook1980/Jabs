const raceInput;

$(document).ready(() => {

    $("#race-btn").on("click", event => {
        event.preventDefault();
        raceInput = $("#raceDrop").val();
        raceValues(raceInput);
        raceInput.val("");
    });

    function raceValues(race) {
        fetch(`/api/race-graph/${race}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', },
        }).then(function (response) {
            console.log(response.json());
            drawGraph(response.json());
        })
    }


    function drawGraph(data){
        var trace1 = {
            x: ['Pain at injection site', 'Fatigue', 'Headache', 'Muscle Soreness', 'Joint Pain', 'Enlarged Glands', 'Nausea & Vomiting', 'Vomiting', 'Chills', 'Swelling', 'Skin Redness', 'Fever', 'No Symptoms'],
            // Y axis needs to be a variable 
            y: data.pfizerRace,
            type: 'bar',
            name: 'Pfizer',
            marker: {
                color: 'rgb(49,130,189)',
            }
        };   
        var trace2 = {
            x: ['Pain at injection site', 'Fatigue', 'Headache', 'Muscle Soreness', 'Joint Pain', 'Enlarged Glands', 'Nausea & Vomiting', 'Vomiting', 'Chills', 'Swelling', 'Skin Redness', 'Fever', 'No Symptoms'],
            // Y axis needs to be a variable
            y: data.modernaRace,
            type: 'bar',
            name: 'Moderna',
            marker: {
                color: 'rgb(214,43,29)',
            }
        };
        var trace3 = {
            x: ['Pain at injection site', 'Fatigue', 'Headache', 'Muscle Soreness', 'Joint Pain', 'Enlarged Glands', 'Nausea & Vomiting', 'Vomiting', 'Chills', 'Swelling', 'Skin Redness', 'Fever', 'No Symptoms'],
            // Y axis needs to be a variable.
            y: data.jandjRace,
            type: 'bar',
            name: 'Johnson & Johnson',
            marker: {
                color: 'rgb(42,234,110)',
            }
        };
        var data = [trace1, trace2, trace3];

        var layout = {
            title: 'Age Symptoms',
            xaxis: {
                tickangle: -45
            },
            barmode: 'group'
        };
    
        Plotly.newPlot('myDiv', data, layout);
    }
});
