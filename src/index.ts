import { Telegraf } from 'telegraf'

const Main = async () => {
  const Bot = new Telegraf(process.env.BOT_TOKEN)

  Bot.launch()
}
Main()
