---
sidebar_position: 1
---

# 拡張機能版について

拡張機能版 Open-Deck は、Chrome・Brave・Edge・Firefox に追加して使うブラウザ拡張機能です。  
**インストールが最も手軽**で、Open-Deck をはじめて使う方にもおすすめです。

---

## 拡張機能版の特徴

### <i class="fa-solid fa-check" style={{color: 'rgb(0, 195, 135)'}}></i> よいところ

- **Chrome Web Store / Firefox AMO から 1 クリックで導入できる**  
  アプリをダウンロードしてインストールする必要がなく、すぐ使い始められます。

- **使い慣れたブラウザでそのまま使える**  
  普段使っているブラウザに追加するだけなので、新しい操作を覚える必要がありません。

### <i class="fa-solid fa-triangle-exclamation" style={{color: 'rgb(255, 212, 59)'}}></i> 制限事項

- **ログインできるアカウントは 1 つだけ**  
  ブラウザの設定をそのまま使うため、複数アカウントの同時表示はできません。  
  →  複数アカウントが必要な場合は[デスクトップアプリ版](/docs/desktop/overview)をご検討ください。

- **X (Twitter) のみ対応**  
  Misskey や Bluesky などのカラムは追加できません（デスクトップ版の機能です）。

- **ブラウザの制約を受ける**  
  ブラウザ側の制約により、自動更新が止まっていたりするなどの挙動が確認されています。  
  また、ブラウザのバージョンや設定によっては、一部の機能が動作しない場合があります。

---

## 起動 URL について

拡張機能版は以下の専用 URL を開くことで起動します。

```
https://x.com/run-opdeck
```

---

## 対応ブラウザと注意事項

| ブラウザ | 動作状況 | 入手先 |
|---|---|---|
| Google Chrome | <i class="fa-solid fa-check" style={{color: 'rgb(0, 195, 135)'}}></i> 完全対応 | [Chrome Web Store](https://chromewebstore.google.com/detail/open-deck/gmkadaeibmhchpimnfplodelecmogdic) |
| Brave | <i class="fa-solid fa-check" style={{color: 'rgb(0, 195, 135)'}}></i> 完全対応 | [Chrome Web Store](https://chromewebstore.google.com/detail/open-deck/gmkadaeibmhchpimnfplodelecmogdic) |
| Microsoft Edge | <i class="fa-solid fa-check" style={{color: 'rgb(0, 195, 135)'}}></i> 完全対応 | [Chrome Web Store](https://chromewebstore.google.com/detail/open-deck/gmkadaeibmhchpimnfplodelecmogdic) |
| Mozilla Firefox 最新版 | <i class="fa-solid fa-check" style={{color: 'rgb(0, 195, 135)'}}></i> 完全対応 | [Mozilla AMO](https://addons.mozilla.org/ja/firefox/addon/open-deck/) |
| Firefox ESR 115 以前 | <i class="fa-solid fa-triangle-exclamation" style={{color: 'rgb(255, 212, 59)'}}></i> 表示モード機能が非対応 | [Mozilla AMO](https://addons.mozilla.org/ja/firefox/addon/open-deck/) |

### Firefox ESR での制限について

Firefox ESR 115（およびそれ以前の ESR 版）では、カラム設定の **「ツイート種類の表示モード」** が動作しません。

#### **原因**  
Open-Deck が使用している機能が ESR(バージョン115以前) では対応していないためです。  
「すべて」以外の表示モード（テキストのみ・画像付きのみ）は ESR 版では機能しません。

最新の通常版 Firefox であれば問題なく使えます。

---

## アップデートについて

Chrome Web Store・Firefox AMO からインストールした場合、拡張機能のアップデートは**ブラウザが自動で行います**。  
Open-Deck が更新されると、次回起動時に更新内容の確認ダイアログが表示されます。

---

## デベロッパーモードでインストールした場合の注意

デベロッパーモードで手動インストールした場合は自動更新されません。  
[GitHub Releases](https://github.com/kawa-nobu/Open-Deck/releases) を定期的に確認して、手動で更新してください。

---

## 機能の要望やバグ報告をしたい

開発者にフィードバックください。  
以下のフィードバックフォームにて匿名で開発者へ報告が可能です。  
[**フィードバック専用フォーム**](https://forms.gle/yzenSXrs3RXceyPh9)

[GitHub Issues](https://github.com/kawa-nobu/Open-Deck/issues) でも報告が可能です。  
可能な限り、用意されているIssueテンプレートをお使いください。
