type PasswordProps = {
  password: string;
  onClick: () => void;
}
export function Password({ password, onClick }: PasswordProps) {
  return (
    <div className="password" role="button" onClick={onClick}>
      {password}
    </div>
  )
}
