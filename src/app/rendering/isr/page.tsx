import Image from "next/image"
export const revalidate = 10; // This will revalidate the page every 10 seconds

export default async function SSGPage() {

    const res = await fetch('https://dog.ceo/api/breeds/image/random', {
      next: {
        revalidate: 10, // This will revalidate the page every 10 seconds
      }
    })

    const resJson = await res.json()
    const image = resJson.message

    const timestamp = new Date().toISOString()

  return (
    <div>
    SSG 10秒ごとにリロード: {timestamp}
      <Image src={image} width={400} alt="" />
    </div>
  )
}
