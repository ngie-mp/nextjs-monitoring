import React from 'react'

export default async function getAccred(id: number) {
    const res = await fetch(`https://accred-api-test.epfl.ch/nestjs-api/accreds/${id}`);
    
    console.log('API Response:', res);

    if (!res.ok) {
        throw new Error('Failed to fetch accred');
    }

    const data = await res.json();
   

    console.log('Accred by id:', data);

    return JSON.parse(data)
    
}



