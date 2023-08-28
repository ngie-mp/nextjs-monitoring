import type { Metadata } from "next";
import getAllAccreds from '@/lib/getAllAccreds'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Accreds',
}

export default async function Accreds() {
    const accredsData: Promise<Accred[]> = getAllAccreds()

    const accreds = await accredsData
    console.log('on terminal',accreds)

    const content = (
    <section>
        <h1>Requesting of Nest.JS API</h1>
        <Link href='/about'>👈🏼 go back</Link>
        <br />
        {
        
            accreds.map(accred => {
            console.log('on terminal',accreds)
            return (
                <>
                <></>
                
                <p key={accred.id}>
                    <Link href={`/accreds/${accred.id}`}>{accred.statusId}</Link>
                </p>
                </>
            )
            })
        }
    </section>
  )

  return content;
  

}