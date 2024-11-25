import { useNavigate } from "@tanstack/react-router"

export function NotFound() {
  const navigate = useNavigate()
  navigate({ to: "/" })
  return <></>
}
