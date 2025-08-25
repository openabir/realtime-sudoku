"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useOthersListener } from "@liveblocks/react/suspense";
import { Link, Share2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { use, useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { toast } from "sonner";

export const Share = () => {
  const [shareableLink, setShareableLink] = useState("");
  const [copyText, setCopyText] = useState("copy link");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareableLink(window.location.href);
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(shareableLink)
      .then(() => {
        setCopyText("Copied!");
        setTimeout(() => {
          setCopyText("copy link");
        }, 2000);
      })
      .catch((error) => {
        toast.error("Failed to copy Link", error);
        setCopyText("Failed to copy");
      });
  };
  return (
    <Dialog>
      <DialogTrigger className="" asChild>
        <button>
          <Share2 className="h-6 w-6" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-xl border-[#ff5700]/20 shadow-xl/10 shadow-[#ff5700]">
        <DialogHeader>
          <div>
            <DialogTitle>
              <h1 className="text-2xl">Share this game</h1>
            </DialogTitle>
          </div>
        </DialogHeader>
        <hr />
        <div className="mt-4 flex flex-col gap-4">
          <DialogDescription>
            Share this game with your friends!
          </DialogDescription>
          <div className="flex place-items-center gap-2 text-white">
            <Input
              type="text"
              value={shareableLink}
              readOnly
              // Automatically select the text on click for easy manual copying
              onClick={(e) => (e.target as HTMLInputElement).select()}
              className="flex-1"
              aria-label="Shareable link"
            />
            <Button className="cursor-pointer" onClick={handleCopy}>
              <Link />
              {copyText}
            </Button>
          </div>
          <DialogDescription>or, Scan the code to join:</DialogDescription>
          <div className="flex justify-center">
            <div className="border bg-white p-2 rounded">
              <QRCode
                value={shareableLink}
                size={100}
                bgColor={"#fff"}
                fgColor={"#ff5700"}
                level={"M"}
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
