import { createClient } from "@sanity/client";
import type { ClientConfig, SanityClient } from "@sanity/client";

const config: ClientConfig = {
  projectId: "omv1a8c0",
  dataset: "production",
  apiVersion: "2026-03-23",
  useCdn: true,
};

export const client: SanityClient = createClient(config);
