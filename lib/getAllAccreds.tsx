
export default async function getAllAccreds() {
    const res = await fetch('https://accred-api-test.epfl.ch/nestjs-api/accreds')
    // const res = await fetch('https://accred-api-test.epfl.ch/v1/accreds')

    if (!res.ok) throw new Error('failed to fetch data')
    
    const data = await res.json();

    console.log('accreds fetch ', data);
  
    // return data.accreds; // Return the "accreds" array''
    return data; // Return the "accreds" array
}
