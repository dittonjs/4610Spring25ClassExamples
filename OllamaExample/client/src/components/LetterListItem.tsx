import { Link } from "react-router";
import { Letter } from "../types/Letter";
import { useEffect, useState } from "react";

type LetterProps = {
    letter: Letter;
}

export const LetterListItem = ({ letter }: LetterProps) => {

  const [generated, setGenerated] = useState(letter.generated);

  useEffect(() => {
    if (!generated) {
      const interval = setInterval(async () => {
        const response = await fetch(`/api/letters/${letter.id}`);
        const data = await response.json();
        if (data.letter.generated) {
          setGenerated(true);
          clearInterval(interval);
        }
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [generated]);

  return (
    <div className="letter">
      {
        generated ? (
          <Link to={`/letters/${letter.id}`}>{letter.title}</Link>
        ) : (
          <div className="letter-title">
            {letter.title}
            <span className="not-generated">Generating...</span>
          </div>
        )
      }
    </div>
  );
}