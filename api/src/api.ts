import { cors } from "@elysiajs/cors"
import { Elysia, t } from "elysia"
import { batch, count, create, get, set } from "ronin"

const app = new Elysia()
  .onError(({ error }) => {
    console.log(error, "error")
    return new Response(error.toString())
  })
  .use(cors())
  .get("/", async () => {
    return "ok"
  })
  .post(
    "/save-link",
    async ({ body }) => {
      const {} = body
    },
    {
      body: t.Object({
        title: t.String(),
        url: t.String(),
        top: t.Optional(t.Boolean()),
      }),
    },
  )
  .listen(process.env.PORT ?? 8787)

export type App = typeof app

console.log(`Server is running at ${app.server?.hostname}:${app.server?.port}`)
