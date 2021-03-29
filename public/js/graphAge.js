

document.addEventListener('DOMContentLoaded', () => {


    $("#age-btn").on("click", event => {
        event.preventDefault();
        ageInput = $("#ageDrop").val();
        ageInput.val("");
    });

    var trace1 = {
        x:['Pain at Site', 'Fatigue', 'Headache', 'Muscle Soreness', 'Joint Pain', 'Nausea', 'Vomiting', 'Chills', 'Swelling', 'Rash', 'Fever', 'Severe Allergic Reaction', 'No Symptoms'],
        // Y axis needs to be a variable 
        y: [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17, 10],
        type: 'bar',
        name: 'Pfizer',
        marker: {
            color: 'rgb(49,130,189)',
        }
    };

    var trace2 = {
        x:['Pain at Site', 'Fatigue', 'Headache', 'Muscle Soreness', 'Joint Pain', 'Nausea', 'Vomiting', 'Chills', 'Swelling', 'Rash', 'Fever', 'Severe Allergic Reaction', 'No Symptoms'],
        // Y axis needs to be a variable
        y: [19, 14, 22, 14, 16, 19, 15, 14, 10, 12, 12, 16, 5],
        type: 'bar',
        name: 'Moderna',
        marker: {
            color: 'rgb(214,43,29)',
        }
    };

    var trace3 = {
        x:['Pain at Site', 'Fatigue', 'Headache', 'Muscle Soreness', 'Joint Pain', 'Nausea', 'Vomiting', 'Chills', 'Swelling', 'Rash', 'Fever', 'Severe Allergic Reaction', 'No Symptoms'],
        // Y axis needs to be a variable.
        y: [19, 14, 22, 14, 16, 19, 15, 14, 10, 12, 12, 16, 10],
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
            range: [1,40],
            color: 'rgb(3,49, 140)',
        },

        barmode: 'group'
    };

    Plotly.newPlot('myDiv2', data, layout2);


});