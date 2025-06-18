import ClientComponent from "@/components/ClientComponent";

export default function ServerComponent() {
    console.log('ServerComponentがレンダリングされました');
  return (
    <div>
      サーバー
      <ClientComponent />
    </div>
  )
}
