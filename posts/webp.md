---

title: "jpgからwebpへ"
date: "2021-05-05"

---

## なぜwebpをつかうのか

　現在Udemyで、PHPの講座を受講しているのだけれど、そこでwebp拡張子の存在を知った。

　どうやらGoogleが作った拡張子らしく、可逆圧縮かつアルファ値（透明度）を持ったまま画像を圧縮できるようだ。

## 試験してみる

* 当ブログのホーム画像で試した結果は以下のとおり。

<br/>

例：324KBのjpgがその30%の110KBに圧縮された。

|      ホーム画像名     | jpgサイズ | webpサイズ |  圧縮率 |
| :-------------: | -----: | ------: | :--: |
|    daffodils    | 324 KB |  110 KB |  30% |
|  kissingSpring  | 874 KB |  537 KB |  61% |
|   orangeFlower  | 421 KB | 73.7 KB |  18% |
|   springFlower  | 532 KB |  566 KB | 106% |
| threeCuteChicks | 333 KB |  124 KB |  37% |

<br/>

1つの画像だけサイズが微増したこと以外は、大幅に圧縮がなされる結果となった。

画像を保存するときWebpだと少々使いづらいのでその辺はまた調整する必要があるけれど、読み込みの速さを考慮すればWebpの選択肢は大いにあると思う。

LightHouseによる計測：

![light-house2021-05-05](/images/light-house/light-house2021-05-05.webp)
