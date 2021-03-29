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
            // console.log(userData)

            const symptomData1 = {
                pain_at_site1: document.getElementById('symptomInjectionPain1').value,
                fever1: document.getElementById('symptomFever1').value.trim(),
                fatigue1: document.getElementById('symptomFatigue1').value.trim(),
                rash1: document.getElementById('symptomRash1').value.trim(),
                joint_pain1: document.getElementById('symptomJointPain1').value.trim(),
                headache1: document.getElementById('symptomHeadache1').value.trim(),
                muscle_soreness1: document.getElementById('symptomMuscleAches1').value.trim(),
                chills1: document.getElementById('symptomChills1').value.trim(),
                nausea1: document.getElementById('symptomNausea1').value.trim(),
                swelling1: document.getElementById('symptomSwelling1').value.trim(),
                vomiting1: document.getElementById('symptomVomiting1').value.trim(),
                no_symptoms1: document.getElementById('noSymptoms1').value.trim(),
            };
            // console.log(symptomData1)
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

            const vaccineData1 = {
                vaccine_type: document.getElementById('inputVaccine').value.trim(),
                shot_one: 1,
                shot_two: 0,
                
            };

            const vaccineData2 = {
                vaccine_type: document.getElementById('inputVaccine').value.trim(),
                shot_one: 0,
                shot_two: 1,
            };
            // console.log(vaccineData)
            const newSurvey = [userData, vaccineData1, vaccineData2, symptomData1, symptomData2]
            // Send POST request
            fetch('/api/index', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                // make sure to serialize the JSON body
                body: JSON.stringify(newSurvey),
            }).then((res) => {
                alert("Thank you, your data was received")
                // console.log(res)
                window.location.replace("/statistics");
            })
        })
    }
})