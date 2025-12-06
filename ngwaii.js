console.log("code working");

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('mbotoflani');
    const images = Array.from(document.querySelectorAll('.smoke-image'));
    
    // Store the initial HTML element objects in a list
    let currentOrder = images;

    // Fisher-Yates (Knuth) Shuffle algorithm for true randomness
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        return array;
    }

    // Function to re-order the elements in the DOM
    function swapPositionsRandomly() {
        // 1. Get a new, randomized order of the image elements
        const newOrder = shuffleArray([...currentOrder]); // Create a copy and shuffle it
        
        // 2. Clear the container
        container.innerHTML = '';
        
        // 3. Append the elements back into the container in the new, random order
        newOrder.forEach(image => {
            container.appendChild(image);
        });

        // 4. Update the current order array
        currentOrder = newOrder;
    }

    // Run the swap immediately on load, then every 2 seconds
    swapPositionsRandomly();
    setInterval(swapPositionsRandomly, 2000); // Swaps positions every 2000 milliseconds (2 seconds)
});