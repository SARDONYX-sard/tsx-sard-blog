---
title: "コミット規約"
date: "2021-04-18"
---

## commit_template


```javaScript
import { parseISO, format } from 'date-fns'

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'yyyy年 L月 d日')}</time>
}
```

```diff
 continued line
-removed line
+added line
```

### ==== Prefix ====

**fix**: バグ修正

feat: 新機能

docs: ドキュメントのみが変更

style: コードの意味に影響を与えない変更（空白、書式設定、セミコロンの欠落など）

refactor: バグを修正せず、機能を追加しないコード変更

perf: パフォーマンスを向上させるコード変更

test: 不足しているテストを追加するか、既存のテストを修正

chore: ビルドプロセスまたはドキュメント生成などの補助ツールとライブラリへの変更

### ==== Emojis ====

:bug:         バグ修正 (fix)

:+1:          機能改善 (fix/add( | feat)

:sparkles:    部分的な機能追加 (add( | feat)

:tada:        盛大に祝うべき大きな機能追加 (add( | feat)

:rocket:      パフォーマンス改善 (add( | feat)

:lock:        新機能の公開範囲の制限 (add( | feat)

:cop:         セキュリティ関連の改善 (add( | feat)

:note:        ドキュメント修正 (docs)

:shirt:       Lintエラーの修正やコードスタイルの修正 (style)

:recycle:     リファクタリング (refactor)

:shower:      不要な機能・使われなくなった機能の削除 (refactor)

:green_heart: テストやCIの修正・改善 (test)

:up:          依存パッケージなどのアップデート (chore)

### 二行目

* 二行目を**空行**にする

  reason:

  コマンドライン上の1行目と3行目の連結による可読性低下を防止。

### 三行目

* 1行あたり72字以内
* 体言止めは使わない

### 場合によって不具合の管理番号を明示

プロジェクトではRedmineやJIRAのようなサービスで不具合を番号管理することがある。

**BTS（バグトラッキングシステム）。**

* * *

番号管理された不具合を修正した場合

↓

**refs #管理番号**（コミットメッセージの3行目で）

と明示することが運用上ある。
（BTS上の管理番号を参照という意味。）

※プロジェクトによっては1行目に記述

* * *

* 同じGitHubリポジトリのIssue番号を明示する場合
  `#Issue番号`

* 他のGitHubリポジトリのIssue番号を明示する場合
  `ユーザー/リポジトリ名#Issue番号`

* コミットでIssueをクローズできる

  `Fix#Issue番号`

  や

  `Close#Issue番号`

  のように書くと、

  コミットメッセージ経由でIssueを解決扱いに。

### 重要な情報はプルリクにまとめる

プルリクエストではMarkdown記法を使って可読性を上げる。

### 参考サイト

> [【必須】Gitコミットの書き方・作法【prefix/emoji】](https://suwaru.tokyo/%E3%80%90%E5%BF%85%E9%A0%88%E3%80%91git%E3%82%B3%E3%83%9F%E3%83%83%E3%83%88%E3%81%AE%E6%9B%B8%E3%81%8D%E6%96%B9%E3%83%BB%E4%BD%9C%E6%B3%95%E3%80%90prefix-emoji%E3%80%91/)
