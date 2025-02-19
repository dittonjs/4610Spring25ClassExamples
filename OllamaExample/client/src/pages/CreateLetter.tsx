import { useState } from "react";

export function CreateLetter() {
  const [name, setName] = useState("")
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // todo submit this
  }

  return (
    <div className="new-letter-form">
      <h3>New Letter</h3>
      <form onSubmit={handleSubmit} className="letter-form">
        <div className="field">
          <label htmlFor="name">Person Name</label>
          <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
        </div>
        <div className="field">
          <label htmlFor="job-title">Job Title</label>
          <input type="text" name="job-title" value={jobTitle} onChange={e => setJobTitle(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="company-name">Company Name</label>
          <input type="text" name="company-name" value={companyName} onChange={e => setCompanyName(e.target.value)} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
