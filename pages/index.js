import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from "../utils/request"

export default function Home({results}){
  console.log(results)
  return (
    <div className={styles.container}>
    <Head>
      <title>Hulu 2.0</title>
    </Head>
    <body className=''>
    {/* HEADER */}
    <Header/>
    <Nav/>
    <Results results={results}/>

    </body>
      
    </div>
  )
}

export async function getServerSideProps(context){
  const genre = context.query.genre

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
  ).then(res => res.json());
  return{
    props: {
      results: request.results
    }
  }
}
