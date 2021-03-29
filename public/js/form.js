// Wait for the DOM to completely load before we run our JS
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded! 🚀');

    const submitSurvey = document.getElementById('covidSurvey');


    if (submitSurvey) {
        submitSurvey.addEventListener('submit', (e) => {
            e.preventDefault();
            for (let checkbox of document.querySelectorAll('input[type=checkbox]')) {
                checkbox.value = checkbox.checked ? 1 : 0;
                checkbox.addEventListener('change', e => {
                    e.target.value = e.target.checked ? 1 : 0;
                });
            }
            let age1 = document.getElementById('inputAge').value.trim(),
                age = parseInt(age1)
            // Grab the values of the form 
            const userData = {
                race: document.getElementById('inputRace').value.trim(),
                sex: document.getElementById('inputSex').value.trim(),
                age: age
            };
            // console.log(userData)
            
            let pain1 = document.getElementById('symptomInjectionPain1').value
                painOne = parseInt(pain1)
                console.log("I am parse pain " + painOne)
            let fever1 = document.getElementById('symptomFever1').value.trim(),
                feverOne = parseInt(fever1)
            let fatigue1 = document.getElementById('symptomFatigue1').value.trim(),
                fatigueOne = parseInt(fatigue1)
            let rash1 = document.getElementById('symptomRash1').value.trim(),
                rashOne = parseInt(rash1)
            let joint_pain1 = document.getElementById('symptomJointPain1').value.trim(),
                joint_painOne = parseInt(joint_pain1)
            let headache1 = document.getElementById('symptomHeadache1').value.trim(),
                headacheOne = parseInt(headache1)
            let muscle_soreness1 = document.getElementById('symptomMuscleAches1').value.trim(),
                muscle_sorenessOne = parseInt(muscle_soreness1)
            let chills1 = document.getElementById('symptomChills1').value.trim(),
                chillsOne = parseInt(chills1)
            let nausea1 = document.getElementById('symptomNausea1').value.trim(),
                nauseaOne = parseInt(nausea1)
            let swelling1 = document.getElementById('symptomSwelling1').value.trim(),
                swellingOne = parseInt(swelling1)
            let vomiting1 = document.getElementById('symptomVomiting1').value.trim(),
                vomitingOne = parseInt(vomiting1)
            let no_symptoms1 = document.getElementById('noSymptoms1').value.trim(),
                no_symptomsOne = parseInt(no_symptoms1)
            let pain2 = document.getElementById('symptomInjectionPain1').value
                painTwo = parseInt(pain1)
            let fever2 = document.getElementById('symptomFever1').value.trim(),
                feverTwo = parseInt(fever2)
            let fatigue2 = document.getElementById('symptomFatigue1').value.trim(),
                fatigueTwo = parseInt(fatigue2)
            let rash2 = document.getElementById('symptomRash1').value.trim(),
                rashTwo = parseInt(rash2)
            let joint_pain2 = document.getElementById('symptomJointPain1').value.trim(),
                joint_painTwo = parseInt(joint_pain2)
            let headache2 = document.getElementById('symptomHeadache1').value.trim(),
                headacheTwo = parseInt(headache2)
            let muscle_soreness2 = document.getElementById('symptomMuscleAches1').value.trim(),
                muscle_sorenessTwo = parseInt(muscle_soreness2)
            let chills2 = document.getElementById('symptomChills1').value.trim(),
                chillsTwo = parseInt(chills2)
            let nausea2 = document.getElementById('symptomNausea1').value.trim(),
                nauseaTwo = parseInt(nausea2)
            let swelling2 = document.getElementById('symptomSwelling1').value.trim(),
                swellingTwo = parseInt(swelling2)
            let vomiting2 = document.getElementById('symptomVomiting1').value.trim(),
                vomitingTwo = parseInt(vomiting2)
            let no_symptoms2 = document.getElementById('noSymptoms1').value.trim(),
                no_symptomsTwo = parseInt(no_symptoms2)
            let severe_reaction1 = document.getElementById('symptomAllergicReaction1').value.trim(),
                severe_reactionOne = parseInt(severe_reaction1)   
            let severe_reaction2 = document.getElementById('symptomAllergicReaction1').value.trim(),
                severe_reactionTwo = parseInt(severe_reaction2) 

            const symptomData1 = {
                pain_at_site1: painOne, 
                fatigue1: fatigueOne,
                headache1: headacheOne,
                muscle_soreness1: muscle_sorenessOne,  
                joint_pain1: joint_painOne,
                nausea1: nauseaOne,
                vomiting1: vomitingOne,
                chills1: chillsOne,
                swelling1: swellingOne,
                rash1: rashOne,
                fever1: feverOne,
                severe_allergic_reaction1: severe_reactionOne,
                no_symptoms1: no_symptomsOne
            };
            // console.log(symptomData1)
            const symptomData2 = {
                pain_at_site2: painTwo, 
                fatigue2: fatigueTwo,
                headache2: headacheTwo,
                muscle_soreness2: muscle_sorenessTwo,  
                joint_pain2: joint_painTwo,
                nausea2: nauseaTwo,
                vomiting2: vomitingTwo,
                chills2: chillsTwo,
                swelling2: swellingTwo,
                rash2: rashTwo,
                fever2: feverTwo,
                severe_allergic_reaction2: severe_reactionTwo,
                no_symptoms2: no_symptomsTwo
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

                window.location.replace('/statistics');

            })
        })
    }
})