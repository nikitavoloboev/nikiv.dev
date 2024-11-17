import { Outlet, createFileRoute } from "@tanstack/react-router"

function LayoutComponent() {
  return (
    <>
      <Outlet />
    </>
  )
}

export const Route = createFileRoute("/_layout")({
  component: LayoutComponent,
})
