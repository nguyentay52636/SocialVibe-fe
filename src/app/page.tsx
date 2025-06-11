import { Header } from "@/components/layout/Header/header";
import { Sidebar } from "@/components/layout/Sidebar/siderbar";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Social Vibe
        </h1>
        <p className="text-center text-lg text-muted-foreground">
          A modern social media platform
        </p>
      </div>
    </main>
  );
}
