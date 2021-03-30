
document.addEventListener('DOMContentLoaded', () => {

    //race submit button
    $("#raceSubmit").on("click", event => {
        event.preventDefault();
        raceInput = $("#inputRace").val();
        raceValues(raceInput);
    });
  

//grabs the race values and creates the graph.
    function raceValues(race) {
        fetch(`/api/race-graph/${race}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', },
        }).then(function (raceInput) {

            return raceInput.json();
        })
            .then(function (raceInput) {
              let yModerna = Object.values(raceInput[0])
              yModerna.pop()
              yModerna = yModerna.map(Number)
              let yPfizer = Object.values(raceInput[1])
              yPfizer.pop()
              yPfizer = yPfizer.map(Number)
              let yjandj = Object.values(raceInput[2])
              yjandj.pop()
              yjandj = yjandj.map(Number)
              drawGraph(yModerna, yPfizer, yjandj)
            })
    }

function drawGraph(yModerna, yPfizer, yjandj) {
    var trace1 = {
        x: ['Pain at Site', 'Fatigue', 'Headache', 'Muscle Soreness', 'Joint Pain', 'Nausea', 'Vomiting', 'Chills', 'Swelling', 'Rash', 'Fever', 'Severe Allergic Reaction', 'No Symptoms'],
        y: yPfizer,
        type: 'bar',
        name: 'Pfizer',
        marker: {
            color: 'rgb(49,130,189)',
        }
    };
    var trace2 = {
        x: ['Pain at Site', 'Fatigue', 'Headache', 'Muscle Soreness', 'Joint Pain', 'Nausea', 'Vomiting', 'Chills', 'Swelling', 'Rash', 'Fever', 'Severe Allergic Reaction', 'No Symptoms'],
        y: yModerna,
        type: 'bar',
        name: 'Moderna',
        marker: {
            color: 'rgb(214,43,29)',
        }
    };
    var trace3 = {
        x: ['Pain at Site', 'Fatigue', 'Headache', 'Muscle Soreness', 'Joint Pain', 'Nausea', 'Vomiting', 'Chills', 'Swelling', 'Rash', 'Fever', 'Severe Allergic Reaction', 'No Symptoms'],
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
