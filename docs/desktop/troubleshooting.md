---
sidebar_position: 5
---

# トラブルシューティング（デスクトップ版）

デスクトップ版で起きやすい問題と解決方法をまとめています。  
拡張機能版共通のトラブルは [拡張機能版のトラブルシューティング](/docs/extension/troubleshooting) も合わせてご覧ください。

---

## Open-Deckが起動しない

### Windows：「Windows によって PC が保護されました」と表示される

<img src="/Open-Deck-Wiki/img/screenshot/smart_screen.gif" width="400" />

Microsoft Defender SmartScreen による警告です。

1. 表示されたダイアログで **「詳細情報」** をクリックします
2. **「実行」** ボタンが現れるのでクリックします
3. 次回からは警告なしで起動できます

:::warning
**Open-Deck公式のGitHubリポジトリからダウンロードしたことが確実である場合でのみ実行しましょう。**  

以下の場所以外では開発者は配布をしておりません！  
[開発者公式 Open-Deck Desktop 配布場所](https://github.com/kawa-nobu/Open-Deck-Desktop/releases)  

公式以外で配布されていたものである場合は、  
悪意のある機能が追加されているなどのリスクがあります。

必ず、開発者が公式で公開しているファイルをダウンロード&実行するようにしましょう！
:::

---

## セッションが削除できない

<img src="/Open-Deck-Wiki/img/screenshot/account_session_manager_session_open.png" width="400" />

#### **原因**

削除しようとしているセッションが、現在表示中のカラムで使われています。

#### **解決方法**

**再起動を伴うため、次回起動時に実施することを推奨します**

1. そのセッションを使用しているカラムをすべて閉じるか、別のセッションに変更します
2. Open-Deckを再起動します
3. その後、セッションマネージャーから「削除」を実行します

### システムエラー「操作に失敗しました」と表示される
<img src="/Open-Deck-Wiki/img/screenshot/account_session_manager_delete_error.png" width="400" />

#### **原因**
削除しようとしているセッションが、直前で使用されていた可能性があります。

#### **解決方法**

**再起動を伴うため、次回起動時に実施することを推奨します**

1. Open-Deckを再起動します
2. その後、セッションマネージャーから「削除」を実行します

---

## 外部 URL を開こうとすると警告が出る

<img src="/Open-Deck-Wiki/img/screenshot/open_external_link.png" width="400" />

デスクトップ版では、アプリの外部の URL を開こうとすると確認ダイアログが表示されます。

これは意図しないページへの遷移を防ぐための安全機能です。  
信頼できる URL であれば **「開く」** をクリックしてください。

---

## アップデートのダイアログが毎回表示される

<img src="/Open-Deck-Wiki/img/screenshot/update_available.png" width="400" />

新しいバージョンのアップデートをしていないと毎回表示されます。  
[GitHub Releases](https://github.com/kawa-nobu/Open-Deck-Desktop/releases/) から最新版をダウンロードしてインストールしてください。

アップデートチェック自体を無効にしたい場合は → [システム設定](./system-settings#アップデート) を参照

:::warning
**アップデートは出来る限り行いましょう！**  

Open-Deck Desktopのアップデートでは新機能の追加やバグ修正、  
実行基盤のセキュリティアップデートが含まれています。

なお、以下の場所以外では開発者は最新バージョンの配布を行っておりません！  
[開発者公式 Open-Deck Desktop 配布場所](https://github.com/kawa-nobu/Open-Deck-Desktop/releases)  

公式以外で配布されていたものである場合は、  
悪意のある機能が追加されているなどのリスクがあります。

必ず、開発者が公式で公開しているファイルをダウンロード&実行するようにしましょう！
:::

---

## 設定をリセットしたい

設定からOpen-Deckのデータをリセットできます。  

詳細は → [システム設定 / 開発者向け機能](./system-settings#開発者向け機能)

### **システム設定のみリセット**  
設定 → 開発者向け機能 → **「システム設定を初期化」**

### **プロファイルをリセット**  
設定 → 開発者向け機能 → **「プロファイルを初期化」**

:::warning
**リセットは元に戻せません。**  
なお、リセット後はアプリが自動で再起動されます。  
:::

---

## 解決しないときは

開発者にフィードバック下さい。  
以下のフィードバックフォームにて匿名で開発者へ報告が可能です。  
[**フィードバック専用フォーム**](https://forms.gle/yzenSXrs3RXceyPh9)

[GitHub Issues](https://github.com/kawa-nobu/Open-Deck-Desktop/issues) でも報告が可能です。  
可能な限り、用意されているIssueテンプレートをお使い下さい。