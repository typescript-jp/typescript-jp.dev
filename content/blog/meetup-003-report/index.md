---
title: "TypeScript Meetup #3 Report"
date: "2019-10-21T10:30:00.000+0900"
description: "How excited TypeScript Meetup #3 was."
author: sasurau4
---

# TypeScript Meetup #3 Report

Hi, folks!

We held TypeScript Meetup #3 at Merpay on on October 1st, 2019.

The meetup was also very exciting and over 100 TypeScript users joined this time!

This is an report of the meetup. If you interested in the state of the meetup, you can search [#tsjp on Twitter](https://twitter.com/search?q=%23tsjp) (almost all tweets are Japanese.)

I'll summarize the table of contents.

## Table of Contents

### Introduction

- Speakers: [Leko](https://twitter.com/) 

At first, we cheers and Leko introduced the result of survey from participants at this meetup.
[![Image from Gyazo](https://i.gyazo.com/b9a717f9fab5b2e115534375bb6639b6.png)](https://gyazo.com/b9a717f9fab5b2e115534375bb6639b6)
[![Image from Gyazo](https://i.gyazo.com/90ae334a02874bb36319acd81c1315d2.png)](https://gyazo.com/90ae334a02874bb36319acd81c1315d2)

This survey received responses from about 500 people. It's interesting result.

### Sponsor session

- Speakers: [Daiki Sugihara](https://twitter.com/naughtLdy) 
- Slide: https://drive.google.com/file/d/1HdRAzv_Mq24gTRz6WHC13sRASaF2O9Rw/view

This time of meetup was sponsored by [Merpay](https://jp.merpay.com). The speaker talked about Merpay and how they use TypeScript in production.

The speaker, Daiki Sugihara, is a frontend engineer at Marpay.
Marpay provide the payment service mainly via Mercari. There are 3 kind of services in Merpay, one is to customers, another is for partner companies and the last one is for customer supporters inside Merpay.

They use Nuxt.js with TypeScript heavily. They also adapt protocol buffers for backend development. protocol buffers is format that defines API specs for gRPC. It can generate codes for other languages such as TypeScript. They create library "@merpay/protoc-gen-jsonpb-ts" that convert proto files to TypeScript files. It is specialized for Nuxt.js (axios).

Their development process has 3 stages. First: define API specs by engineers, Second: reviewing the proto file by both perspective of frontend and backend, Third: converting proto files to TypeScript files. So mocking API can parallize frontend and backend development.

They take advandage of type safety from the combination of Nuxt.js TS, protocol buffers.

### TypeScript from the perspective of the extreme north of type safety (安全性の極北から見るTypeScript)

- Speaker: [uhyo\_](https://twitter.com/uhyo)
- Slide: https://speakerdeck.com/uhyo/an-quan-xing-falseji-bei-karajian-rutypescript

uhyo is a frontend engineer at LINE Inc. and has about 6.5 years experience of TypeScript. He is also known as the champion of contribution to TypeScript tag on [Qiita](https://qiita.com/). It was surprising that he was the first time to talk at meetups.

At first, He introduced the 2 main reason for adapting TypeScript. One is type safety and the other is development productivity.

He focused on type safety of TypeScript in his talk. He pointed out that the uniqueness of TypeScript was controllable type safety and the tradeoff about type safety and cost with showing 3 examples. He advised us to think about balance of them. How much do you pay the cost or want to be type safety.

His talk was introduction to the world of strictly obeyed to the type system of TypeScript. He emphasize that we shouldn’t lie to the type system and compiler.

He told us what broke the type safety of TypeScript. In other words, how did we lie to the type safety. He told 2 methods. One is *any* type. *any* is dangerous because it behaves like anything and is contagious. any pollutes the entire scope. The other is type cast with *as* keyword. He advised us to use them only to correct type annotation and not to use any.

Next, he talked about how to protect type safety. The principle is narrowing the scope of contamination by lies. 1: Not storing lies to variables, 2: Not annotating mismatch type in interface of function

He wrapped up his talk that we should narrow the scope of contamination with type mismatch and avoid lies to type system.

## Product development with TypeScript

- Speaker: [Taketoshi Aono](https://twitter.com/brn227)
- Slide: https://speakerdeck.com/brn/purodakutokai-fa-totypescript-657a1b05-0a19-4032-aa40-5656f1d01b63

brn227 is a web developer at Shibuya. He talked about practical tips of product development with TypeScript.

First, he pointed out the important things about TypeScript. TypeScript is NOT JavaScript but JavaScript and type annotations are removed when the code executed. He also advised us to turn on 2 options, noImplicitAny and strict.

He introduced 2 techniques about enum and null or undefined. Then, he talked that the difference of development between TypeScript and JavaScript was the order of implementation. In TypeScript, we should implement abstract concept first. In other words, we should leave from implementing concrete logics. The function interface and type alias enables us to do that. Once we define the interfaces, interfaces lead us the implementation of the detailed logics.

He also talked about the technique of migration JS to TS. He recommended that you add types to external interface such as API responses or browser storages. The reason why is TypeScript type effects nothing to runtime at all. In other words, types are possibly different written code and runtime. So the mark of unchecked types is useful when migration.

If you are interested in some other tips, please see the [slide](https://speakerdeck.com/brn/purodakutokai-fa-totypescript-657a1b05-0a19-4032-aa40-5656f1d01b63).

## The library made by TypeScript and Developer experience （TypeScript製ライブラリと開発体験）

- Speaker: [Akito0107](https://twitter.com/Akito0107)
- Slide: https://akito0107.github.io/slides/#slide=1

Akito0107 is a backend engineer. He is the author of [catacli](https://github.com/akito0107/catacli), the TypeScript-friendly commander helper.
He talked about what kind of API we can implement with using TypeScript type inference. 

He pointed out the advantage of writing libraries with TypeScript. One is for maintainers. TS makes them to develop libraries easily through providing robustness and maintainability. The other is for library users. TS makes them to use the library easily through completion of IDE.

He introduced some techniques of type inference from the experience of writing library with TypeScript. If you are interested in more details, please see the [slide](https://akito0107.github.io/slides/#slide=1)

## Annoucement

We had a exciting announcement in TypeScript Meetup #3!
We are going to hold TSConf JP 2020 in February, 22th!
https://www.tsconf.jp

The CFP is now opening and the deadline is 2019/11/30(Sat) 23:59 JST. So don’t miss it!

## Afterparty

Merpay sponsored this time of the meetup and they provided rice balls and merbeers.
[picture of rice ball]
[picture of beers]

## What’s next?
Next meetup is to be announced in the near future.

See you again at the next meetup.👋

