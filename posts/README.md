---
title: "当サイトのりどみ"
date: "2021-04-18"
---

## React(Next.js) + TypeScriptで作られたBlog

当ブログの公開場所：[tsx-sard-blog](https://tsx-sard-blog.netlify.app/)
開発URL：<http://localhost:3000/>

## 作成目的

* Vue(Nuxt.js) + TailWindCSSによるブログを以前作成したので次はReactを学ぶ。
* Reactの仕様、TypeScriptの静的型付けについての理解を深める。

## 予定

* 記事そのもの
* Reactでブログ内サーチ機能やカテゴリー別、人気記事などを表示するサイドバーの作成

## 当ブログをテンプレートとして利用する場合

当ブログはGoogleアナリティクスを使用しています。そのため、環境変数を設定。

* .envファイルをルートフォルダーに作成し、以下記述

```bash
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID= {yourID}
```
