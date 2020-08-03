import Head from 'next/head';
import styles from '../styles/Home.module.css';
import useSWR from 'swr';
import Article from '../components/Article.js';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
    let getArticlesOrError = () => {
        const {data, error} = useSWR('api/nyt', fetcher, {revalidateOnFocus: false});
        if (error) {
            return <p>Failed to load.</p>;
        } else if (!data) {
            return <p>Loading..</p>;
        }
        console.log(data);
        let articles = data.response.docs;
        return (
            <div className={styles.grid}>
            {articles.map((article) => {
                return <Article name={article.headline.main}
                                href={article.web_url}
                                description={article.abstract}/>;
            })}
            </div>
        );
    };
    
    return (
        <div className={styles.container}>
          <Head>
            <title>One Hundred Two</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
            <h1 className={styles.title}>
	      One Hundred Two
            </h1>

            <p className={styles.description}>
	      As featured in the <a href="https://nyt.com">New York Times</a>.
            </p>
            {getArticlesOrError()}
          </main>

          <footer className={styles.footer}>
            <a
              href="https://zeke.works"
              target="_blank"
              rel="noopener noreferrer"
            >
              Made by <strong>Zeke</strong>
            </a>
          </footer>
        </div>
    );
}
