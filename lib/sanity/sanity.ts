import { createClient } from "next-sanity";

const config = {
  projectId: "omv1a8c0",
  dataset: "production",
  apiVersion: "2024-03-23",
  useCdn: true,
};

export const client = createClient(config);
