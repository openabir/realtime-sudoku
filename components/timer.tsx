"use client";

import { useMutation, useStorage } from "@liveblocks/react/suspense";
import { PauseCircle, PlayCircle } from "lucide-react";
import { useEffect, ReactElement } from "react";

export function Timer() {
  const time = useStorage((root) => root.time);
  const isRunning = useStorage((root) => root.isRunning);
  const isSolved = useStorage((root) => root.isSolved);
  const mistakeCount = useStorage((root) => root.mistakeCount);

  const isDisabled = isSolved || mistakeCount === 3;

  const start = useMutation(({ storage }) => {
    storage.set("isRunning", true);
  }, []);

  const pause = useMutation(({ storage }) => {
    storage.set("isRunning", false);
  }, []);

  const update = useMutation(({ storage }) => {
    storage.set("time", (storage.get("time") || 0) + 1);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning) {
        update();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [time, isRunning, update]);

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const buttonWrapper = (component: ReactElement, func: () => void) => {
    return (
      <button
        disabled={isDisabled}
        className="disabled:opacity-50 transition-colors duration-200"
        style={{
          color: isRunning && !isDisabled ? "#ff5700" : "#ff5700",
        }}
        onClick={func}
      >
        {component}
      </button>
    );
  };

  return (
    <div className="flex items-center gap-2">
      <span className="font-mono text-muted-foreground">
        {formatTime(time)}
      </span>
      {isRunning
        ? buttonWrapper(<PauseCircle />, pause)
        : buttonWrapper(<PlayCircle />, start)}
    </div>
  );
}
