import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					I'm a (mostly) self-taught developer, and this is my stab at learning
					Next.js. I'm really excited at all the features Next.js has to offer
					and can't wait to put these things to good use on a real project.
				</p>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h1 className={`${utilStyles.headingLg}`}>Blog</h1>
				<ul className={`${utilStyles.list}`}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={`${utilStyles.listItem}`} key={id}>
							<Link href={`/posts/${id}`}>{title}</Link>
							<br />
							<small className={utilStyles.lightText}>{date}</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
