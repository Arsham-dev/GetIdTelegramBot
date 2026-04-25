import { config } from 'dotenv'
import { Telegraf } from 'telegraf'
import handleStart from './start'
import handleMessage from './message'

config()

const Main = async () => {
  const bot = new Telegraf(process.env.BOT_TOKEN!)
  handleStart(bot)
  handleMessage(bot)
  bot.launch()
}
Main()
