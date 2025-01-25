let chatHistory = [];

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (!userInput) return;

    // Add the user's message to the chat history
    chatHistory.push({ sender: 'user', message: userInput });

    // Generate a bot response
    const botResponse = generateBotResponse(userInput);
    chatHistory.push({ sender: 'bot', message: botResponse });

    // Clear the input field
    document.getElementById('user-input').value = '';

    // Update the chat history in the UI
    updateChatHistory();
}

function generateBotResponse(userMessage) {
    // Simulated bot response logic (can be replaced with actual bot API)
    return `Bot Response: You said "${userMessage}"`;
}

function updateChatHistory() {
    const chatHistoryDiv = document.getElementById('chat-history');
    chatHistoryDiv.innerHTML = ''; // Clear the current chat history

    chatHistory.forEach((chat, index) => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        
        if (chat.sender === 'user') {
            messageDiv.classList.add('user-message');
        } else {
            messageDiv.classList.add('bot-message');
        }

        messageDiv.innerHTML = chat.message;
        chatHistoryDiv.appendChild(messageDiv);

        // Apply bounce effect to the latest message
        if (index === chatHistory.length - 1) {
            setTimeout(() => {
                messageDiv.classList.add('bounce');
            }, 50);
        }
    });

    // Scroll to the bottom of the chat history
    chatHistoryDiv.scrollTop = chatHistoryDiv.scrollHeight;
}

// Auto-focus the input field when the page loads
document.getElementById('user-input').focus();
