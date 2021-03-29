
document.addEventListener('DOMContentLoaded', () => {

    $("#raceSubmit").on("click", event => {
        event.preventDefault();
        raceInput = $("#inputRace").val();
        console.log("I am Eloy questions " + raceInput)
        raceValues(raceInput);
        // raceInput.val("");

    });
  


    function raceValues(race) {
        fetch(`/api/race-graph/${race}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', },
        }).then(function (raceInput) {

            return raceInput.json();
        })
            .then(function (raceInput) {
               console.log("I am in raceValues userData "+ raceInput)
              let yModerna = Object.values(raceInput[0])
              yModerna.pop()
              yModerna = yModerna.map(Number)
              console.log(yModerna)
              let yPfizer = Object.values(raceInput[1])
              yPfizer.pop()
              yPfizer = yPfizer.map(Number)
              console.log(yPfizer)
              let yjandj = Object.values(raceInput[2])
              yjandj.pop()
              yjandj = yjandj.map(Number)
              console.log(yjandj)
              drawGraph(yModerna, yPfizer, yjandj)
            })
    }

function drawGraph(yModerna, yPfizer, yjandj) {
    console.log("I'm inside draw " + yModerna)
    var trace1 = {
        x: ['Pain at Site', 'Fatigue', 'Headache', 'Muscle Soreness', 'Joint Pain', 'Nausea', 'Vomiting', 'Chills', 'Swelling', 'Rash', 'Fever', 'Severe Allergic Reaction', 'No Symptoms'],
        // Y axis needs to be a variable 
        y: yPfizer,
        type: 'bar',
        name: 'Pfizer',
        marker: {
            color: 'rgb(49,130,189)',
        }
    };
    var trace2 = {
        x: ['Pain at Site', 'Fatigue', 'Headache', 'Muscle Soreness', 'Joint Pain', 'Nausea', 'Vomiting', 'Chills', 'Swelling', 'Rash', 'Fever', 'Severe Allergic Reaction', 'No Symptoms'],
        // Y axis needs to be a variable
        y: yModerna,
        type: 'bar',
        name: 'Moderna',
        marker: {
            color: 'rgb(214,43,29)',
        }
    };
    var trace3 = {
        x: ['Pain at Site', 'Fatigue', 'Headache', 'Muscle Soreness', 'Joint Pain', 'Nausea', 'Vomiting', 'Chills', 'Swelling', 'Rash', 'Fever', 'Severe Allergic Reaction', 'No Symptoms'],
        // Y axis needs to be a variable.
        y: yjandj,
        type: 'bar',
        name: 'Johnson & Johnson',
        marker: {
            color: 'rgb(42,234,110)',
        }

    };
    var data = [trace1, trace2, trace3];

    var layout = {

        title: 'Common Symptoms By Race',
        xaxis: {
            tickangle: -25,
            color: 'rgb(3,49, 140)',
        },
        yaxis: {
            range: [1,40],
            color: 'rgb(3,49, 140)',
        },
        
        barmode: 'group'
    };

    Plotly.newPlot('myDiv', data, layout);
}

});
