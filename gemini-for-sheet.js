// Author: ntannn
const API_KEY = 'YOUR_KEY'; // enter your API key
const URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent'; //change model (1.5-flash | 1.5-pro)

function askGemini(prompt) {
  const payload = {
    contents: [
      {
        parts: [
          {text: prompt}
        ]
      }
    ],
    generationConfig: {
      temperature: 0.9, //u can change it
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    }
  };

  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload)
  };

  try {
    const response = UrlFetchApp.fetch(`${URL}?key=${API_KEY}`, options);
    const json = JSON.parse(response.getContentText());
    return json.candidates[0].content.parts[0].text.trim();
  } catch (e) {
    return `Error: ${e.message}`;
  }
}
