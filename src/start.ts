import { Chat } from 'telegraf/typings/core/types/typegram'
import { BotType, MessageContext } from './types'

const getUserMessage = (ctx: MessageContext): string => {
  const message: string[] = []
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

const getGroupMessage = (ctx: MessageContext): string => {
  const message: string[] = []
  const chat = ctx.chat as Chat.GroupChat | Chat.SupergroupChat

  if (chat?.id) {
    message.push(`Group ID: \`${chat.id}\``)
  }
  if (chat?.title) {
    message.push(`Group Title: \`${chat.title}\``)
  }

  return message.join('\n')
}

const handleStart = (bot: BotType) => {
  bot.start(async (ctx) => {
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

    await ctx.reply(message, {
      parse_mode: 'Markdown'
    })
  })
}

export default handleStart
