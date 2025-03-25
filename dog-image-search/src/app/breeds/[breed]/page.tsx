import Image from "next/image";

type BreedProps = {
  params: Promise<{breed: string}>
}

export default async function Breed({params}: BreedProps) {
  const { breed } = await params;
  const res = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
  const { message } = await res.json();
  return (
    <div>
      <h1>Welcome {breed}</h1>
      <div>
        <h2>Here are some pictures of {breed}s:</h2>
        <ul>
          {message.map((url: string) => (
            <li key={url}>
              <Image src={url} alt={breed} width={200} height={200}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
