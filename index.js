// code your solution here
// Initialize the game record data
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    // Add more years as needed
];

// Function to find the year of Superbowl win for the Denver Broncos
function superbowlWin(record) {
    const winningGame = record.find(game => game.result === "W");
    return winningGame ? winningGame.year : undefined;
}

// Example usage
console.log(superbowlWin(record)); // Output: "2015"
