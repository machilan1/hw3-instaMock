import { Injectable, OnInit } from '@angular/core';
import { ChatSession } from '../component-models/chat-session.model';
import{BehaviorSubject}from'rxjs'
@Injectable({ providedIn: 'root' })
export class MessengerService   {


Mocksessions: ChatSession[] = [
  {
    sessionID: '1',
    participant: ['leo369', 'official.louis'],
    messages: [
      {
        sender: 'leo369',
        content: 'Watch footy game?',
        timeStamp: '20230228',
      },
      {
        sender: 'official.louis',
        content: 'Yeah! Crazy touchdown.',
        timeStamp: '20230228',
      },
      { sender: 'leo369', content: 'Fave player?', timeStamp: '20230228' },
      {
        sender: 'official.louis',
        content: 'Jonesy. GOAT.',
        timeStamp: '20230228',
      },
      {
        sender: 'leo369',
        content: 'Nice. Next game?',
        timeStamp: '20230228',
      },
      {
        sender: 'official.louis',
        content: 'Fire. Watch together?',
        timeStamp: '20230228',
      },
      { sender: 'leo369', content: 'Yessir. Brews?', timeStamp: '20230228' },
    ],
  },
  {
    sessionID: '2',
    participant: ['leo369', 'terrisa.1994'],
    messages: [
      {
        sender: 'leo369',
        content: 'Hey, u going to the party tonight?',
        timeStamp: '20230228',
      },
      {
        sender: 'terrisa.1994',
        content: "Yeah, I'm thinking about it. U wanna go together?",
        timeStamp: '20230228',
      },
      {
        sender: 'leo369',
        content: 'For sure, that sounds lit. What time r u planning to go?',
        timeStamp: '20230228',
      },
      {
        sender: 'terrisa.1994',
        content: 'IDK, maybe around 9?',
        timeStamp: '20230228',
      },
      {
        sender: 'leo369',
        content:
          "Sounds good to me. I'll hit u up later to figure out the deets.",
        timeStamp: '20230228',
      },
      {
        sender: 'terrisa.1994',
        content: 'OK, sounds like a plan. See u later.',
        timeStamp: '20230228',
      },
    ],
  },
  {
    sessionID: '3',
    participant: ['parisam', 'terrisa.1994'],
    messages: [
      {
        sender: 'parisam',
        content: 'Hey gurl, guess what?',
        timeStamp: '20230228',
      },
      { sender: 'terrisa.1994', content: 'Wut?', timeStamp: '20230228' },
      {
        sender: 'parisam',
        content: 'I have a crush!',
        timeStamp: '20230228',
      },
      {
        sender: 'terrisa.1994',
        content: 'No way! Who dat?',
        timeStamp: '20230228',
      },
      {
        sender: 'parisam',
        content: "His name is Alex. He's so cute!",
        timeStamp: '20230228',
      },
      {
        sender: 'terrisa.1994',
        content: 'U talk 2 him yet?',
        timeStamp: '20230228',
      },
      {
        sender: 'parisam',
        content: 'Yeah, we talked a lil in class 2day.',
        timeStamp: '20230228',
      },
      {
        sender: 'terrisa.1994',
        content: "That's a good sign! Did he seem interested?",
        timeStamp: '20230228',
      },
      {
        sender: 'parisam',
        content:
          "IDK, it's hard 2 tell. But I'm gonna try 2 talk 2 him more nxt class.",
        timeStamp: '20230228',
      },
      {
        sender: 'terrisa.1994',
        content: 'Yes, gurl, go 4 it! U never kno what could happen.',
        timeStamp: '20230228',
      },
      {
        sender: 'parisam',
        content: 'What bout u? U have any crushes rn?',
        timeStamp: '20230228',
      },
      {
        sender: 'terrisa.1994',
        content:
          " Yeah, there's this guy at the gym who always makes eye contact with me.",
        timeStamp: '20230228',
      },
      {
        sender: 'parisam',
        content: "Ooh, sounds like he's into u!",
        timeStamp: '20230228',
      },
      {
        sender: 'terrisa.1994',
        content:
          "Maybe, but I don't wanna assume anything. I'll just keep working out and c what happens.",
        timeStamp: '20230228',
      },
      {
        sender: 'parisam',
        content: "That's a good plan. Keep me updated!",
        timeStamp: '20230228',
      },
      {
        sender: 'terrisa.1994',
        content: "U too! Let's hope we both get lucky with our crushes.",
        timeStamp: '20230228',
      },
    ],
  },
  {
    sessionID: '4',
    participant: ['leo369', 'tainan.jolin'],
    messages: [
      {
        sender: 'tainan.jolin',
        content: 'Which iPhone for surfing?',
        timeStamp: '20230228',
      },
      {
        sender: 'leo369',
        content: 'iPhone 13, water-resistant, great camera, storage.',
        timeStamp: '20230228',
      },
      {
        sender: 'tainan.jolin',
        content: 'Expensive?',
        timeStamp: '20230228',
      },
      {
        sender: 'leo369',
        content: 'Yes, but worth it.',
        timeStamp: '20230228',
      },
      {
        sender: 'tainan.jolin',
        content: 'Cheaper option?',
        timeStamp: '20230228',
      },
      {
        sender: 'leo369',
        content: 'iPhone 12, water-resistant, good camera, cheaper.',
        timeStamp: '20230228',
      },
      {
        sender: 'tainan.jolin',
        content: "Thanks, I'll go for the 13.",
        timeStamp: '20230228',
      },
      {
        sender: 'leo369',
        content: 'Get a good waterproof case. Have fun!',
        timeStamp: '20230228',
      },
    ],
  },

];

}
