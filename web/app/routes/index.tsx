import { createFileRoute } from "@tanstack/react-router"

function RouteComponent() {
  return (
    <>
      <div className="h-screen flex items-center justify-center text-2xl md:text-4xl flex-col gap-4 w-[70%] m-auto min-h-screen">
        <p>
          I work on{" "}
          <a href="https://github.com/learn-anything/learn-anything">
            learn anything
          </a>{" "}
          and <a href="https://github.com/nikitavoloboev">other things</a>.
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
          I have a <a href="https://wiki.nikiv.dev">wiki</a>. My previous site
          is <a href="https://23-personal.nikiv.dev">here</a>.
        </p>
      </div>
    </>
  )
}

export const Route = createFileRoute("/")({
  component: RouteComponent,
})
