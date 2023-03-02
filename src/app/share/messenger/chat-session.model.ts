import { Message } from "./message.model";

export interface ChatSession{
    sessionID:String;
    participant:String[];
    messages:Message[];
}
export class ChatSession{
    constructor(){
    }
}