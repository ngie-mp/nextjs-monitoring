import getAllAccreds from '@/lib/getAllAccreds'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'aazsdfzdxf',
}

export default async function About() {
  const accredsData: Promise<Accred[]> = getAllAccreds()

  const accreds = await accredsData
  
  console.log('On About Page');

  // const content = (
  //     <section>
  //       <h1>About page API</h1>
  //       <Link href='/'>home</Link>
  //       <br />
        
  //       {
        
        
  //       accreds.map(accred => {
  //         console.log(accreds)
  //         return (
  //           <>
  //             <></>
  //             <h2>This is just an about page</h2>
  //             <p key={accred.persId}>
  //               <Link href={`/accreds/${accred.id}`}>{accred.statusId}</Link>
  //             </p>
  //           </>
  //         )
  //       })}
  //     </section>
  // )

  // return content;

  return (
    <>
        <h1>About page</h1>
        <Link href='/'>🏠 home </Link>
        <br />
    </>
  )
}
