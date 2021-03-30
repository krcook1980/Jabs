document.addEventListener("DOMContentLoaded", () => {
  //Gender comparison button
  $("#sexButton").on("click", (event) => {
    event.preventDefault();
    sexInput = $("#inputSex").val();
    sexValues(sexInput);
  });

  //create a graph of values for sex comparison for the 3 vaccines.
  function sexValues(sex) {
    fetch(`/api/sex-graph/${sex}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(function (sexInput) {
        return sexInput.json();
      })
      .then(function (sexInput) {
        let yModerna = Object.values(sexInput[0]);
        yModerna.pop();
        yModerna = yModerna.map(Number);
        let yPfizer = Object.values(sexInput[1]);
        yPfizer.pop();
        yPfizer = yPfizer.map(Number);
        let yjandj = Object.values(sexInput[2]);
        yjandj.pop();
        yjandj = yjandj.map(Number);
        drawGraph(yModerna, yPfizer, yjandj);
      });
  }

  function drawGraph(yModerna, yPfizer, yjandj) {
    var trace1 = {
      x: [
        "Pain at Site",
        "Fatigue",
        "Headache",
        "Muscle Soreness",
        "Joint Pain",
        "Nausea",
        "Vomiting",
        "Chills",
        "Swelling",
        "Rash",
        "Fever",
        "Severe Allergic Reaction",
        "No Symptoms",
      ],
      y: yPfizer,
      type: "bar",
      name: "Pfizer",
      marker: {
        color: "rgb(49,130,189)",
      },
    };
    var trace2 = {
      x: [
        "Pain at Site",
        "Fatigue",
        "Headache",
        "Muscle Soreness",
        "Joint Pain",
        "Nausea",
        "Vomiting",
        "Chills",
        "Swelling",
        "Rash",
        "Fever",
        "Severe Allergic Reaction",
        "No Symptoms",
      ],
      y: yModerna,
      type: "bar",
      name: "Moderna",
      marker: {
        color: "rgb(214,43,29)",
      },
    };
    var trace3 = {
      x: [
        "Pain at Site",
        "Fatigue",
        "Headache",
        "Muscle Soreness",
        "Joint Pain",
        "Nausea",
        "Vomiting",
        "Chills",
        "Swelling",
        "Rash",
        "Fever",
        "Severe Allergic Reaction",
        "No Symptoms",
      ],

      y: yjandj,
      type: "bar",
      name: "Johnson & Johnson",
      marker: {
        color: "rgb(42,234,110)",
      },
    };
    var data = [trace1, trace2, trace3];

    var layout = {
      title: "Common Symptoms By Race",
      xaxis: {
        tickangle: -25,
        color: "rgb(3,49, 140)",
      },
      yaxis: {
        range: [1, 100],
        color: "rgb(3,49, 140)",
      },

      barmode: "group",
    };

    Plotly.newPlot("myDiv", data, layout);
  }
});
