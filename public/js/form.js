// Wait for the DOM to completely load before we run our JS
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded! 🚀');

    const submitSurvey = document.getElementById('covidSurvey');

    if (submitSurvey) {
        submitSurvey.addEventListener('submit', (e) => {
            e.preventDefault();

            // Grab the values of the form 
            const userData = {
                race: document.getElementById('inputRace').value.trim(),
                sex: document.getElementById('inputSex').value.trim(),
                age: document.getElementById('inputAge').value.trim(),
            };
            console.log(userData)

            const symptomData1 = {
                pain_at_site: document.getElementById('symptomInjectionPain1').value,
                fever: document.getElementById('symptomFever1').value.trim(),
                fatigue: document.getElementById('symptomFatigue1').value.trim(),
                rash: document.getElementById('symptomRash1').value.trim(),
                joint_pain: document.getElementById('symptomJointPain1').value.trim(),
                headache: document.getElementById('symptomHeadache1').value.trim(),
                muscle_soreness: document.getElementById('symptomMuscleAches1').value.trim(),
                chills: document.getElementById('symptomChills1').value.trim(),
                nausea: document.getElementById('symptomNausea1').value.trim(),
                swelling: document.getElementById('symptomSwelling1').value.trim(),
                vomiting: document.getElementById('symptomVomiting1').value.trim(),
                no_symptoms: document.getElementById('noSymptoms1').value.trim(),
            };
            console.log(symptomData1)
            const symptomData2 = {
                pain_at_site2: document.getElementById('symptomInjectionPain2').value,
                fever2: document.getElementById('symptomFever2').value.trim(),
                fatigue2: document.getElementById('symptomFatigue2').value.trim(),
                rash2: document.getElementById('symptomRash2').value.trim(),
                joint_pain2: document.getElementById('symptomJointPain2').value.trim(),
                headache2: document.getElementById('symptomHeadache2').value.trim(),
                muscle_soreness2: document.getElementById('symptomMuscleAches2').value.trim(),
                chills2: document.getElementById('symptomChills2').value.trim(),
                nausea2: document.getElementById('symptomNausea2').value.trim(),
                swelling2: document.getElementById('symptomSwelling2').value.trim(),
                vomiting2: document.getElementById('symptomVomiting2').value.trim(),
                no_symptoms2: document.getElementById('noSymptoms2').value.trim(),
            };
            console.log(symptomData2)

            const vaccineData = {
                vaccine_type: document.getElementById('inputVaccine').value.trim(),
                shot_one: document.getElementById('inputFirstDose').value.trim(),
                shot_two: document.getElementById('inputSecondDose').value.trim(),
            };
            console.log(vaccineData)

            const newSurvey = [userData, vaccineData, symptomData1, symptomData2]

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
                alert('Your survey has been submitted.');
                window.location.replace('/statistics');
            })
        })
    }
})