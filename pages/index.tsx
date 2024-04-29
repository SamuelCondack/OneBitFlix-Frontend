import Head from "next/head";
import styles from '../styles/HomeNoAuth.module.scss'

const HomeNotAuth = () => {
  return (
		<>
			<Head>
				<title>Onebitflix</title>
				<link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
				<meta property="og:title" content="Onebitflix" key="title"/>
				<meta name="description" content="Have access to the best programming content in a simple and easy way!"/>
			</Head>
			<main></main>
		</>
  )    
};

export default HomeNotAuth;