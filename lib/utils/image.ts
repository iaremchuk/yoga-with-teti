import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "@/lib/sanity/sanity";

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
