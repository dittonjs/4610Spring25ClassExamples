import { useEffect, useState } from "react";

export function usePasswords() {
    const [passwords, setPasswords] = useState<string[]>([]);

    const loadPasswords = async () => {
      const response = await fetch('/passwords');
      const data = await response.json();
      setPasswords(data.passwords);
    }

    useEffect(() => {
      loadPasswords();
    }, [])

    return [passwords, loadPasswords] as const;
}
