const {Configuration, OpenAIApi} = require("openai");

const prompt = 'Rooster sitting on a horse and drinking orange juice on the beach';

async function generateImage(prompt) {
    const openaiApiKey = 'YOR_API_KEY';

    const configuration = new Configuration({
        apiKey: openaiApiKey,
    });

    const openaiApi = new OpenAIApi(configuration);

    const data = {
        prompt: prompt,
        n: 1,
        size: '512x512'
    };

    const response = await openaiApi.createImage(data);
    const imageUrl = response;

    return imageUrl;
}

async function main() {
    const imageUrl = await generateImage(prompt);
    console.log(imageUrl?.data?.data[0]?.url);
}

main();
