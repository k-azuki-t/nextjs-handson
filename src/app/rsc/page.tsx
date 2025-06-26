import ClientComponent from "@/components/ClientComponent";
import Link from "next/link";

export default function ServerComponent() {
    console.log('ServerComponentがレンダリングされました');
  return (
    <div>
      サーバー
      <ClientComponent />
      <Link href="/about">About</Link>
    </div>
  )
}
