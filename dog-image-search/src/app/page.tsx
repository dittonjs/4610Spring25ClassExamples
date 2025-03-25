import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


export default async function Home() {
  const res = await fetch("https://dog.ceo/api/breeds/list/all");
  const { message } = await res.json();

  return (
    <div className={styles.page}>
      <h1>Welcome to my app!</h1>
      <div>
        <h2>Here are some dog breeds:</h2>
        <ul>
          {Object.keys(message).map((breed) => (
            <li key={breed}>
              <Link  href={`/breeds/${breed}`}>
                {breed.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
