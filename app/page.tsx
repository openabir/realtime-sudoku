import { StartGameDialog } from "@/components/start-game-dialog"


export default function Home() {
  return (
    <main className="relative mx-auto max-w-xl px-6 overflow-hidden ">
      <div className="flex w-xl items-center justify-center py-12 lg:grid lg:min-h-[600px] xl:min-h-[800px]">
        <StartGameDialog />
      </div>
    </main>
  );
}
