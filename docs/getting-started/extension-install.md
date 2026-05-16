---
sidebar_position: 1
---

# 拡張機能版のインストール

ブラウザの拡張機能として Open-Deck を追加する手順です。  
最も手軽な方法で、すぐにOpen-Deckを試すことができます！  
Chrome・Brave・Edgeなどの Chromium ベースのブラウザから、Firefox 系のブラウザに幅広く対応しています。

---

## Chrome・Brave・Edge へのインストール

Chrome Web Store から 1 クリックで追加できます。

<img src="/Open-Deck-Wiki/img/screenshot/install_chrome_0.gif" width="400" />

#### **手順**
1. [Chrome Web Store の Open-Deck ページ](https://chromewebstore.google.com/detail/open-deck/gmkadaeibmhchpimnfplodelecmogdic) を開きます。
2. **「Chrome に追加」** ボタンをクリックします。
3. 「"Open-Deck" を追加しますか？」というダイアログが表示されたら **「拡張機能を追加」** をクリックします。
4. ブラウザ右上のツールバーに Open-Deck のアイコンが表示されればインストール完了です。

:::tip[Brave・Edge でも同じ手順で OK]
Brave と Microsoft Edge はいずれも Chrome と同じ Chromium ベースです。  
Chrome Web Store のページへアクセスし、同じ手順でインストールできます。
:::

---

## Firefox へのインストール

<img src="/Open-Deck-Wiki/img/screenshot/install_firefox_0.gif" width="400" />

#### **手順**

1. [Mozilla Add-ons (AMO) の Open-Deck ページ](https://addons.mozilla.org/ja/firefox/addon/open-deck/) を開きます。
2. **「Firefox へ追加」** ボタンをクリックします。
3. 「Open-Deck を追加しますか？」のダイアログで **「追加」** をクリックします。

:::warning[Firefox ESR 115 以前をお使いの方]
「ツイート種類の表示モード」機能が動作しない制限があります。  
詳しくは [Open-Deck とは](/docs) をご覧ください。
:::

---

## インストール後の初回起動

ブラウザに拡張機能を追加しただけでは Open-Deck は起動しません。  
以下の専用 URL やピン留めした Open-Deck ボタンを開くことで起動します。

```
https://x.com/run-opdeck
```

このページを開くと自動的に初期設定が行われ、Open-Deck の画面に切り替わります。

:::tip[Open-Deckをピン留めしましょう！]
Open-DeckをブラウザのUI上にピン留めすることで、  
ワンクリックで起動できるようになります！
<img src="/Open-Deck-Wiki/img/screenshot/extension_pinned.png" width="400" />
:::

#### **初回起動時の画面**
<img src="/Open-Deck-Wiki/img/screenshot/welcome_opd.png" width="400" />

タイムラインカラム / 通知カラム / Exploreカラム の 3 カラムが初期設定として配置された状態で起動します。  

**ようこそ！Open-Deckへ！！**  

これが Open-Deck のホーム画面です。



---

## デベロッパーモードでのインストール（上級者向け）

:::warning[この方法は上級者向けです]
ブラウザの拡張機能管理画面の操作に慣れている方向けです。  
通常は Chrome Web Store / AMO からのインストールをご利用ください。
:::

GitHub から最新のソースをダウンロードして手動でインストールする方法です。

**手順（Chrome の場合）:**

1. [GitHub Releases](https://github.com/kawa-nobu/Open-Deck/releases) から最新バージョンの ZIP をダウンロードして解凍します。
2. Chrome のアドレスバーに `chrome://extensions/` と入力します。
3. 右上の **「デベロッパー モード」** トグルをオンにします。
4. **「パッケージ化されていない拡張機能を読み込む」** をクリックし、解凍したフォルダを選択します。
5. `https://x.com/run-opdeck` を開いて動作確認します。
