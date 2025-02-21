from fastapi import FastAPI
from pydantic import BaseModel
from transformers import pipeline
import nltk

nltk.download('punkt')
nltk.download('stopwords')

app = FastAPI()
chatbot = pipeline("text-generation", model="distilgpt2")


class UserInput(BaseModel):
    text: str


def healthcare_chatbot(user_input):
    if "symptom" in user_input:
        return "It seems like you're experiencing symptoms. Please consult a doctor for accurate advice."
    elif "appointment" in user_input:
        return "Would you like me to schedule an appointment with a doctor?"
    elif "medication" in user_input:
        return "It's important to take your prescribed medications regularly. If you have concerns, consult your doctor."
    else:
        response = chatbot(user_input, max_length=500, num_return_sequences=1)
        return response[0]['generated_text']


@app.post("/chat")
async def chat(input: UserInput):
    response = healthcare_chatbot(input.text)
    return {"response": response}
