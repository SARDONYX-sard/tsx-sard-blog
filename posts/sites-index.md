---
title: "オススメ技術サイト一覧"
date: "2021-05-18"
---

## 前書き

プログラムを学ぶとき、良質なサイトを探すのにかなりの時間を浪費した。
他の人にはそうなってほしくないので、今まで役立ったサイトを公開する。
なお、強くオススメしたいサイト順に並ばせる。
随時更新予定。

この記事を効率よく使う方法の例：
・リンクを実際に踏んでみて、ざっと吟味したうえで使えるサイトだけをブックーク。
・メンドーなのでストックして永久封印。(。-ω-)zzz

## JavaScript

> Webで動きを付けたいときに使う有名なアレ。
> ES6から他言語にあるクラス記法が使えるようになったため、他言語使用者も理解しやすくなった。ただ深く知るには、やはりES5以前の記法と歴史的背景を知る必要が出てくる。
> （例：現在はエイリアスとしてクラスが存在しているので、直接触れることはほぼなくなったプロトタイプを用いた記述が書けない。
> 　結果、JSではすべてが連想配列といわれてもイメージできず、内部構造を知らないという無知からバグを生む。他には、予想外の暗黙の型変換でバグ発生、varのホイスト、プロトタイプ汚染、など。）
> 互換性のために過去の記法に変換を要求されるなど、過去の遺物に囚れている言語。

・JavaSciptチートシート　（まとまっていてわかりやすい）
　<https://jsprimer.net/cheatsheet/>

・JavaScriptの業務スキルレベル　判別表（この記事はだいぶ古いが今でも有用）
　<https://language-and-engineering.hatenablog.jp/entry/20100111/p1>

・clean code JavaScript(日本語訳)　　（きれいなコードを書く手法を学べる読むのを強くお勧め）
<https://github.com/mitsuruog/clean-code-javascript>

・正規表現 MDN　（反復命。その身にゆっくり染みこませるのをおすすめ）
　<https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_Expressions>

・MDNエラーリファレンス
 　<https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Errors>

・とほほのJavaScriptリファレンス（有名なやつ）
　<https://www.tohoho-web.com/js/index.htm>

・Java Script素材集
　<http://artown.jp/e_javascript/index.html>

・JavaScript libraries （JSのライブラリ検索）
　<http://searchlibs.com/?q=>

・JavaScript Minifier（ブックマークレット作成にお世話になった）
　<https://javascript-minifier.com/>

###### [yarn] パッケージマネージャ

・yarnチートシート
　<https://qiita.com/morrr/items/558bf64cd619ebdacd3d>

###### [electron]　デスクトップアプリが作れる

・[Electron] 多言語対応する – i18n（jsonで多言語ファイル作ればいい！でもその具体的な方法は？と困ったときにお世話に。）
　<https://blog.katsubemakito.net/nodejs/electron/electron-i18n>

・Electronでデスクトップアプリを作ろうとしたメモ
　<https://tenderfeel.xsrv.jp/javascript/4471/##Electron_Forge>

・Electron APIデモから学ぶ実装テクニック ― ネイティブUIと通信
　<https://www.buildinsider.net/enterprise/electron/003>

###### [Puppeteer]　Web自動

・Puppeteerで複数のURLはPromise.allで処理したほうが倍以上高速（Web自動化で遊ぶ。セレニウム？それは美味ですかな？）
　<https://iwb.jp/puppeteer-multiple-url-promise-all-several-times-faster/>

#### [Vue]

> HTMLをそのまま書いているような感覚で記述できる、SPA、SSRに使われるUI構築フレームワーク。個人的にReactより分かりやすい。cssのスコープもお手軽なのがGood。

・Vue Doc (古い書籍よりドキュメント)
　<https://v3.ja.vuejs.org/guide/installation.html##%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%88>

・フロントエンドエンジニア必読vue.jsの基礎 | アールエフェクト（簡易プロジェクトを作ったり、テストの方法を解説してくれたり。）
　<https://reffect.co.jp/vue/vue-js-basic>

・Vue.jsについての基礎（transitionによるアニメーション）
　<https://qiita.com/watataku8911/items/f691a2999c3e2600173b>

・Vue.js Examples　（Vueの素材集）
　<https://vuejsexamples.com/>

###### [Vuex]

> コンポーネントによる、データのバケツリレー問題を解決させる目的で生まれた。

・Vuex とは何か？　Vuex Doc（公式Docは分かりにくいことが多いが、これは結構分かりやすい）
　<https://vuex.vuejs.org/ja/>

・入門者必読、vue.jsの状態管理Vuexがわかる
　<https://reffect.co.jp/vue/understaind-vue-basic>

#### [React]

> Facebookとコミュニティによって開発されているUI構築のためのJavaScriptライブラリ。
> React 16.8 で追加されたフックにより、コンポーネントとしての扱いがとりやすくなった。
> TypeScriptとの併用でさらに使いやすくなる。

###### [Next.js]

> Reactフロントエンド開発Webフレームワーク。
> SPA、SSR、静的Webサイトの生成（SSG）の機能を持つ。

・Next.js 4年目の知見：SSRはもう古い、VercelにAPIサーバを置くな
　<https://qiita.com/jagaapple/items/faf125e28f8c2860269c>

・next.jsのテンプレートたち。（種類が豊富で参考になる。Starしておくのをおすすめ）
　<https://github.com/vercel/next.js/tree/canary/examples>

・Next.jsでGoogle Analyticsを使えるようにする
　<https://panda-program.com/posts/nextjs-google-analytics>

## TypeScript

> JavaScriptを型の制約を付けたもの。
> （型を限定すると何がいいの？⇒例えば変数が箱であるならば、その箱に入るデータを指定できる。指定したデータ以外のものを入れるとエラーを吐くため、バグが減る。）
> VS Codeの型推論が強力すぎることもあり、一度使ったら依存症待ったなし。
> この型パズルとJSDocを組み合わせれば、バグ発生率がかなり減る。
> abstract, public, privateすら宣言できるのでJavaコーダーも思わずにっこり…するかもしれない。

・仕事ですぐに使えるTypeScript（数あるDocの中でもかなり分かりやすいし詳しい…が、まだ未完である。）
　<https://future-architect.github.io/typescript-guide/index.html>

・TypeScript Deep Dive 日本語版
　<https://typescript-jp.gitbook.io/deep-dive/>

・TypeScriptの型入門（食事をとりながらスマホで学習したいときに最適だった）
　<https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a##conditional-type%E3%81%AB%E3%82%88%E3%82%8Bdeepreadonlyt>

・TypeScriptお試し(コンパイル後のコードはどうなっているのか。そういうのもみれる)
　<https://www.typescriptlang.org/ja/play?##code/IYGwpgTgLgFARACTCEB7ABAFQJ4AcwDKAxhAJa5RwCUA3EA>

#### [React]

###### [Next.js]

・Next.js + TypeScript + VercelでJamstackなブログを作る その1
　<https://blog.zenpachi.dev/posts/nextjs-blog/>

## HTML

・dCodes v2（サイト構築のための部品がいろいろ）
　<http://www.dcodes.net/2/docs/index.html>

・HTML reference.io（各HTMLタグの詳細）
　<https://htmlreference.io/>

・Google fonts（素材系のフォント）
　<https://fonts.google.com/>

・Material Design Icons（素材系のアイコン）
　<https://materialdesignicons.com/>

・サルワカ
　<https://saruwakakun.com/>

## CSS

> カスケーディングスタイルシート（Cascading Style Sheets）。
> HTMLからデザインの役割を分断、担当。
> BEM記法、SASSの知識を検索するのをすすめたいお年頃。

・TOBIAS AHLIN　moving-letters（参考になった）
　<https://tobiasahlin.com/moving-letters/>

・Web制作者が備えておきたい最新版チートシートのまとめ、CSS3 Flexbox, CSSアニメーション, jQuery3, ES6, Bootstrap4など（ちょいと古い）
　<https://coliss.com/articles/build-websites/operation/work/cheat-sheets-for-front-end-developers.html>

## C

> (ポインタで躓きたまえ…！そう囁くんだ…)

・苦しんで覚えるＣ言語(分かりやすい、面白い)
　<https://9cguide.appspot.com/index.html>

・組込みの門（検索すると出てくるアレ）
　<https://www.uquest.co.jp/embedded/index.html##outline>

## Kotlin

> Javaを簡潔に書けるようにという目的で開発された言語。

　↓Androidアプリ作成時、ジェネリクスでかなり混乱した記憶。
・[Kotlin]はじめてのジェネリクス クラスや関数で使ってみよう！
　<https://pouhon.net/kotlin-generics/3627/>

・Color Tool - Material Design
　<https://material.io/resources/color/##!/?view.left=0&view.right=0&primary.color=9C27B0>

・ConstraintLayout　|　Android デベロッパー
　<https://developer.android.com/reference/androidx/constraintlayout/widget/ConstraintLayout>

・Android Kotlin の基礎
　<https://developer.android.com/courses/kotlin-android-fundamentals/overview>

・Kotlin での高度な Android 開発
　<https://developer.android.com/courses/kotlin-android-advanced/overview>

## C##

> (Cと名前は似ているが互換性はない)

・C## によるプログラミング入門
　<https://ufcpp.net/study/csharp/>

## PHP

> ゾウさんぱお～ん！なマークが印象。
> クラス継承はRuby同様「::」で記述し、JavaScriptのアロー関数「 => 」がハッシュ、Javaのアロー関数「 -> 」がJavaScriptのメソッド「.」に相当すると考えれば、大半の構文はJavaScriptと似ていると考えていい言語。型制約もできちゃう。
> こうも紛らわしいと、全言語の記法を統一してくれよと思いたくなるが、その夢は各言語の理念上、叶うことはない。

・PHPドキュメンテーション
　<https://www.php.net/manual/ja/>

・PHPDoc リファレンス(JSでも使える良質なアノテーション記述法)
　<https://zonuexe.github.io/phpDocumentor2-ja/references/phpdoc/index.html>

## Python

> R言語同様統計などデータ処理に便利なライブラリが豊富な言語。
> 近年では機械学習でもてはやされており、人気が高い。
> なお、AIという言葉につられた初心者がプログラミングの入り口として学びたがる言語でもあるが、結局、機械学習の真髄に達するには高度な数学知識が必要になってくるため、大半は単にライブラリを使って遊ぶだけで終わるパターンになる模様。
> とはいえ、言語の構文が簡素なので、分かりやすく、最初に学ぶ言語という面では確かに適している。

・note.nkmk.me
　<https://note.nkmk.me/python/>

・お気楽 Python3 プログラミング超入門
　<http://www.nct9.ne.jp/m_hiroi/light/pythonb02.html##abc09>

・PyQt5とpython3によるGUIプログラミング：実践編
　<https://qiita.com/kenasman/items/b9ca3beb25ecf87bfb06##qt-designer%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6>

・Python3チートシート(基本編)
　<https://qiita.com/1429takahiro/items/710a877b1afb1626334f##%E3%82%AF%E3%83%A9%E3%82%B9%E3%81%AE%E7%B6%99%E6%89%BF>

・【機械学習初心者向け】scikit-learn「アルゴリズム・チートシート」の全手法を実装・解説してみた
　<https://qiita.com/sugulu_Ogawa_ISID/items/e3fc39f2e552f2355209>

・PyQ ドキュメント
　<https://docs.pyq.jp/index.html>

・Python入門
　<https://www.python.ambitious-engineer.com/introduction-index>

・Django(Python)でシステム開発できるようになる記事\_入門編
　<https://qiita.com/Saku731/items/ed64190a12a4498b9446>

・【Pygame入門】ゲームプログラミング【Python】
　<https://algorithm.joho.info/programming/python/pygame/>

## Ruby

> Railsが優秀過ぎてそればかり持ち上げられているやつ。
> なおRuby言語におけるハッシュの書き方はPHPで応用が利き、
> JavaScriptを先に学んでいるとアロー関数に見えて違和感が生じる。

・Railsドキュメント（やはり公式安定）
　<https://railsdoc.com/rails>

・Rails Girls（解説が丁寧）
　<https://railsgirls.jp/install>

・Ruby on Rails チュートリアル　第4版(最新版は有料。)
　<https://railstutorial.jp/>

## PowerShell

> バッチ処理楽しいっピ！(ｂ ・ω・)bとなるかもしれない言語。
> 正規表現の呪文まみれのような、batをちまちま作る方法から、さらに分かりやすく、高度なことが出来るようになったらしい。
> キーボードだけであらゆる処理ができるとされているが、使いこなすのは難しい。
> windows　OSを使っているならば環境構築はすでに整っているという魅力がある。
> パイプライン「|」で連鎖的に他の処理にデータを渡すことができ、他言語でいうと、その様子はメソッドチェーンさながら。さらに言い換えるとバケツリレー。

・今から使う PowerShell
　<https://www.vwnet.jp/Windows/PowerShell/2018022301/GettingStartedWithPowerSehll-01.htm>

## MarkDown

> 簡素な記述でHTMlが精製できちゃう凄いヤツ
> なお知っておくと人生が豊かになれちゃうかもしれない記法として、
> 「Mermaid」、「Vega Lite」、「Plant UML」が挙げられる。

・Qiita マークダウン記法 一覧表・チートシート
　<https://qiita.com/kamorits/items/6f342da395ad57468ae3>

・【VSCode】Markdownで本格プレゼンテーションを作ろう！
　<https://b1tblog.com/2019/10/09/vscode-presentation/>

・Visual Studio Code＋Markdownでチャート／グラフ／図を描画するには？
　<https://blog.masahiko.info/entry/2019/08/16/160422>

###### [Mermaid]

　↓URLが長すぎるので、いつものMD記法で文字による直リンク。
・[Mermaid Live Editor](https://mermaid-js.github.io/mermaid-live-editor/##/edit/eyJjb2RlIjoiZ3JhcGggVERcbkFbQ2hyaXN0bWFzXSAtLT58R2V0IG1vbmV5fCBCKEdvIHNob3BwaW5nKVxuQiAtLT4gQ3tMZXQgbWUgdGhpbmt9XG5DIC0tPnxPbmV8IERbTGFwdG9wXVxuQyAtLT58VHdvfCBFW2lQaG9uZV1cbkMgLS0-fFRocmVlfCBGW2ZhOmZhLWNhciBDYXJdXG4iLCJtZXJtYWlkIjp7fSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)

###### [Plant UML]

・PlantUML 概要
　<https://plantuml.com/ja/>

・UML超入門（趣味や遊びで読むにはかなりきつい）
　<http://objectclub.jp/technicaldoc/uml/umlintro1>

###### [Vega-Lite]

・Vega-Lite – A Grammar of Interactive Graphics
　<https://vega.github.io/vega-lite/>

## Google Apps Script

> JavaScriptをもとに、Googleが作った言語。
> Googleスプレッドシートで主に使用。
> JavaScriptでWebサイトを作り、スプレッドシートをDB代わりに使った思い出。

・Excel VBAプログラマーのためのGoogle Apps Script入門
　<https://www.atmarkit.co.jp/ait/series/5004/>

## git

> version管理。ゲームのセーブ&ロードと思うと分かりやすい。
> 個人では使わないという発言をたま～に耳にするが、使えるようになると正直個人だろうがかなり使う。
> 変更履歴が逐一わかって変更を戻せたり、状況把握がしやすくなったり、デプロイに便利なのだから使うのをおすすめしたい。
>  ＊VS Codeなんかでは拡張機能でワンタッチでコマンドを実行できるため、
> 　用語と機能さえ記憶しておけば、いちいちコマンドを覚える必要すら実はあまりなかったりする。

・git book(下手に探すよりこのサイト見たほうが理解が早い)
　<http://git-scm.com/book/ja/v2>

　↓長いので直リンク　　（コミット履歴が見やすくなる）
・[【必須】Gitコミットの書き方・作法【prefix/emoji】](https://suwaru.tokyo/%E3%80%90%E5%BF%85%E9%A0%88%E3%80%91git%E3%82%B3%E3%83%9F%E3%83%83%E3%83%88%E3%81%AE%E6%9B%B8%E3%81%8D%E6%96%B9%E3%83%BB%E4%BD%9C%E6%B3%95%E3%80%90prefix-emoji%E3%80%91/)

・commitlint の紹介
　<https://qiita.com/ybiquitous/items/74225bc4bf0a9ddcd7dd>

　↓長いので直リンク
・[今日からはじめるGitHub ～ 初心者がGitをインストールして、プルリクできるようになるまでを解説](https://eh-career.com/engineerhub/entry/2017/01/31/110000##Git%E3%81%A7%E3%81%AF%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%81%A7%E9%96%8B%E7%99%BA%E3%82%92%E9%80%B2%E3%82%81%E3%82%8B%E3%81%93%E3%81%A8%E3%81%8C%E3%81%A7%E3%81%8D%E3%82%8B)

## Adobe XD

> （Webサイトの試作品を作れるアレ。設計段階で使うやつ）

・Adobe XD でのデザイン、プロトタイプ、共有
　<https://helpx.adobe.com/jp/xd/user-guide.html/jp/xd/help/adobe-xd-overview.ug.html>

・Adobe XDでWebデザインをしよう！画面作成からページ推移までの手順を紹介
　<https://www.webcreatorbox.com/inspiration/adobe-xd-steps>

・Adobe XD でのアートボードの使用
　<https://helpx.adobe.com/jp/xd/user-guide.html/jp/xd/help/get-started-with-artboards-in-XD.ug.html>

## VS Code

> JavaScriptのためにあるのかってぐらいJSに対して手厚いコードエディタ。
> Web開発はこれとChromeを使うのがおすすめ。

・Emmet Documentation（高速でHTMLを記述するためのチートシート。）
　<https://docs.emmet.io/cheat-sheet/>

・VS Code のショートカットキー
　<https://qiita.com/12345/items/64f4372fbca041e949d0##%E9%85%8D%E8%89%B2%E3%83%86%E3%83%BC%E3%83%9E%E3%81%AE%E5%A4%89%E6%9B%B4ctrlk-ctrlt>

## Docker

> （お手軽仮想環境。win10ならver 2.5.0.1を使ったほうがエラーが出ない。今のところは。）

・【連載】世界一わかりみが深いコンテナ & Docker入門 〜 （詳しいが、話が難解）
　<https://tech-lab.sios.jp/archives/18811##i-3>

・Docker入門（第一回）～Dockerとは何か、何が良いのか～
　<https://knowledge.sakura.ad.jp/13265/>

## ネットワーク系

・ネットワークエンジニアとして（ネットワーク解説。分類に困った。）
　<https://www.infraexpert.com/>

#### ・通信プロトコル

###### [HTTP]

・Hypertext Transfer Protocol（ HTTP ）日本語訳 （HTTPのDoc。読むと眠くなる。）
　<https://triple-underscore.github.io/http-common-ja.html##index>

#### ・Webサーバー

###### [Apache]

・Apacheディレクティブ クイックリファレンス
　<http://httpd.apache.org/docs/2.4/mod/quickreference.html>

・Apache モジュール mod_log_config
　<http://httpd.apache.org/docs/current/mod/mod_log_config.html>

## Web知識

・フロントエンジニアなら知っておきたいブラウザレンダリングの仕組みをわかりやすく解説！（分類に困った）
　<https://leap-in.com/ja/lets-learn-how-to-browser-works/>

・2018年のフロントエンドエンジニアならこの程度は知ってて当然だよな？
　<https://qiita.com/rana_kualu/items/96b303307d6435aedf8b>

・Sociomedia　ヒューマンインターフェース ガイドライン
　<https://www.sociomedia.co.jp/category/shig>

## Chrome拡張機能

・GitHub1s(GitHub codeをVS Codeで見れる)
　<https://chrome.google.com/webstore/detail/github1s/lodjfmkfbfkpdhnhkcdcoonghhghbkhe>

・Lighthouse（サイトの機能、品質の良しあし調査）
　<https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk>

・React Developer Tools
　<https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi>

・Vue.js devtools
　<https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd>

・Stylus(WebサイトのCSSを独自カスタマイズできる)
　<https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne>

・ScriptAutoRunner(Webサイトに任意のJavaScriptを実行し、反映できる。)
　　<https://chrome.google.com/webstore/detail/scriptautorunner/gpgjofmpmjjopcogjgdldidobhmjmdbm>

・CSS Peeper
　<https://chrome.google.com/webstore/detail/css-peeper/mbnbehikldjhnfehhnaidhjhoofhpehk>

・CodeCopy
　<https://chrome.google.com/webstore/detail/codecopy/fkbfebkcoelajmhanocgppanfoojcdmg>

## 一括自動処理

> ファイルクリックで書かれた命令を逐次実行していく。

#### batch

> MS-DOS、OS/2、Windowsでのコマンドプロンプトに実行させたい命令列をテキストファイルに記述したもの。

・コマンドプロンプトで動くWindows10のバッチファイルの作成と実行
　<https://proengineer.internous.co.jp/content/columnfeature/5104>

#### bash

> Unixシェルかつコマンド言語。Linux、Mac。
>  windows10でも使える。

・bash 入門
　<https://rat.cis.k.hosei.ac.jp/article/linux/bash_intro.html>

・Bashの便利な構文だがよく忘れてしまうものの備忘録
　<https://qiita.com/Ping/items/57fd75465dfada76e633>

## プログラミング言語全体

・変数のネーミング生成codic
　<https://codic.jp/engine>

・プログラミングでよく使う英単語のまとめ
　<https://qiita.com/Ted-HM/items/7dde25dcffae4cdc7923>

　↓直リンク　(言語学習の息抜き。)
・[プログラミング言語年表](https://ja.wikipedia.org/wiki/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E%E5%B9%B4%E8%A1%A8)

## 書籍

###### JavaScript

・パーフェクトJavaScript (PERFECT SERIES 4) 大型本 – 2011/9/23
　<https://www.amazon.co.jp/gp/product/477414813X/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1>

・JavaScript 第6版 大型本 – 2012/8/10（通称サイ本。読むと眠いし、学習目的で読むと挫折する。リファレンス向き）
　<https://www.amazon.co.jp/JavaScript-%E7%AC%AC6%E7%89%88-David-Flanagan/dp/4873115736>

・JavaScript Ninjaの極意（JQueryの生みの親が書いた書籍）
　<https://www.amazon.co.jp/gp/product/4798128457/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1>

###### Linux

　↓長いので直リンク
・[Linuxで動かしながら学ぶTCP/IPネットワーク入門](https://www.amazon.co.jp/Linux%E3%81%A7%E5%8B%95%E3%81%8B%E3%81%97%E3%81%AA%E3%81%8C%E3%82%89%E5%AD%A6%E3%81%B6TCP-IP%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AF%E5%85%A5%E9%96%80-%E3%82%82%E3%81%BF%E3%81%98%E3%81%82%E3%82%81-ebook/dp/B085BG8CH5)

###### その他

・人月の神話【新装版】
　<https://www.amazon.co.jp/dp/4621066080/?coliid=I2OPXL3QSXOOLJ&colid=167OF0E2CODBK&psc=1&ref_=lv_ov_lig_dp_it>

###### まとめサイト

　↓「銀の弾など存在しない！(｀・ω・´)キリッ」とかよく引用されるアレ。
・読まれない名著「人月の神話」を本気で読み込んでみた（まとめ）
　<https://www.gixo.jp/blog/4978/>

## キーボード

＊ずっとキーボードを打っていると腱鞘炎でボロボロになってやがてタイピングできなくなった。
　そこでキーを押している感覚があまりないこのキーボードを買った。おすすめ。
　　　　　　　　　　　　↓
　・NiZ 静電容量無接点方式（貴重なブルートゥース対応）
　<https://www.akeeyo.co.jp/products/aky-niz-keyboard?variant=36313998950559>

## おわりに

・プログラミング技術はすべて覚えていられるわけではないので、忘れる前提で、いつでも思い出せる環境を作っておくことを重視するのをおすすめ。(例：ブックマーク登録や、Qiitaなどの技術系情報発信サイトにメモ。)

・本当によく使う基礎コードは何度も書くことになるので、必要に駆られて覚えていく。

・長期記憶するにしても、書き方をこと細かく覚えておくのではなく、「 **その存在、またはその言語でできることだけを記憶** 」していく。
　どちらも思い出せない場合、自分のやりたいことが全く出来ずに挫折するか、かなりの時間を無駄にしてようやく思い出す、ということになる可能性が極めて高い。

事例：
1.マークダウンをマーメイド記法で書きたい…でも書き方忘れた。
　⇒　「マークダウン」・「マーメイド」という単語だけでも覚えておけば、あとは検索してドキュメントを見れば何とかなる。
　（ただ、この手の場合は、そもそもVS Codeなどのユーザースニペット機能を利用して、覚えること自体を避けたほうがいい。）
２.JavaScriptで「標準出力」する方法ってなんだっけ？
　⇒ 「標準出力」という単語さえ覚えておけば他言語で困っても同じように検索で調べられる。
３.PHPでなんかリンク飛ぶやつできたよな？
　⇒　「PHP 飛ぶ」で検索してみる

「忘れた」というのは、厳密には「覚えているけど、思い出せない」という状態を表すことが多い。
そして最初のうちは、すべて覚えようとしてよく頭がパンクする。

・言語というは常に進歩しているので、書き方などを覚えても、陳腐化してすぐ非推奨になるケースが多々ある。
　それゆえ、重点すべきは共通している考え方（例：言語でいえば配列やハッシュ、変数。例２：Webのバックエンドなら認証機能、MVCアーキテクチャなど）だと思っている。
　プログラム言語というのは結局、とある目的を達成するために存在しているので、言語が違えども同じような機能が必要だったり、他言語の有用な機能の取り込みをしたりで共通していることが多い。

◇まとめ◇
目的からの逆算、そこから導出される必要な機能や、考え方。これらに重きを置き、書き方などは再利用可能自作ライブラリとしてフォルダ別に管理したり、メモっておいたり、ブックマークしたりに留めておくというのをおすすめしたい。
