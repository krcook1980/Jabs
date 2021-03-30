
document.addEventListener('DOMContentLoaded', () => {
    $("#ageSubmit").on("click", event => {
        event.preventDefault();
        ageInput = $("#inputAge").val();
        console.log("I am Andrew questions " + ageInput)
        ageValues(ageInput);
        // ageInput.val("");
    });
    function ageValues(age) {
        fetch(`/api/age-graph/${age}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', },
        }).then(function (ageInput) {
            return ageInput.json();
        })
            .then(function (ageInput) {
                let ageArr = (ageInput.map(age => Object.values(age)).map(convert => convert.slice(0, convert.length-2)).map(arr => arr.map(Number)))
                console.log("I am in ageValues userData " + JSON.stringify(ageArr))
                let yModerna = (ageArr[0])
                console.log(yModerna)
                let yPfizer = (ageArr[1])
                console.log(yPfizer)
                let yjandj = (ageArr[2])
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
        var layout2 = {
            title: 'Common Symptoms By Age Group',
            xaxis: {
                tickangle: -25,
                color: 'rgb(3,49, 140)',
            },
            yaxis: {
                range: [1, 40],
                color: 'rgb(3,49, 140)',
            },
            barmode: 'group'
        };
        Plotly.newPlot('myDiv2', data, layout2);
    }
});