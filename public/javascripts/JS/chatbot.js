
const apiUrl = "https://api.infermedica.com/v3/";
const appId = "861c100d";
const appKey = "c675e6dae5028afe2b0dcf4ffeced1ad";

async function sendMessage() {
    const userInput = document.getElementById("prompt").value.trim();
    if (!userInput) return;
    
    displayMessage(userInput, "user");
    document.getElementById("prompt").value = "";
    
    const symptoms = await analyzeSymptoms(userInput);
    if (symptoms.length > 0) {
        const diagnosis = await getDiagnosis(symptoms);
        displayMessage(diagnosis, "ai");
    } else {
        displayMessage("I'm sorry, I couldn't recognize the symptoms. Could you rephrase?", "ai");
    }
}

async function analyzeSymptoms(text) {
    try {
        const response = await fetch(apiUrl + "parse", {
            method: "POST",
            headers: {
                "App-Id": "861c100d",
                "App-Key": "c675e6dae5028afe2b0dcf4ffeced1ad",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text, include_tokens: true })
        });
        const data = await response.json();
        console.log(data);
        return data.mentions.map(mention => ({ id: mention.id, choice_id: mention.choice_id }));
    } catch (error) {
        console.error("Error analyzing symptoms:", error);
        return [];
    }
}


async function getDiagnosis(symptoms) {
    try {
        const response = await fetch(apiUrl + "diagnosis", {
            method: "POST",
            headers: {
                "App-Id": appId,
                "App-Key": appKey,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                sex: "male", // This should be dynamic based on user input
                age: 30, // This should also be dynamic
                evidence: symptoms
            })
        });
        const data = await response.json();
        if (data.conditions.length > 0) {
            return `Possible condition: ${data.conditions[0].name}. Recommended action: ${data.conditions[0].triage_level}`;
        } else {
            return "I couldn't determine a specific condition. Please consult a doctor.";
        }
    } catch (error) {
        console.error("Error getting diagnosis:", error);
        return "There was an issue fetching diagnosis. Please try again later.";
    }
}

function displayMessage(message, sender) {
    const chatContainer = document.getElementById("chatContainer");
    const chatBox = document.createElement("div");
    chatBox.classList.add(sender === "user" ? "user-chat-box" : "ai-chat-box");
    chatBox.innerHTML = `<div class="${sender}-chat-area">${message}</div>`;
    chatContainer.appendChild(chatBox);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

document.getElementById("closeChat").addEventListener("click", () => {
    document.getElementById("chatBox").style.display = "none";
});
