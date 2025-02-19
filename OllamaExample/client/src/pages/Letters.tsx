import { useEffect } from "react";
import { Link } from "react-router";

export function Letters() {
  useEffect(() => {
    fetch("/fib")
      .then(res => res.json())
      .then(console.log);
  }, [])
  return (
    <div className="letters">
      <Link to="/new" className="new-letter">+ New Letter of Recommendation</Link>
    </div>
  );
}
