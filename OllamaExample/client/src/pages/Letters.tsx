import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Letter } from "../types/Letter";
import { LetterListItem } from "../components/LetterListItem";

export function Letters() {
  const [letters, setLetters] = useState<Letter[]>([]);
  
  const fetchLetters = async () => {
    const response = await fetch("/api/letters");
    const data = await response.json();
    setLetters(data.letters);
  }

  useEffect(() => {
    fetchLetters();
  }, [])


  return (
    <div className="letters">
      <Link to="/new" className="new-letter">+ New Letter of Recommendation</Link>
      <div className="letter-list">
        {letters.map(letter => (
          <LetterListItem key={letter.id} letter={letter} />
        ))}
      </div>
    </div>
  );
}
