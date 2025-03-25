import { Link } from "react-router";
import { Letter } from "../types/Letter";
import { useEffect, useState } from "react";
import styles from "./LetterListItem.module.css";

type LetterProps = {
    letter: Letter;
}

export const LetterListItem = ({ letter }: LetterProps) => {

  console.log(styles)

  const [generated, setGenerated] = useState(letter.generated);
  const [hovered, setHovered] = useState(false)

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
    <div
      // style={{
      //   padding: "16px",
      //   border: "1px solid white",
      //   borderRadius: `${borderRadius}px`,
      //   transition: "all .3s ease",
      // }}
      className={
        `${styles["list-item"]} ${hovered ? styles.hovered : ""}`
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
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