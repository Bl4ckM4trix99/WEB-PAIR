// mega.js – Keyword Detection + Media Sending

function keywordAction(message) {
  if (message.includes("order")) {
    return "🛒 Placing order. Let me help you.";
  } else if (message.includes("refund")) {
    return "🔁 Refund process started.";
  } else {
    return "❓ Not sure what you mean.";
  }
}

function sendMedia(type) {
  const mediaLinks = {
    image: "https://example.com/image.jpg",
    pdf: "https://example.com/file.pdf",
    video: "https://example.com/video.mp4",
  };

  return mediaLinks[type] || "❌ Invalid media type.";
}

// Sample test
console.log(keywordAction("I want a refund"));
console.log(sendMedia("pdf"));

