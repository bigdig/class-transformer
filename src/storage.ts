import { MetadataStorage } from "./metadata/MetadataStorage.ts";

/**
 * Default metadata storage is used as singleton and can be used to storage all metadatas.
 */
export const defaultMetadataStorage = new MetadataStorage();
