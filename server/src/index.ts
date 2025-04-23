import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { agent } from './agent'

const app = new Hono()
app.use('*', cors())

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/', async (c) => {
  const { prompt, thread_id } = await c.req.json()
  
  const result = await agent.invoke({
    messages: [
      {
        role: 'user',
        content: prompt
      }
    ]
  },{configurable:{thread_id}})
  return c.json(result.messages.at(-1)?.content)
})

export default app
