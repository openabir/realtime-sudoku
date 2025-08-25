import { Chat } from "@/components/chat";
import { GameSettings } from "@/components/game-settings";
import { LiveblocksRoom } from "@/components/liveblocks-room";
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
      <div className="grid grid-cols-6 gap-2 px-2 pt-2 pb-4 lg:gap-4 lg:rounded-xl lg:border lg:p-6 sm:shadow mx-1">
        {/* Header */}
        <div
          className="order-1 col-span-6 flex h-8 items-center justify-between sm:pb-4"
          style={{ borderBottom: "1px solid rgba(255, 87, 0, 0.2)" }}
        >
          <div className="flex items-center gap-4">
            <h1
              className="text-lg font-bold lg:hidden"
              style={{ color: "#ff5700" }}
            >
              SUDOKU realtime
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Timer />
            <Mistakes />
          </div>
          <div className="flex gap-2">
            <ModeToggle />
            <GameSettings />
          </div>
        </div>

        {/* Sidebar - only visible on large screens */}
        <div className="hidden lg:order-2 lg:col-span-1 lg:grid h-full space-y-3 rounded border p-3">
          <SidePanel />
        </div>

        <NotesProvider>
          <TableCellProvider>
            {/* Sudoku Grid */}
            <div className="order-2 col-span-6 flex size-full place-items-center sm:order-2 sm:col-span-4 lg:order-3 lg:col-span-3 sm:p-0">
              <div className="flex size-full place-items-center">
                <Sudoku />
              </div>
            </div>

            {/* Chat Section - beside grid on medium screens */}
            <div className="order-5 col-span-6 mt-2 flex size-full flex-col gap-1 sm:order-3 sm:col-span-2 sm:mt-0 sm:flex sm:flex-col sm:h-full sm:justify-between lg:order-4 lg:col-span-2 lg:h-full lg:max-h-full sm:m-0">
              <div className="flex-1">
                <Chat />
              </div>
              {/* Toolbar positioned at bottom of chat column on medium screens */}
              <div className="hidden sm:flex sm:items-center sm:justify-center sm:gap-2 sm:py-2 lg:hidden">
                <Toolbar />
              </div>
            </div>

            {/* Toolbar - original positioning for small and large screens */}
            <div className="order-3 col-span-6 flex items-center justify-around sm:hidden lg:order-5 lg:col-span-3 lg:col-start-2 lg:flex lg:flex-row lg:justify-around lg:mt-1">
              <Toolbar />
            </div>

            {/* Mobile Numpad - only visible on small screens */}
            <div className="order-4 col-span-6 my-4 px-1 sm:hidden">
              <div className="grid grid-cols-5 w-full gap-2">
                <Numpad />
              </div>
            </div>

            {/* Medium Screen Numpad - below toolbar */}
            <div className="hidden sm:order-5 sm:col-span-6 sm:grid sm:grid-cols-10 sm:gap-2 sm:mt-2 lg:hidden">
              <Numpad />
            </div>

            {/* Large Screen Numpad - inside chat section */}
            <div className="hidden lg:order-6 lg:col-span-2 lg:grid lg:grid-cols-5 lg:gap-2 lg:h-full lg:max-h-full">
              <Numpad />
            </div>
          </TableCellProvider>
        </NotesProvider>
      </div>
    </LiveblocksRoom>
  );
}
