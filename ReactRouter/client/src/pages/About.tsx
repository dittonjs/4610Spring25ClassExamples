import { useEffect } from "react"
import { useTitle } from "../hooks/useTitle"
import { useParams } from "react-router"

export function About() {
  useTitle('about')
  const params = useParams()

  return (
    <div>
      <h1>About</h1>
      <p>This is the about page. Id is {parseInt(params.id!)}</p>
    </div>
  )
}
