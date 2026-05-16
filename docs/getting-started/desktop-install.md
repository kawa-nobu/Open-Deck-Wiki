---
sidebar_position: 2
---

# デスクトップ版のインストール

Open-Deck for Desktop は Windows / Linux / (macOSは近日対応) で動作するデスクトップアプリです。  
複数アカウントの同時表示や他 SNS 対応など、拡張機能版にはない機能を使いたい方向けです。

---

## Open-Deckのダウンロード

1. [GitHub の Releases ページ](https://github.com/kawa-nobu/Open-Deck-Desktop/releases/) を開きます。
2. 最新バージョンの項目を展開し、**お使いの OS に合ったファイル**をダウンロードします。

<img src="/Open-Deck-Wiki/img/screenshot/opd_desktop_git_dl.png" width="400" />

| OS | ダウンロードするファイル |
|---|---|
| Windows | `.zip` |
| Linux | `.AppImage` |

---

## インストール手順

### Windows

1. ダウンロードした `.zip` ファイルを任意のZIP展開ソフトウェア(7zip等)で展開します。
2. 展開したフォルダの中にある、`Open-Deck.exe` ファイルをダブルクリックします。
3. Open-Deckが起動します。

:::tip[どの ZIP をダウンロードすれば良いの！？]
- Windows 11 や　Windows 10 (64Bit版) をお使いの場合  
  → `Open-Deck-x.x.x-win-x64.zip` のような名称が付いたファイルをダウンロードしましょう。
- Windows 10 (32Bit版) をお使いの場合  
  → `Open-Deck-x.x.x-win-ia32.zip` のような名称が付いたファイルをダウンロードしましょう。
- Linux(x86 or x64)をお使いの場合  
  → `Open-Deck-x.x.x-linux-x86_64.AppImage` のような名称が付いたファイルをダウンロードしましょう。
- Linux(ARM64)をお使いの場合  
  → `Open-Deck-x.x.x-linux-arm64.AppImage` のような名称が付いたファイルをダウンロードしましょう。
- Linux(32Bit RaspberryPi OS 等)をお使いの場合  
  → `Open-Deck-x.x.x-linux-arm64.AppImage` のような名称が付いたファイルをダウンロードしましょう。
:::

### Linux

#### **AppImage**

```bash
# 実行権限を付与してから起動します
chmod +x Open-Deck-Desktop-*.AppImage
./Open-Deck-Desktop-*.AppImage
```

---

## 初回起動

アプリを起動すると、初回だけウェルカムダイアログが表示されます。

<img src="/Open-Deck-Wiki/img/screenshot/welcome_opd_desktop_0.png" width="400" />

- **「今すぐ映像を見る」** → YouTube の使い方解説動画が開きます（はじめての方は視聴をおすすめします）
- **「OK」** → そのまま Open-Deck が起動します

:::tip[解説動画はあとからでも見られます]
動画は画面上部のツールバー → Open-Deck アイコン → **「Help」** からいつでも再視聴できます。
:::

---

## アップデートについて

起動時に新しいバージョンが公開されているとダイアログで通知されます。

<img src="/Open-Deck-Wiki/img/screenshot/opd_desktop_update_popup.png" width="400" />

- **「GitHub から入手する」** → Releases ページが開き、最新版をダウンロードできます
- **「無視する」** → 今回は通知を閉じます

アップデートチェックが不要な場合は、システム設定から無効にできます。  
→ [システム設定](/docs/desktop/system-settings) を参照

---

## アンインストール

### Windows

ダウンロード時に、ZIPを展開したOpen-Deckの格納されたフォルダーをそのまま削除することで完了します。

:::note[ユーザーデータについて]
アンインストールしても、プロファイルやセッション情報などのユーザーデータはアプリデータフォルダに残ります。  
完全に削除したい場合は、アンインストール後に以下のフォルダを手動で削除してください。  
`%APPDATA%\Open-Deck`
:::
