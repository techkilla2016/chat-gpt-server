const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const {Configuration,OpenAIApi} = require("openai");

const port = 8080;
const config = new Configuration({
    apiKey:"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",
})

const openai = new OpenAIApi(config);

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/chat",async(req,res)=>{

    const {token,prompt} = req.body;

	if(token == "b4784706-f357-11ed-a05b-0242ac120003")
	{
	const response = await openai.createCompletion({
		model:"text-davinci-002",
		prompt:prompt,
		max_tokens:1024,
		temperature:0,
	})
	
    res.send(response.data.choices[0].text);
}else
{
	 res.send('"data":"error"');
}

})

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
})


//ideas to lauch a product digitally ?

