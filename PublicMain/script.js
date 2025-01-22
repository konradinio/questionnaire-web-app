document.getElementById('questionnaire').addEventListener('submit', function(event) {
    event.preventDefault();

    const question1 = document.getElementById('question1').value;
    const question2 = document.getElementById('question2').value;
    const question3 = document.getElementById('question3').value;

    alert(`Your answers:\n1. Name: ${question1}\n2. Age: ${question2}\n3. Favorite Color: ${question3}`);
});
