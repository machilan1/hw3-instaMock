import { Message } from './message.model';

export interface ChatSession {
  sessionID: string;
  participant: string[];
  messages: Message[];
}
