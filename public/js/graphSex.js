var trace1 = {
    x: ['Pain at injection site', 'Fatigue', 'Headache', 'Muscle Soreness', 'Joint Pain', 'Enlarged Glands', 'Nausea & Vomiting', 'Vomiting', 'Chills', 'Swelling', 'Skin Redness', 'Fever', 'No Symptoms'],
    // Y axis needs to be a variable 
    y: [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17, 10],
    type: 'bar',
    name: 'Pfizer',
    marker: {
        color: 'rgb(49,130,189)',
    }
};

var trace2 = {
    x: ['Pain at injection site', 'Fatigue', 'Headache', 'Muscle Soreness', 'Joint Pain', 'Enlarged Glands', 'Nausea & Vomiting', 'Vomiting', 'Chills', 'Swelling', 'Skin Redness', 'Fever', 'No Symptoms'],
    // Y axis needs to be a variable
    y: [19, 14, 22, 14, 16, 19, 15, 14, 10, 12, 12, 16, 5],
    type: 'bar',
    name: 'Moderna',
    marker: {
        color: 'rgb(214,43,29)',
    }
};

var trace3 = {
    x: ['Pain at injection site', 'Fatigue', 'Headache', 'Muscle Soreness', 'Joint Pain', 'Enlarged Glands', 'Nausea & Vomiting', 'Vomiting', 'Chills', 'Swelling', 'Skin Redness', 'Fever', 'No Symptoms'],
    // Y axis needs to be a variable.
    y: [19, 14, 22, 14, 16, 19, 15, 14, 10, 12, 12, 16, 10],
    type: 'bar',
    name: 'Johnson & Johnson',
    marker: {
        color: 'rgb(42,234,110)',
    }
};

var data = [trace1, trace2, trace3];

var layout3 = {
    title: 'Sex Symptoms',
    xaxis: {
        tickangle: -45
    },
    barmode: 'group'
};

Plotly.newPlot('myDiv3', data, layout3);
