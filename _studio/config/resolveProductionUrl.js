// import { findEnv } from "./findEnv";
// dotenv.config({ path: findEnv() });
import getDocumentTypePreviewUrl from '../util/lib/getDocumentTypePreviewUrl'

/**
 * 
 * @param {sanityDocument} document 
 * @returns {String}
 */

export default function resolveProductionUrl(document) {
  return getDocumentTypePreviewUrl(document)
}
