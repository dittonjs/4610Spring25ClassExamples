import { useEffect, useState } from "react"
import { Letter } from "../types/Letter"
import { useParams } from "react-router"

export const LetterScreen = () => {
  const [letter, setLetter] = useState<Letter | null>(null)

  const {id} = useParams()

  const fetchLetter = async () => {
    const response = await fetch(`/api/letters/${id}`)
    if (!response.ok) {
      console.log("Letter not found")
    }
    const data = await response.json()
    setLetter(data.letter)
  }

  useEffect(() => {
    fetchLetter()
  }, [id])

  if (!letter) {
    return <div>Loading...</div>
  }

  return (
    <div className="letter-screen">
      <h1>{letter.title}</h1>
      <pre>{letter.content}</pre>
    </div>
  )
}