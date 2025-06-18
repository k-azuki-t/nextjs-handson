// ダミーデータ
// アプリ全体に影響するレイアウト
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブログ記事一覧",
  description: "ブログ記事一覧が表示されます。",
};

const articles = [
  {
    id: 1,
    title: "初めてのブログ記事",
    content: "これは初めてのブログ記事です。",
    date: "2023-10-01",
  },
  {
    id: 2,
    title: "次の記事",
    content: "これは次の記事の内容です。",
    date: "2023-10-02",
  },
];

// 3秒待機
async function fetchArticles() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
//   throw new Error("データ取得に失敗しました。");
  return articles;
}

export default async function Blog() {
    const articles = await fetchArticles();
  return (
    <div>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <title>{article.title}</title>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <small>{article.date}</small>
          </li>
        ))}
      </ul>
    </div>
  )
}
