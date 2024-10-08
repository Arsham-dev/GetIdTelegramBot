import { Context, Telegraf } from 'telegraf'
import { Chat, Message, Update } from 'telegraf/typings/core/types/typegram'

const handleMessage = (Bot:Telegraf<Context<Update>>) => {
  Bot.on('message', async (ctx) => {
    const message = ctx.message as Message.CommonMessage
    if (message.forward_origin) {
      const forwardOrigin = message.forward_origin
      switch (forwardOrigin.type) {
        case 'channel':
          const chat = forwardOrigin.chat as Chat.ChannelChat
          await ctx.reply(`Channel ID: ${chat.id}\nChannel Title: ${chat.title}\nChannel Username: ${chat.username}`)
          break
        case 'user':
          const user = forwardOrigin.sender_user
          await ctx.reply(`User ID: ${user.id}\nUser Username: ${user.username}\nUser First Name: ${user.first_name}\nUser Last Name: ${user.last_name}`)
          break
        case 'chat':
          const senderChat = forwardOrigin.sender_chat
          await ctx.reply(`Chat ID: ${senderChat.id}`)
          break
        case 'hidden_user':
          await ctx.reply('This message was forwarded from a user that has hidden their account')
          break
        default:
          await ctx.reply('This message was forwarded from an unknown source')
      }
    }
  })
}

export default handleMessage
