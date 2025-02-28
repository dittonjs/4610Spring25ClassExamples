import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./CreateLetter.module.css";

export function CreateLetter() {
  const [title, setTitle] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("/api/letters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title }),
    })
    navigate("/");
  }

  return (
    <div className="global">
      <h3>New Letter</h3>
      <form onSubmit={handleSubmit} className="letter-form">
        <div className="field">
          <label htmlFor="name">Letter Title</label>
          <input type="text" name="name" value={title} onChange={e => setTitle(e.target.value)}/>
        </div>
        <button
          
          className="rounded-xl p-8 border border-white"
          type="submit"
        >Create</button>
      </form>
    </div>
  );
}
