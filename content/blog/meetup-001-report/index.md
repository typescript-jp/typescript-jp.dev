---
title: TypeScript Meetup \#1 Report
date: "2019-06-30T10:30:00.000+0900"
description: "How fun the first TypeScript Meetup is."
---

Hi, folks.

We, TypeScript Meetup Japan, held the first TypeScript Meetup in Tokyo at Microsoft Japan's office on June 18th, 2019.

The meetup was very exciting and over 100 TypeScript users joined the meetup!

This is an report of the meetup. If you interested in the state of the meetup, you can search [#tsjp on Twitter](https://twitter.com/search?q=%23tsjp) (almost all tweets are Japanese.)

I'll let you know about TypeScript Meetup Japan and introduce the simple summary of each talk.  

## What is TypeScript Meetup and TypeScript Meetup Japan?

In Tokyo, Japan, there are a lot of meetups about various JavaScript topics. For example [Gontanda.js](https://gotanda.js.org/), [Meguro.es](https://meguro.es/), [Angular Japan / Tokyo](https://www.meetup.com/ja-JP/ng-japan-tokyo/), [ReactJS Tokyo](https://www.meetup.com/ja-JP/ReactJS-Tokyo/), [Vue.js Japan User Group](https://vuejs-meetup.connpass.com/) and [We Are JavaScripters!](https://wajs.connpass.com/). The examples are only part of meetups, more and more meetups are held by its community.

But no meetup focused on TypeScript topics in Tokyo.
This caused 3 problems.
- Someone who has TypeScript knowledge hesitate to talk about TypeScript specific topic in JavaScript meetup.
- There are few guide to dive into depper TypeScript world from the beginners.
- There are few case studies correspond to the project's size and org that meetup attendees want to know.

Mr.Leko[leko's twitter] started planning TypeScript Meetup to solve these problems from Mar 23th, 2019. We, the staffs, got together and lauched the community TypeScript Meetup Japan to prepare the place of sharing knowledge of TypeScript.

It's lucky that we held the first meetup at Microsoft, the company invented the TypeScript.


## Table of Contents

### Opening Talk
- Speaker: Shingo Inouse aka [Leko](https://twitter.com/L_e_k_o)
- slide: TBD

The organizer leko talked about why TypeScript meetup is held and the purpose of TypeScript Meetup Japan.
Talk summery is almost the same as [What is TypeScript Meetup ](link to the above section).


### The way to get along with "type-puzzle"
- Speaker: Shingo Inouse aka [Leko](https://twitter.com/L_e_k_o)
- Slide: https://talks.leko.jp/type-puzzle-world/#0

Leko is an organizer of this meetup and Node.js collaborator.
He talked about how to get along with "type-puzzle".

TypeScript has been spread explosively since around 2016 as its features and syntax has been enhanced.
Now, TypeScript has powerful expression about types.
Types are very useful to reduce the effort of writing and reading source code.
So a lot of people write types for everything and it produced "type-puzzle".

type-puzzle means very complicated type programming by TypeScript features.

For example, like following quoted from the slide.
```typescript
type Mutable<t> = T extends Primitive
  ? T
  : T extends MutableArray<any>
    ? T
    : T extends (infer R)[]
      ? MutableArray<R>
      : T extends ConstArray<infer A>
      ? MutableArray<A>
      : T extends object ? MurableObject<T> : T;
      
interface MutableArray<T> extends Array<mutable<T>> {}

type MutableObject<T> = {
  -readonly [P in keyof T]: Mutable<T[P]>
}
```

It seems magic spell!

Why people write type-puzzle? He described 2 main reason. One is to be aware of bug by failed compile because of type incompatibility, the other is to reduce code for type inference.
He devided type definitions good and bad. Good type definition is good practices like `typeof` operator or the combination of `as const` and ReturnType. Bad one is anti patterns like too strict type by `as`.
He also showed a little difficult but useful types using Union + Mapped type.

At last, he told about his thought to remove barriers of types by this talk. 

If more people became familiar with types even commit DefinitelyTyped or repository's type definition, TypeScript will get more useful and the community will become more active.

### Moderninzing pixiv
- Speaker: Jessica Franco aka [Jessidhia](https://twitter.com/jessidhia)
- Slide: https://docs.google.com/presentation/d/e/2PACX-1vQck4DKc3GBrfDU_LJYRwuBAaRBlFTgJD2_k523Ximoi5juNRIX6TrjRF5zR4A6xQ6czlBLudgu4qHO/pub?slide=id.p

[Jessidhia] works at pixiv Inc. and she contributes to Babel, DefinitelyTyped and styled-components.
She talked about the long effort of modernizing pixiv with TypeScript.

[pixiv](https://www.pixiv.net/) is one of the biggest SNS in the world that focused on illustrations and mangas.
pixiv also has over 10 years history since the service started at 2007.
So pixiv has overcoming the transition of technology.

In mid-2015, pixiv was made of coffeescript and jquery. She challenged improving that situation step by step. For example, PhpManifestPlugin, JSDoc annotation, decaffeinating and TypeScripting. After 3 years of migration and a lot of efforts, about 90% files are typescritified🎉.

She recaped 2 points about her talk. You should be as strict as possible from the start paid off and she was fun todo all this learning through the modernizing project.

If you interested in modernizing the system, please see the slide for more details.


### Typescript Build 2019 update
- Speaker: [Kenichiro Nakamura](https://twitter.com/kenakamu108)
- Slide: https://www.slideshare.net/KenichiroNakamura/typescript-meetup-1-build-2019-update

Mr.Nakamura is Sr. Software Engineer at Microsoft. This talk was sponsor session.
He introduced some updates about TypeScript from Microsoft Build 2019 and summarized TypeScript's history.

You can watch all videos introduced in this talk on youtube. Please take a look!

His talk was easy and frinendly. The audience were often laughed at his jokes.

This was awesome talk!

### TypeScript Server Side Anatomy
- Speaker: Yosuke Kurami aka [Quramy](https://twitter.com/Quramy)
- Slide: https://quramy.github.io/tsjp-resources/#slide=1

[Quramy](https://twitter.com/Quramy) is Web front-end developer. Also he is known as the author of [tsuquyomi](https://github.com/Quramy/tsuquyomi) that is [Vim plugin for TypeScript](https://github.com/microsoft/TypeScript/wiki/TypeScript-Editor-Support).
He talked about "TypeScript editor, what's under the hood".

In the previous sesssion, Mr.Nakamura asked a question "Have you written something in TypeScript?🙋".
Almost all people raied their hands at the venue.

Quramy started his talk with a similar question, "Have you used TypeScript's language service?🙋"
There were only about 20% audience rasing their hands at the venue.

So he described about tsserver with a lot of demos and images.

You are interested in the TypeScript server, I recommend you to see the slide.

You may be surprised at how shophisticated design of tsserver.

He recaped 2 points about his talk. How awesome tsserver is and how well tsserver works even while you type only one key.


### After party

A lot of TypeScript users talked about various topics with each other, 🍕 and 🍺.

There were only about an hour, after party was very exciting.

## What's next?
TypeScript meetup #2 will be held at FiNC Technologies on July 10th.
Next speakers are [@mizchi](https://twitter.com/mizchi), [@__gfx__](https://twitter.com/__gfx__), [@takepepe](https://twitter.com/takepepe). If you are interested in, using or want to talk about TypeScript, you are welcome!

At last, we thanks to the Microsoft Japan's staffs who helped us, all the speakers and all attendees. Of course also thank for the awesome Language TypeScript and TypeScript core team members!
See you again at the next meetup.👋 
