import { Chat } from "@/components/chat";
import { GameSettings } from "@/components/game-settings";
import { LiveblocksRoom } from "@/components/liveblocks-room";
import { Share } from "@/components/share";
import { Mistakes } from "@/components/mistakes";
import { ModeToggle } from "@/components/mode-toggle";
import { Numpad } from "@/components/num-pad";
import { SidePanel } from "@/components/side-panel";
import { Sudoku } from "@/components/sudoku/sudoku";
import { Timer } from "@/components/timer";
import { Toolbar } from "@/components/toolbar";
import { NotesProvider } from "@/app/context/notes-context";
import { TableCellProvider } from "@/app/context/tablecell-context";

export default async function Room({ params }: { params: { id: string } }) {
  return (
    <LiveblocksRoom roomId={params.id}>
      <div className="grid grid-cols-6 gap-2 px-2 pt-2 pb-4 md:gap-4 md:rounded-xl md:border md:p-6 sm:shadow mx-1">
        <div className="order-1 col-span-6 flex h-8 items-center justify-between sm:border-b sm:pb-4">
          <Timer />
          <Mistakes />
          <div className="flex gap-2">
            <ModeToggle />
            <Share />
            <GameSettings />
          </div>
        </div>
        <div className="order-4 col-span-1 hidden h-full space-y-3 rounded border p-3 sm:order-2 sm:col-span-1 sm:grid">
          <SidePanel />
        </div>
        <NotesProvider>
          <TableCellProvider>
            <div className="order-2 col-span-6 flex size-full place-items-center sm:order-3 sm:col-span-3 sm:p-0">
              <div className="flex size-full place-items-center">
                <Sudoku />
              </div>
            </div>
            <div className="order-3 col-span-6 my-4 px-1 sm:hidden">
              <div className="flex w-full gap-2">
                <Numpad />
              </div>
            </div>
            <div className="order-5 col-span-6 mt-2 flex size-full flex-col gap-1 sm:order-4 sm:col-span-2 sm:m-0 sm:grid">
              <Chat />
              <div className="hidden h-full max-h-full grid-cols-5 gap-2 sm:grid">
                <Numpad />
              </div>
            </div>
            <div className="order-3 col-span-6 mt-1 flex items-center justify-around sm:order-5 sm:col-span-3 sm:col-start-2">
              <Toolbar />
            </div>
          </TableCellProvider>
        </NotesProvider>
      </div>
    </LiveblocksRoom>
  );
}
