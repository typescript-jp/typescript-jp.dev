---
title: "TypeScript Meetup #2 Report"
date: "2019-07-25T10:30:00.000+0900"
description: "How excited TypeScript Meetup #2 was."
---

# TypeScript Meetup #2 Report

Hi, folks!

We held TypeScript Meetup #2 at FiNC Technologies on on July 11th, 2019.

The meetup was also very exciting such as #1 and over 150 TypeScript users joined this time!

This is an report of the meetup. If you interested in the state of the meetup, you can search [#tsjp on Twitter](https://twitter.com/search?q=%23tsjp) (almost all tweets are Japanese.)

I'll summerize the table of contents.

## Table of Contents

### Sponsor session

- Speakers: さわださん（TODO: Twitter）, [Quramy](https://twitter.com/Quramy) from FiNC Technologies
- Slide: https://quramy.github.io/gql-ts-talk/#slide=1

This meetup was sponsored by FiNC Technologies. FiNC Technologies is a startup that focuses on the combination of health care and AI. If you interested in FiNC, please see the [website](https://company.finc.com/).

TODO: さわださんが喋った内容

Quramy talked about GraphQL and TypeScript. First, he introduced what is GraphQL. Second, he showed 3 tips of TypeScript and GraphQL client dev.

TypeScript and GraphQL both have type system but the concepts are a bit different. For example, TS has only number and GraphQL has Int and Float as number, TS do nothing at runtime and GraphQL tag parsed to AST at runtime.
So 3 tips are very useful to absorb the differences and to develop client side. If you want to know about details, please see slide.

At last, he recapped his talk that FiNC depeloped their new services with TypeScript and Graphql. They were hiring. If someone was interested in them, please apply for FiNC.


### Meta Library VS Meta Type Definitions

- Speaker: Takefumi Yoshii aka [takepepe](https://twitter.com/takepepe)
- Slide: https://speakerdeck.com/takefumiyoshii/meta-library-vs-meta-type-definitions

Takepepe is a frontend engineer and the author of [Practical TypeScript ~BFF and Type definition of Next.js & Nuxt.js](https://www.amazon.co.jp/%E5%AE%9F%E8%B7%B5TypeScript-BFF%E3%81%A8Next-js-Nuxt-js%E3%81%AE%E5%9E%8B%E5%AE%9A%E7%BE%A9-%E5%90%89%E4%BA%95-%E5%81%A5%E6%96%87/dp/483996937X/ref=sr_1_1). The book was published at 2 weeks ago, July 25th.

He talked about resolving an issue that remained at the book by TypeScript Compiler API.

Meta Library in the talk title meant [`Vuex`](https://vuex.vuejs.org/). Vuex is a state management library for Vue.js application. Vuex's store are divided by a conpet named Modules and modules are depend on file tree. As a result, getter and commit function depends on Literal reference like `"counter/setCount"`. It causes some issues of type such as fallback to `any` type in important codes, lack of check that the combination of Literal reference and payload is matched and big impact if the module name changed. Official type defs can't resolve them. He tuckled the problem.

In fact, he managed to solve them by defining a lot of types such as 45p of the slide. But this solution was not practical because it was unfriendly to depelopers and caused human errors like typo.

The main point to solve it is generate `counter/setCount` alias by TypeScript. If you use TypeScript normally, you can't. But he broke the limitation by using TypeScript Compiler API.

Here is [demo](https://vimeo.com/346283058) and [repository](https://github.com/takefumi-yoshii/vuex-definitions-mapper).

He solved the problem by the combination of compiler API and Node.js. If you want to know the details, see 53p to 83p in the slide.

His challenge of provide type inference to anyone without bothers is to be continued to [Vue Fes Japan 2019](https://vuefes.jp/2019/).

### Nondestructive TypeScript

- Speaker: Kotaro Chikuba aka [mizchi](https://twitter.com/mizchi)
- Slide: https://gist.github.com/mizchi/9e71569f72187af749adfecea49fb38a

mizchi is a developer focused on frontend and Node.js. He is also known as the early adaptor of the Virtual DOM and the author of the article ["Why does the concept of Virtual DOM excite us?](https://qiita.com/mizchi/items/4d25bc26def1719d52e6).
This article introduced the concept of Virtual DOM to Japanese developers in the end of 2014.

He talked that TypeScript became the best practice of writing JavaScript and how you will introduce TypeScript to an existed project written by JavaScript with ease.

According to the history, it was difficult to write code with Java because of strict static typing. As a result, dynamic typing languages had become popular. But static typing with autocomplete and type inference turned out to be easy and even useful as document. TypeScript chosen gradual typing system because the trend had been dynamic typings.

First, he described TypeScript was Lint tool that verified types rather than compiler. Type annotation in TypeScript has nothing todo with memory allocation and runtime behavior. Type annotation only defines interface for developers.
TypeScript compiler mainly provides 2 functions. One is static type check and the other is information for developing through language server protocol.

Next, he showed minimal `tsconfig.json` and `webpack.config.js` for introducing TypeScript to an existed project. He also introduced some tips for this such as using `any` or `@ts-ignore`.

Next, He also talked about advanced introducing TypeScript. He emppasized on *Don't modify types and logics at the same time*. You likely want to modify types and logics when a type is inferred correctly. But it takes time to check the behabior, then the unmerged pull request remains. He strongly recommended to separate issues modifing types and improving logics.

Next, he showed following anti-patterns.

- using `typeof initialState`
- too many type arguments
- too complicated type definition such as reeact-redux@connect
- too fuzzy type defs
- name space and import foo = require(...)
- using type cast instead of type refinements

At last, he empashized on *Don't modify types and logics at the same time* again. It's very import to introducing TypeScript.

### Talk battle of practical TypeScript

- Facilitator: Goro Fuji aka [\_\_gfx\_\_](https://twitter.com/__gfx__)
- Talkers: takepepe, mizchi
- Questions: https://speakerdeck.com/gfx/shi-jian-typescripttokubatoru

gfx is engineer focused on TypeScript and GraphQL. He is also known as the author of [Re-introduction of TypeScript -Transform JavaScript to "soft" static typed language with "plain TypeScript"-](https://employment.en-japan.com/engineerhub/entry/2019/04/16/103000)

He was originally planning to talk about the introduction of TypeScript to an existed project. But it was the same topic as mizchi's one. So he changed his talk to talk battle that was the time to discuss about [questions collected by Twitter](https://twitter.com/__gfx__/status/1148780487785115648?s=20).

Following questions were especially excited talks. (Sorry for no answers because no transcripts.)

Q: Should type defs be as strict as possible or not?

Q: When to use `any` intentionally such as type alias of `FIXME_any`

Q: How to persuade people who opposed the introduction of TypeScript because they thought JavaScript was enough.

### After party

A lot of TypeScript users talked about various topics with each other, 🍕 and 🍺.

I saw one group continued discussing about last session and another group talked about how to introduce TypeScript to their project in details.

There were only about an hour, after party was very exciting.

## What's next?

Next meetup is to be announced in the near future.

See you again at the next meetup.👋
