
function rollDice() {
    var diceImages =
        ['dice/die1.png', 'dice/die2.png', 'dice/die3.png', 'dice/die4.png', 'dice/die5.png', 'dice/die6.png'];
    var diceContainer = document.getElementById('dice-container');
    var probabilityList = document.getElementById('probability-list');

    // Clear previous dice images and probability list
    diceContainer.innerHTML = '';
    probabilityList.innerHTML = '';

    // Array to store occurrences of each face
    var faceOccurrences = [0, 0, 0, 0, 0, 0];

    // Roll 12 dice
    for (var i = 0; i < 12; i++) {
        var randomIndex = Math.floor(Math.random() * diceImages.length);
        var diceImage = document.createElement('img');
        diceImage.src = diceImages[randomIndex];
        diceContainer.appendChild(diceImage);

        // Update face occurrences
        faceOccurrences[randomIndex]++;
        if ((i + 1) % 6 === 0) {
            diceContainer.appendChild(document.createElement('br'));
        }
    }

    // Calculate and display probabilities in a table
    var probabilityTable = document.getElementById('probability-list');
    for (var face = 1; face <= 6; face++) {
        var probability = (faceOccurrences[face - 1] / 12) * 100;

        // Create a new row in the table
        var row = probabilityTable.insertRow();

        // Insert cells with face and probability values
        var cellFace = row.insertCell(0);
        var cellProbability = row.insertCell(1);

        // Populate cells with values
        cellFace.innerHTML = face;
        cellProbability.innerHTML = probability.toFixed(2) + '%';
    }
}
