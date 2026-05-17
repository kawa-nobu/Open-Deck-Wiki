---
sidebar_position: 3
sidebar_label: 拡張機能の対応
---

# Twitter(X)向け拡張機能の開発者様へ

お使いの Twitter(X) 向けブラウザ拡張機能を、**拡張機能版 Open-Deck** に対応させてみませんか？  
対応に必要な変更はわずか1行です。

## なぜ対応が必要なのか

拡張機能版 Open-Deck は、Twitter(X) を `<iframe>` 内に複数読み込むことでカラム表示を実現しています。  
通常、ブラウザ拡張機能の content script は **トップレベルのフレームのみ** で実行されるため、  
フレームに対しての動作を設定をしなければ iframe 内の Twitter(X) では他の拡張機能は動作しません。

`all_frames: true` を指定することで、iframe 内でも content script が実行されるようになり、  
Open-Deck の各カラム内でも拡張機能が利用できるようになります。

## 対応手順

`manifest.json` の `content_scripts` フィールドに `"all_frames": true` を追加してください。

### 変更前

```json
{
  "content_scripts": [
    {
      "matches": ["https://twitter.com/*", "https://x.com/*"],
      "js": ["content.js"]
    }
  ]
}
```

### 変更後

```json
{
  "content_scripts": [
    {
      "matches": ["https://twitter.com/*", "https://x.com/*"],
      "js": ["content.js"],
      "all_frames": true
    }
  ]
}
```

:::tip[ポイント]
`all_frames` のデフォルト値は `false` です。明示的に `true` を指定する必要があります。  
詳細は [Chrome 拡張機能のドキュメント](https://developer.chrome.com/docs/extensions/reference/manifest/content-scripts) を参照してください。  
なお、**本変更はFirefox版でも有効です。**
:::

## 動作確認方法

1. 拡張機能を更新後、ブラウザの拡張機能管理ページ([Chromium](chrome://extensions) / [Firefox](about:debugging#/runtime/this-firefox))から再読み込みします
2. 拡張機能版 Open-Deck を開きます
3. 各カラムで、お使いの拡張機能の機能が動作することを確認します

## 注意事項

- `all_frames: true` を指定すると、Twitter(X) を埋め込んでいる**すべてのページの iframe** で content script が実行されます。意図しないページでの実行を避けたい場合は、`matches` の指定を厳密にしてください。
- iframe 内では `window.top` が親フレームを指すため、トップレベル前提のコードがある場合は挙動を確認してください。
- パフォーマンスへの影響が気になる場合は、必要最小限の処理に絞ることを推奨します。

## サポート方針について

本ドキュメントは、他の拡張機能を Open-Deck 上で動作させるための情報提供を目的としています。

- 他の拡張機能の動作保証および個別サポートは、**原則として行いません**。
- 他の拡張機能側の不具合・仕様変更・互換性の問題については、各拡張機能の開発者様にてご対応をお願いいたします。
- Open-Deck 側の仕様は予告なく変更される場合があります。
- Open-Deck 自体の不具合と思われる事象については、[GitHub Issues](https://github.com/kawa-nobu/Open-Deck-Desktop/issues) よりご報告ください。

各拡張機能の動作確認・メンテナンスは、開発者様ご自身の責任において行っていただきますようお願いいたします。

## 困ったときは

対応にあたって不明点や問題があれば、[GitHub Issues](https://github.com/kawa-nobu/Open-Deck-Desktop/issues) からお気軽にご連絡ください。