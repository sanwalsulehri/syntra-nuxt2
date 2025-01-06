import { ChatOpenAI } from 'langchain/chat_models/openai'

export default defineEventHandler(async (event) => {
  const { messages, newMessage } = await readBody(event)
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  return {
    response: `This is a mock AI response to: "${newMessage}"\n\nPlease set up a real AI API key for production use.`
  }
}) 