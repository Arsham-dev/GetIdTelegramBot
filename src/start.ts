import { Context, Telegraf } from 'telegraf'
import { Update } from 'telegraf/typings/core/types/typegram'

const handleStart = (Bot:Telegraf<Context<Update>>) => {
  Bot.start(async (ctx) => {
    await ctx.reply('Hi , Welcome to get id bot')
    await ctx.reply(`Your ID is: ${ctx.from?.id}\nYour Username is: ${ctx.from?.username}\nYour First Name is: ${ctx.from?.first_name}\nYour Last Name is: ${ctx.from?.last_name}`)
  })
}

export default handleStart
