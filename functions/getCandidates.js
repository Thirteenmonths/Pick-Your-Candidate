const fetch = require('node-fetch');

exports.handler = async (event, context) => {
    const { zipCode } = JSON.parse(event.body);

    // Call OpenAI ChatGPT API
    const openAiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer sk-proj-0J69syL8751ySvAcb8se1Ybrg7-rL8UCqlZsyZSkPAw37DxvNuyvpC6—9945ofIXeKi0Zfg4xT3BlbkFJuoHjhSuZOvdB10l1SZhFJnG6WwVr74WYKjQVbuN6bTbfvcXZlKiehiJMyl1F8PtXOEiEyjcLwA`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: `Get political candidates info for ZIP code ${zipCode}` }]
        })
    });

    const data = await openAiResponse.json();

    return {
        statusCode: 200,
        body: JSON.stringify(data.choices[0].message.content)
    };
};
