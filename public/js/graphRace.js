document.addEventListener("DOMContentLoaded", () => {
  $("#raceSubmit").on("click", (event) => {
    event.preventDefault();
    let raceInput = $("#inputRace").val();
    raceValues(raceInput);
    // raceInput.value("");
  });

  function raceValues(race) {
    fetch(`/api/race-graph/:race`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then(function (response) {
      console.log(response);
      let testVar = response.json();
      console.log(testVar);
      let yModerna = testVar.map(function () {
        console.log(parseInt(testVar[0]));
      });
      let yPfizer = testVar.map(function () {
        console.log(parseInt(testVar[1]));
      });
      let yJNJ = testVar.map(function () {
        console.log(parseInt(testVar[2]));
      });
      drawGraph(yModerna, yPfizer, yJNJ);
    });
  }

  function drawGraph(data) {
    var trace1 = {
      x: [
        "Pain at injection site",
        "Fatigue",
        "Headache",
        "Muscle Soreness",
        "Joint Pain",
        "Enlarged Glands",
        "Nausea & Vomiting",
        "Vomiting",
        "Chills",
        "Swelling",
        "Skin Redness",
        "Fever",
        "No Symptoms",
      ],
      // Y axis needs to be a variable
      y: yPfizer,
      type: "bar",
      name: "Pfizer",
      marker: {
        color: "rgb(49,130,189)",
      },
    };
    var trace2 = {
      x: [
        "Pain at injection site",
        "Fatigue",
        "Headache",
        "Muscle Soreness",
        "Joint Pain",
        "Enlarged Glands",
        "Nausea & Vomiting",
        "Vomiting",
        "Chills",
        "Swelling",
        "Skin Redness",
        "Fever",
        "No Symptoms",
      ],
      // Y axis needs to be a variable
      y: yModerna,
      type: "bar",
      name: "Moderna",
      marker: {
        color: "rgb(214,43,29)",
      },
    };
    var trace3 = {
      x: [
        "Pain at injection site",
        "Fatigue",
        "Headache",
        "Muscle Soreness",
        "Joint Pain",
        "Enlarged Glands",
        "Nausea & Vomiting",
        "Vomiting",
        "Chills",
        "Swelling",
        "Skin Redness",
        "Fever",
        "No Symptoms",
      ],
      // Y axis needs to be a variable.
      y: yJNJ,
      type: "bar",
      name: "Johnson & Johnson",
      marker: {
        color: "rgb(42,234,110)",
      },
    };
    var data = [trace1, trace2, trace3];

    var layout = {
      title: "Age Symptoms",
      xaxis: {
        tickangle: -45,
      },
      barmode: "group",
    };

    Plotly.newPlot("myDiv", data, layout);
  }
});
