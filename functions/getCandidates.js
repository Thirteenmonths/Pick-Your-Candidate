const fetch = require('node-fetch');

exports.handler = async (event, context) => {
    const { zipCode } = JSON.parse(event.body || '{}');

    if (!zipCode) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'ZIP code is required' }),
        };
    }

    try {
        // Simulating the OpenAI API call (replace with your actual API call)
        const data = { candidates: "Sample candidate data for ZIP code " + zipCode };

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Something went wrong' }),
        };
    }
};
