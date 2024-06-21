const API_KEY = 'EDIT_ME'; // enter your key
const URL = 'https://api.openai.com/v1/chat/completions';

function askGPT(prompt) {
  const payload = {
    model: "gpt-4o",
    messages: [
      { role: "system", content: "You are a helpful assistant. Your name is ntan GPT." },
      { role: "user", content: prompt }
    ]
  };

  const options = {
    method: 'post',
    contentType: 'application/json',
    headers: {
      Authorization: `Bearer ${API_KEY}`
    },
    payload: JSON.stringify(payload)
  };

  try {
    const response = UrlFetchApp.fetch(URL, options);
    const json = JSON.parse(response.getContentText());
    return json.choices[0].message.content.trim();
  } catch (e) {
    return `Error: ${e.message}`;
  }
}
