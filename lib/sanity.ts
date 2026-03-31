import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "omv1a8c0", // replace this
  dataset: "production",
  apiVersion: "2026-03-23",
  useCdn: true,
});