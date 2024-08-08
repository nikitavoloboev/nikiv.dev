import type * as Schema from "ronin/schema"

type Image = Schema.Record<{
	name: string
	content: Blob
}>

type Images = Schema.Records<Image>

declare module "ronin" {
	export interface Schemas {
		image: Image
		images: Images
	}
}
