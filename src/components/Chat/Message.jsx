import UserMessage from './messages/UserMessage'
import AssistantMessage from './messages/AssistantMessage'

export default function Message({ role, content }) {
  return role === 'user' ? (
    <UserMessage content={content} />
  ) : (
    <AssistantMessage content={content} />
  )
}
