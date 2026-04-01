import { Context, Telegraf } from 'telegraf'
import { Chat, Update } from 'telegraf/typings/core/types/typegram'

const getUserMessage = (ctx: Context<Update>): string => {
  const message = []
  const chat = ctx.from

  if (chat?.id) {
    message.push(`Your ID: \`${chat.id}\``)
  }
  if (chat?.username) {
    message.push(`Your Username: \`${chat.username}\``)
  }
  if (chat?.first_name) {
    message.push(`Your First Name: \`${chat.first_name}\``)
  }
  if (chat?.last_name) {
    message.push(`Your Last Name: \`${chat.last_name}\``)
  }

  return message.join('\n')
}

const getGroupMessage = (ctx: Context<Update>): string => {
  const message = []
  const chat = ctx.chat as Chat.GroupChat | Chat.SupergroupChat

  if (chat?.id) {
    message.push(`Group ID: \`${chat.id}\``)
  }
  if (chat?.title) {
    message.push(`Group Title: \`${chat.title}\``)
  }

  return message.join('\n')
}

const handleStart = (Bot: Telegraf<Context<Update>>) => {
  Bot.start(async (ctx) => {
    await ctx.reply('Hi , Welcome to get id bot')
    let message = ''

    switch (ctx.chat.type) {
      case 'private':
        message = getUserMessage(ctx)
        break
      case 'group':
      case 'supergroup':
        message = getGroupMessage(ctx)
        break
      default:
        message = ''
    }

    await ctx.reply(message)
  })
}

export default handleStart
