import OpenAI from "openai";

export async function POST(req) {
    try {
        // Get the essay from the request body
        const { essay } = await req.json();
        console.log("Essay received:", essay.slice(0, 50));

        // Make sure the key is read
        const apiKey = process.env.OPENAI_API_KEY;
        console.log("KEY INSIDE NEXT:", apiKey);

        if (!apiKey) {
            throw new Error("Missing OPENAI_API_KEY in environment variables.");
        }

        const client = new OpenAI({ apiKey });

        const response = await client.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: essay }],
        });

        return new Response(JSON.stringify(response), { status: 200 });
    } catch (err) {
        console.error("API ERROR:", err);
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
