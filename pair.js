// pair.js – OTP, Payment, Webhook, CRM, Reminder, Multi-language

function sendOTP(phoneNumber) {
  const otp = Math.floor(100000 + Math.random() * 900000);
  return `✅ OTP sent to ${phoneNumber}: ${otp}`;
}

function initiatePayment(amount) {
  return `💳 Pay ${amount} at: https://payment-gateway.com/checkout`;
}

function sendWebhook(data) {
  fetch("https://yourserver.com/webhook", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

function saveToCRM(user, message) {
  const crmData = { user, message, timestamp: new Date() };
  console.log("Saved to CRM:", crmData);
}

function setReminder(user, time, task) {
  return `⏰ Reminder set for ${user} at ${time} to ${task}`;
}

function translate(message, lang = "en") {
  const translations = {
    "hello": { en: "Hello", si: "හෙලෝ" },
    "thanks": { en: "Thank you", si: "ස්තුතියි" },
  };
  return translations[message]?.[lang] || message;
}

// Sample test
console.log(sendOTP("+94771234567"));
console.log(initiatePayment("1000 LKR"));
console.log(setReminder("User1", "5pm", "Send Report"));
console.log(translate("thanks", "si"));
