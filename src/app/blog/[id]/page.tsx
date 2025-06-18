type Params = {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({params}: Params) {
  const { id } = await params; // Extracting the id from params
  return {
    title: `ブログ記事 ${id}`,
    description: `ブログ記事の詳細ページです。記事ID: ${id}`,
  };
}

export default async function BlogPage({params}: Params) {
    const { id } = await params; // Extracting the id from params
  return (
    <div>
      ブログID： {id}
    </div>
  )
}
