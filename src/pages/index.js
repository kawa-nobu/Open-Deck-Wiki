import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.opd_header, styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title" style={{ color: "white" }}>
          {siteConfig.title}
        </Heading>
        <p style={{ color: "white" }}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs">
            さあ、始めましょう！
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Open-Deck はオープンソースで開発されている、 X を複数カラムで快適に管理できるツールです"
    >
      <HomepageHeader />
      <main>
        <section
          style={{
            maxWidth: "860px",
            margin: "3rem auto",
            padding: "0 1rem",
            lineHeight: "1.8",
          }}
        >
          {/* ロゴ */}
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <img
              src="img/logo.svg"
              alt="Open-Deck ロゴ"
              style={{ height: "200px" }}
            />
          </div>

          <h2>Open-Deck とは？</h2>
          <p>
            Open-Deck は、TweetDeckの代替を目指して開発されているツールです。<br></br>
            X（旧Twitter）のタイムラインを複数カラムで表示・管理でき、快適な閲覧体験を提供します。
          </p>
          <p>
            Xの公式フロントエンドを直接呼び出す設計とすることで、アカウント凍結のリスクを極限まで抑えています。
          </p>
          <p>
            Open-Deck はオープンソースで開発されており、発展途上のソフトウェアです。<br></br>
            ユーザーの方々からのフィードバックを随時、歓迎しております！<br></br>
            GitHub Issue はもちろん、専用のフォームより匿名で開発者へフィードバックが可能です！
          </p>

          {/* スクリーンショット */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <img
              src="img/screenshot/extension.png"
              alt="拡張機能版のスクリーンショット"
              className="zoomable"
              style={{
                width: "100%",
                maxWidth: "400px",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              }}
            />
            <img
              src="img/screenshot/desktop.png"
              alt="デスクトップアプリ版のスクリーンショット"
              className="zoomable"
              style={{
                width: "100%",
                maxWidth: "400px",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              }}
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}
