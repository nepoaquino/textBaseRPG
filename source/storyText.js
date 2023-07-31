let storyIndex = 0;
let animationInProgress = false;
const stories = [
  "You stand at the edge of the Haunted Forest, lured by tales of malevolent spirits and hidden treasures. ",
  // Add more stories here for future replacements
  "With sword in hand, you step into the eerie woods, determined to explore its secrets. Deeper inside, a growl pierces the silence, and a monstrous creature appears before you.",
  "What will you do?",
];

// Call the typing effect function on page load and Delay the execution of the function by 2 seconds (2000 milliseconds)
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(changeStoryAndRestartTyping, 1000);
});

// Function to create the typing effect
function typeEffect(element, text, delay, callback) {
  let index = 0;
  const intervalId = setInterval(() => {
    // Show the storySelection div after the typing animation finishes
    if (storyIndex === stories.length - 1) {
      const storySelectionElement =
        document.getElementById("storySelection");
      storySelectionElement.style.display = "block";
    }
    if (index < text.length) {
      // Use innerHTML instead of textContent
      element.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(intervalId);
      animationInProgress = false; // Set the flag to indicate animation is finished
      callback(); // Call the callback function once the animation is finished
    }
  }, delay);
  return intervalId;
}

// Function to change the story and restart the typing effect
function changeStoryAndRestartTyping() {
  if (!animationInProgress && storyIndex < stories.length) {
    const storyTitleElement = document.getElementById("gameStory");
    const currentStory = stories[storyIndex];
    const typingDelay = 20; // Adjust the delay in milliseconds (controls typing speed)
    animationInProgress = true; // Set the flag to indicate animation is in progress
    typeEffect(storyTitleElement, currentStory, typingDelay, function () {
      // After animation is finished, increment the index for the next story
      storyIndex++;
      // Check if the storyIndex has reached the end of the stories array
   
        // Append a line break after each story paragraph
        storyTitleElement.innerHTML += "<br><br>"; // Use double line breaks for spacing
        animationInProgress = false; // Reset the flag when animation is done
        // Start the next story after a short delay
        setTimeout(changeStoryAndRestartTyping, 1000); // Wait for 1000 milliseconds (1 second) before starting the next story
      
    });
  }
}