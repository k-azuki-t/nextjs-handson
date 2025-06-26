import Image from "next/image"
export const dynamic = 'force-dynamic'; // This will force the page to be rendered on the server side

export default async function SSRPage() {

    const res = await fetch('https://dog.ceo/api/breeds/image/random', {
        cache: 'no-store', // Disable caching to ensure fresh data on each request
    })

    const resJson = await res.json()
    const image = resJson.message

    const timestamp = new Date().toISOString()

  return (
    <div>
        SSR リクエストごとに生成: {timestamp}
        <Image src={image} width={400} alt="" />
    </div>
  )
}
