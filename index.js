// index.js – Main Chat Controller + Menu

function showMenu() {
  return "📍 Menu:\n1 – Products\n2 – Support\n3 – Talk to Agent";
}

function autoReply(message) {
  const replies = {
    "hi": "Hello! How can I help you?",
    "help": "Here are the things I can help you with...",
    "thanks": "You're welcome!",
  };

  return replies[message.toLowerCase()] || "Sorry, I didn’t understand that.";
}

// Sample test
console.log(showMenu());
console.log(autoReply("hi"));

