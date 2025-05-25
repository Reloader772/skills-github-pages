const gameText = document.getElementById("story-text");
const choicesContainer = document.getElementById("choices");

const gameScenes = {
    start: {
        text: "You're about to go on a short journey. Ready?",
        choices: [
            { text: "Yes", nextScene: "levelOne" },
            { text: "No", nextScene: "end" }
        ]
    },
    levelOne: {
        text: "You find yourself in a cozy Twitch chatroom filled with kind vibes. Fasffy is live!",
        choices: [
            { text: "Say hi in chat", nextScene: "levelTwo" },
            { text: "Lurk quietly", nextScene: "levelTwo" }
        ]
    },
    levelTwo: {
        text: "Fasffy reads your name with a smile. What do you do next?",
        choices: [
            { text: "Send a kind message", nextScene: "finalPath" },
            { text: "Drop some bits!", nextScene: "showBits" }
        ]
    },
    showBits: {
        text:  "✨ You dropped some bits! ✨\n\n . * * . * .\n * . * * . . * .\n * . ( ･ᴗ･ ) * *\n * * * /づ~ Fasffy ~づ\\\n * . * * . * . *\n\n*Ding!* (Imagine a magical sparkle sound here)",
        choices: [{ text: "Continue", nextScene: "finalPath" }]
    },
    finalPath: {
        text: "Fasffy says: \"Thank you for being here today, chat. I love you all!\"",
        choices: [
            { text: "LOVE YOU TOO!!", nextScene: "finalMessage" },
            { text: "Quietly smile and clip the moment", nextScene: "finalMessage" }
        ]
    },
    finalMessage: {
        text: "You're the best, Fasffy! You are truly an incredible woman. Me and this entire community are so grateful for you being here.\n\nJe bent de beste streamer ooit! Als community zijn we dol op je, Fasffy.\n\nThanks for playing!",
        choices: [{ text: "Restart", nextScene: "start" }]
    },
    end: {
        text: "Maybe next time. Goodbye!",
        choices: [{ text: "Restart", nextScene: "start" }]
    }
};

function loadScene(sceneKey) {
    const scene = gameScenes[sceneKey];
    gameText.innerText = scene.text;

    choicesContainer.innerHTML = "";
    scene.choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice.text;
        button.onclick = () => loadScene(choice.nextScene);
        choicesContainer.appendChild(button);
    });
}

// Start the game
loadScene("start");