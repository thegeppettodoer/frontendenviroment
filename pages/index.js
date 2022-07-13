import Head from 'next/head'
 // import Link from "next/link";
// import envApi from "https://demonext.blob.core.windows.net/demo/env.json";
import React, { useState,useEffect } from 'react'; // <--- import the hook
 


  
 

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [host, setHost] = useState([]);

  
  useEffect( () => { 
    async function fetchData() {
      try {

        const hostname = window && window.location && window.location.hostname;
        console.log("hostname:",hostname);
        setHost(hostname);
        var url = 'http://ec2-3-84-30-125.compute-1.amazonaws.com:3001/';
        var envLocal = localStorage.getItem("env");
        if(!(envLocal!==null & envLocal !=='' & envLocal !==undefined))
        { 
        fetch(url, {
          method: 'GET', 
           headers:{
            'Content-Type': 'application/json',
            'enviroment':"www.aws.com"
          }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {

          console.log('Se ejecuta fetch para obtener variables de entorno:'); 
          console.log('xSuccess:', response) ;
          // console.log('xenvApi:',   response.apiUrl)
          // console.log('xenvApi:', typeof response.apiUrl)
          // if( response.apiUrl)
          localStorage.setItem("env",JSON.stringify(response));
            setPosts(JSON.stringify(response));

         });
        }else{
          setPosts(localStorage.getItem("env"));

        }

      } catch (err) {
          console.log(err);
      }
  }
  fetchData();

 
    return {

    }
  }, []);


   return (
    <div className="container">
      <Head>
        <title>{posts}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code> 
  </p>
          <p>" envVar.apiUrl:" </p>
          <p className='post'> { posts} </p>
          <p> Hostname: </p>
          
       
        <h1>{JSON.stringify(host)}</h1>

      </main>

      <footer>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        .post{
          color:#c43
        }
      `}</style>
    </div>
  )
}





// URL general env.json

//   'https://demonext.blob.core.windows.net/demo/env';


// .......................

// qa...swasp
// dev
// prod
// dummy



// .env

// env   ( enviroment,localhost/source)
//              .....dev
//               ....qa
//                 ..prod



 



