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
          const channelReplyText = []
          if (chat.id) {
            channelReplyText.push(`Channel ID: ${chat.id}`)
          }
          if (chat.title) {
            channelReplyText.push(`Channel Title: ${chat.title}`)
          }
          if (chat.username) {
            channelReplyText.push(`Channel Username: ${chat.username}`)
          }
          await ctx.reply(channelReplyText.join('\n'))
          break

        case 'user':
          const user = forwardOrigin.sender_user
          const userReplyText = []
          if (user.id) {
            userReplyText.push(`User ID: ${user.id}`)
          }
          if (user.username) {
            userReplyText.push(`User Username: ${user.username}`)
          }
          if (user.first_name) {
            userReplyText.push(`User First Name: ${user.first_name}`)
          }
          if (user.last_name) {
            userReplyText.push(`User Last Name: ${user.last_name}`)
          }
          await ctx.reply(userReplyText.join('\n'))
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
