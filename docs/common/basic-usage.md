---
sidebar_position: 1
---

# 基本的な使い方

Open-Deck を開いたときの画面の見方と、最初にやることを説明します。

---

## 画面の構成

Open-Deck の画面は左端の **サイドバー** と、右側に広がる **カラムエリア** で構成されています。

<img src="/Open-Deck-Wiki/img/screenshot/opd_main.png" width="800" />

サイドバーにあるボタンをクリックするだけでカラムが追加され、横に並んでいきます。

---

## サイドバーのボタン一覧

サイドバーには上から順に以下のボタンが並んでいます。

| アイコン | 名称 | 役割 |
|---|---|---|
| <img src="/Open-Deck-Wiki/img/opd_icons/logo_icon.svg" width="50" /> | Open-Deck ロゴ+バージョン | ロゴクリックでOpen-Deckについての情報が表示されます |
| <img src="/Open-Deck-Wiki/img/opd_icons/opd_api_rate.png" width="50" /> | API 使用率 | X API の残量をパーセントで表示。カーソルを乗せると詳細が表示されます |
| <img src="/Open-Deck-Wiki/img/opd_icons/post.svg" width="50" /> | ポストカラム追加 | ポストカラムを追加 |
| <img src="/Open-Deck-Wiki/img/opd_icons/tl_column.svg" width="50" /> | タイムラインカラム追加 | Timeline カラムを追加 |
| <img src="/Open-Deck-Wiki/img/opd_icons/notice_column.svg" width="50" /> | 通知カラム追加 | Notifications カラムを追加 |
| <img src="/Open-Deck-Wiki/img/opd_icons/exp_column.svg" width="50" /> | Explore カラム追加 | Explore カラムを追加 |
| <img src="/Open-Deck-Wiki/img/opd_icons/single_view.svg" width="50" /> | 段切り替え | 1 段 表示を切り替え |
| <img src="/Open-Deck-Wiki/img/opd_icons/second_view.svg" width="50" /> | 段切り替え | 2 段表示を切り替え |
| <img src="/Open-Deck-Wiki/img/opd_icons/profile_save.svg" width="50" /> | プロファイル保存アイコン | 現在のカラム構成をプロファイルとして保存 |
| <img src="/Open-Deck-Wiki/img/opd_icons/profile_delete.svg" width="50" /> | プロファイル削除アイコン | 保存済みプロファイルを削除 |
| <img src="/Open-Deck-Wiki/img/opd_icons/opd_profile_now.png" width="50" /> | 現在使用プロファイル番号 | 今使っているプロファイルの番号。クリックで一覧が開く |
| <img src="/Open-Deck-Wiki/img/opd_icons/opd_profile_switch.png" width="50" /> | 保存プロファイル切り替え | 保存済みプロファイルに切り替えられるアイコン |

---

## カラムの追加

サイドバーのアイコンをクリックするだけでカラムが追加されます。  
同じアイコンを何度クリックしても、それぞれ独立したカラムとして追加されます。

#### カラムの種類について知りたい場合は⋯
→ [カラムの種類と操作](./columns)

:::tip[Shiftキーを押しながら、カラム追加ボタンをクリックしてみましょう！]
Shiftキーを押しながら、カラム追加ボタンをクリックすると、一番左にカラムが追加されます！
:::

:::tip[Open-Deckには、カラム数の制限はありません]
ブラウザや PC のメモリが許す限り、何枚でもカラムを追加できます。  
お使いの環境や使用用途に合わせて、お好みで配置してください！
:::

---

## カラムヘッダーのボタン

<img src="/Open-Deck-Wiki/img/screenshot/opd_explore_tab.png" width="400" />
(※画像はExploreカラム)

各カラムの上部にあるヘッダーには、そのカラムを操作するボタンが並んでいます。

| アイコン | ボタン | 機能 |
| --- |---|---|
| <img src="/Open-Deck-Wiki/img/opd_icons/settings.svg" width="50" /> | 歯車（設定） | 表示モード・カラム幅・自動更新などの設定を開きます |
| <img src="/Open-Deck-Wiki/img/opd_icons/banner_hide.svg" width="50" /> | バナー切り替え | カラム上部のタイトルエリアを表示 / 非表示します |
| <img src="/Open-Deck-Wiki/img/opd_icons/top_hide.svg" width="50" /> | トップ切り替え | カラムの先頭バーを表示 / 非表示します |
| <img src="/Open-Deck-Wiki/img/opd_icons/pin.svg" width="50" /> | ピン留め | カラムの位置を現在の画面で固定します。(次回起動時に設定された画面で起動します) |
| <img src="/Open-Deck-Wiki/img/opd_icons/column_close.svg" width="50" /> | ✕（閉じる） | カラムを閉じます |

---

## カラムの並び替え

<img src="/Open-Deck-Wiki/img/screenshot/column_move.gif" width="400" />

各カラムのヘッダーをドラッグすると、カラムの隙間等にガイドが出現します。  
移動したい位置でドロップするとカラムを左右に移動できます。  

---

## 2 段表示に切り替える

<img src="/Open-Deck-Wiki/img/screenshot/opd_second_column.png" width="400" />

サイドバーの **段切り替えアイコン** をクリックすると、カラムエリアが上下 2 段に分割されます。  
上段と下段は独立していて、それぞれに自由にカラムを追加・配置できます。

1 段表示に戻すには、もう一度段切り替えアイコンをクリックします。  
このとき **2 段目に配置していたカラムはすべて閉じられます**。戻す前に構成を保存しておきましょう。

:::tip[段切り替えアイコン]
段切り替えはツールバーにある以下のアイコンで可能です！
<img src="/Open-Deck-Wiki/img/opd_icons/single_view.svg" width="50" />
<img src="/Open-Deck-Wiki/img/opd_icons/second_view.svg" width="50" />
:::

:::tip[2 段表示の便利な使い方]
- 上段：タイムライン系（各ユーザーアカウントや検索ワード）
- 下段：ポストカラム + 通知 + DM（投稿しながら確認用）

こうすると「タイムラインを追いながら通知も逃さない」運用ができます。
:::

---

## カラムを閉じる

カラムヘッダーの **✕ ボタン** を押すとそのカラムが削除されます。  
間違えて閉じてしまっても、サイドバーから同じ種類のカラムをすぐに追加し直せます。

---

## 次のステップ

画面構成が分かったら、各機能の詳細を確認してみましょう。

- [カラムの種類と操作](./columns) — 4 種類のカラムの特徴
- [カラムの設定](./column-settings) — 表示モードや幅の変え方
- [プロファイル管理](./profiles) — カラム構成の保存・切り替え
