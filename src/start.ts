import { Context, Telegraf } from 'telegraf'
import { Update } from 'telegraf/typings/core/types/typegram'

const handleStart = (Bot:Telegraf<Context<Update>>) => {
  Bot.start(async (ctx) => {
    await ctx.reply('Hi , Welcome to get id bot')
    const message = []
    if (ctx.from?.id) {
      message.push(`Your ID: ${ctx.from.id}`)
    }
    if (ctx.from?.username) {
      message.push(`Your Username: ${ctx.from.username}`)
    }
    if (ctx.from?.first_name) {
      message.push(`Your First Name: ${ctx.from.first_name}`)
    }
    if (ctx.from?.last_name) {
      message.push(`Your Last Name: ${ctx.from.last_name}`)
    }
    await ctx.reply(message.join('\n'))
  })
}

export default handleStart
