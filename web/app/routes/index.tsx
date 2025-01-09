import { createFileRoute } from "@tanstack/react-router"

function RouteComponent() {
  return (
    <>
      <div className="h-screen flex items-center justify-center text-2xl md:text-4xl flex-col gap-4 w-[70%] m-auto min-h-screen">
        <p>
          I work on <a href="https://learn-anything.xyz">learn-anything.xyz</a>,{" "}
          <a href="https://github.com/solbond/solbond">solbond.co</a> and{" "}
          <a href="https://github.com/nikitavoloboev">things</a>.
        </p>
        <p>
          I share thoughts on <a href="https://x.com/nikitavoloboev">X</a>,
          photos on <a href="https://instagram.com/nikitavoloboev">IG</a>, songs
          on <a href="https://open.spotify.com/user/nikitavoloboev">Spotify</a>.
        </p>
        <p className="mt-5">
          In Madrid now. <a href="https://x.com/nikitavoloboev">Reach out</a> if
          you want to talk.
        </p>
        <p>
          I have a <a href="https://docs.nikiv.dev">wiki</a> of things I{" "}
          <a href="https://docs.nikiv.dev/learn">know</a> or{" "}
          <a href="https://docs.nikiv.dev/likes">liked</a>.
        </p>
      </div>
    </>
  )
}

export const Route = createFileRoute("/")({
  component: RouteComponent,
})
