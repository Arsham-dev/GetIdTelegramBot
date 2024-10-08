import { config } from 'dotenv'
import { Telegraf } from 'telegraf'
import handleStart from './start'
import handleMessage from './message'

config()

const Main = async () => {
  const Bot = new Telegraf(process.env.BOT_TOKEN)
  handleStart(Bot)
  handleMessage(Bot)
  Bot.launch()
}
Main()
