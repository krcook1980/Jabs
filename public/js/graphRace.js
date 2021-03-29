
document.addEventListener('DOMContentLoaded', () => {

    $("#raceSubmit").on("click", event => {
        event.preventDefault();
        raceInput = $("#inputRace").val();
        console.log("I am Eloy questions " + raceInput)
        raceValues(raceInput);
        // raceInput.val("");

    });
  }


    function raceValues(race) {
        fetch(`/api/race-graph/${race}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', },
        }).then(function (raceInput) {

            return raceInput.json();
        })
            .then(function (raceInput) {
               console.log("I am in raceValues userData "+ raceInput)
              const yModerna = Object.values(raceInput[0])
              yModerna.pop()
              console.log(yModerna)
              const yPfizer = Object.values(raceInput[1])
              yPfizer.pop()
              console.log(yPfizer)
              const yjandj = Object.values(raceInput[2])
              yjandj.pop()
              console.log(yjandj)
            }).then((yModerna, yPfizer, yjandj)=> drawGraph(yModerna, yPfizer, yjandj))
    }

function drawGraph(yModerna, yPfizer, yjandj) {
    var trace1 = {
        x: ['Pain at injection site', 'Fatigue', 'Headache', 'Muscle Soreness', 'Joint Pain', 'Enlarged Glands', 'Nausea & Vomiting', 'Vomiting', 'Chills', 'Swelling', 'Skin Redness', 'Fever', 'No Symptoms'],
        // Y axis needs to be a variable 
        y: yModerna,
        type: 'bar',
        name: 'Pfizer',
        marker: {
            color: 'rgb(49,130,189)',
        }
    };
    var trace2 = {
        x: ['Pain at injection site', 'Fatigue', 'Headache', 'Muscle Soreness', 'Joint Pain', 'Enlarged Glands', 'Nausea & Vomiting', 'Vomiting', 'Chills', 'Swelling', 'Skin Redness', 'Fever', 'No Symptoms'],
        // Y axis needs to be a variable
        y: yPfizer,
        type: 'bar',
        name: 'Moderna',
        marker: {
            color: 'rgb(214,43,29)',
        }
    };
    var trace3 = {
        x: ['Pain at injection site', 'Fatigue', 'Headache', 'Muscle Soreness', 'Joint Pain', 'Enlarged Glands', 'Nausea & Vomiting', 'Vomiting', 'Chills', 'Swelling', 'Skin Redness', 'Fever', 'No Symptoms'],
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

        title: 'Race Symptoms',
        xaxis: {
            tickangle: -45
        },
        barmode: 'group'
    };

    Plotly.newPlot('myDiv', data, layout);
}

});
