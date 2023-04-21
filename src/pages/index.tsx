import Header from "@/components/Header/Header";
import Login from "@/components/Login/Login";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <Login />
    </main>
  );
}
