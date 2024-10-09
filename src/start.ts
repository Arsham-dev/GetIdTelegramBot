import { Context, Telegraf } from 'telegraf'
import { Update } from 'telegraf/typings/core/types/typegram'

const handleStart = (Bot:Telegraf<Context<Update>>) => {
  Bot.start(async (ctx) => {
    await ctx.reply('Hi , Welcome to get id bot')
    const message = []
    const chat = ctx.from

    if (chat?.id) {
      message.push(`Your ID: ${chat.id}`)
    }
    if (chat?.username) {
      message.push(`Your Username: ${chat.username}`)
    }
    if (chat?.first_name) {
      message.push(`Your First Name: ${chat.first_name}`)
    }
    if (chat?.last_name) {
      message.push(`Your Last Name: ${chat.last_name}`)
    }

    await ctx.reply(message.join('\n'))
  })
}

export default handleStart
