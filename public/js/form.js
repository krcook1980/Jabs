// Wait for the DOM to completely load before we run our JS
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded! 🚀');

    const submitSurvey = document.getElementById('covidSurvey');

    if (submitSurvey) {
        submitSurvey.addEventListener('submit', (e) => {
            e.preventDefault();

            // Grabs the values of the form id covidSurvey
            const newSurvey = {
                survey: document.getElementById('covidSurvey'),
            }
            console.log(newSurvey)
            // Send POST request
            fetch('/api/index', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                // make sure to serialize the JSON body
                body: JSON.stringify(newSurvey),
            }).then((response) => {
                console.log(response);
            })
        })
    }
})