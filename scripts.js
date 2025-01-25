let chatHistory = [];

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (!userInput) return;
    chatHistory.push({ sender: 'user', message: userInput });
    const botResponse = generateBotResponse(userInput);
    chatHistory.push({ sender: 'bot', message: botResponse }
    document.getElementById('user-input').value = '';
    updateChatHistory();
}

function generateBotResponse(userMessage) {
    return `Bot Response: You said "${userMessage}"`;
}

function updateChatHistory() {
    const chatHistoryDiv = document.getElementById('chat-history');
    chatHistoryDiv.innerHTML = ''; 

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
        if (index === chatHistory.length - 1) {
            setTimeout(() => {
                messageDiv.classList.add('bounce');
            }, 50);
        }
    });
    chatHistoryDiv.scrollTop = chatHistoryDiv.scrollHeight;
}

document.getElementById('user-input').focus();
