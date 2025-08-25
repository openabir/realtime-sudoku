"use client"

import { randomId } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { DIFFICULTIES } from "@/lib/constants"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import { GameDialog } from "./initial-dialog"
import { SubmitButton } from "./submit"

export function StartGameDialog() {
  const [difficulty, setDifficulty] = useState("")
  const [input, setInput] = useState("")
  const [loadingText, setLoadingText] = useState("Start game")

  const router = useRouter()

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input || !difficulty) {
      return
    }
    setLoadingText("Creating game...")
    localStorage.setItem("name", input)

    const id = randomId(23)
    try {
      //create room and initialize storage
      const response = await fetch("/api/rooms/", {
        method: "POST",
        body: JSON.stringify({
          id,
          difficulty: difficulty.toLowerCase()
        })
      })

      if (response.ok) {
        setLoadingText("Game created!")
        router.push(`/room/${id}`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const isDisabled = !input || !difficulty || loadingText === "Creating game..."

  return (
    <GameDialog onSubmit={onSubmitHandler}>
      <div className="grid gap-2">
        <Label>Name</Label>
        <Input
          placeholder="Enter your name"
          minLength={1}
          id="name"
          type="text"
          required
          value={input}
          className="peer [&:user-invalid:not(:focus)]:border-red-500"
          onChange={(e) => setInput(e.target.value)}
        />
        <p className="hidden text-red-500 text-sm peer-[&:user-invalid:not(:focus)]:block">
          This field is required
        </p>
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="password">Difficulty</Label>
        </div>
        <ToggleGroup
          type="single"
          className="w-full gap-2 flex-col items-start"
          onValueChange={(type) => setDifficulty(type)}
        >
          {DIFFICULTIES.map((difficulty) => (
            <ToggleGroupItem
              key={difficulty}
              value={difficulty}
              aria-label={`Toggle ${difficulty}`}
              className="w-full rounded-md border px-3 py-2 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
            >
              {difficulty}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      <SubmitButton loadingText={loadingText} isDisabled={isDisabled} />
    </GameDialog>
  )
}
