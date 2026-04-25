import { Context, Telegraf } from 'telegraf'
import { Message, Update } from 'telegraf/typings/core/types/typegram'

export type BotType = Telegraf<Context<Update>>
export type MessageContext = Context<{
  message: Update.New & Update.NonChannel & Message
  update_id: number
}> &
  Omit<Context<Update>, keyof Context<Update>>
