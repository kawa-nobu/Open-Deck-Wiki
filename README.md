# Open-Deck Wiki

Open-DeckのWikiリポジトリです。
本WikiはDocusaurusを用いています。

## セットアップ

リポジトリをクローンします。

```bash
git clone https://github.com/kawa-nobu/Open-Deck_Wiki.git
cd Open-Deck_Wiki
```

依存パッケージをインストールします。

```bash
npm install
```

## 実行

ローカル開発サーバーを起動します。

```bash
npm run start
```

デフォルトでは `http://localhost:3000` でアクセスできます。ほとんどの変更はサーバーを再起動することなくライブで反映されます。

本番用のビルドを生成する場合は以下を実行します。

```bash
npm run build
```

ビルドされた静的ファイルは `build` ディレクトリに出力され、任意の静的ホスティングサービスで配信できます。

## 編集するには

ドキュメントの本体は `docs` ディレクトリ配下に Markdown (`.md`) または MDX (`.mdx`) 形式で配置されています。

- **既存のページを編集する**: `docs` 配下のディレクトリ内の該当ファイルを編集してください。
- **新しいページを追加する**: `docs` 配下に新しいディレクトリと Markdown ファイルを作成してください。
- **サイト全体の設定を変更する**: タイトルやナビゲーションバー、フッターなどは `docusaurus.config.js` で設定できます。

### 画像・アセットの追加

スクリーンショットなどの画像アセットは `static/img` 内の適切なディレクトリに配置します。

Markdown 内からは以下のように参照できます。

```html
<img src="/Open-Deck-Wiki/img/screenshot/example.png" width="800" />
```

編集後は前述の `npm run start` でローカル確認の上、Pull Request を作成してください。