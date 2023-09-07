import { Metadata } from 'next/types'
import { notFound } from 'next/navigation'
import getAccred from '@/lib/getAccred'
import getAllAccreds from '@/lib/getAllAccreds'
import { Suspense } from 'react'

type Params = {
    params: {
        id: string // Change this to string
    }
}

export async function generateMetadata({ params: { id } }: Params): Promise<Metadata> {
    const accredData: Promise<Accred> = getAccred(parseInt(id, 10))
    const accred: Accred = await accredData

    if (!accred.id) {
        return {
            title: "Accred Not Found"
        }
    }

    return {
        title: `This is accred id: ${accred.id}`,
        description: `This is the page of ${accred.id}`
    }
}

export default async function AccredPage({ params: { id } }: Params) {
    const accredData: Promise<Accred> = getAccred(parseInt(id, 10))
    const accred =  accredData

    console.log('Fetched accred data:', accred);

    if (!accred.id) {
        console.log('Accred data does not have an ID');
        notFound();
    }

    return (
        <Suspense fallback={<h2>Loading...</h2>}>
            {/* Include the components or content you want to render */}
            <h1>Accred Page</h1>
            {/* Add more content here */}
        </Suspense>
    )
}

export async function generateStaticParams() {
    const accredData: Promise<Accred[]> = getAllAccreds()
    const accreds = await accredData

    return accreds.map(accred => ({
        accredId: accred.id.toString() // Use "accredId" instead of "id"
    }))
}

