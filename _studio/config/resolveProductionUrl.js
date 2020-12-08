// import { findEnv } from "./findEnv";
// dotenv.config({ path: findEnv() });

const PREVIEW_URL =
  process.env.SANITY_ACTIVE_ENV !== "development"
    ? process.env.BASE_URL
    : "http://localhost:3000";

export default function resolveProductionUrl(document) {
  return `${PREVIEW_URL}/${document.slug}`;
}
