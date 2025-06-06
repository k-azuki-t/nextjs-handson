type Params = {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogPage({params}: Params) {
    const { id } = await params; // Extracting the id from params
  return (
    <div>
      ブログID： {id}
    </div>
  )
}
