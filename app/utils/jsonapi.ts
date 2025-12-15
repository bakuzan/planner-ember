export interface JsonApiAttributes {
  [key: string]: unknown;
}

export interface JsonApiResourceIdentifier {
  id: string;
  type: string;
}

export interface JsonApiRelationship {
  data: JsonApiResourceIdentifier | JsonApiResourceIdentifier[] | null;
  links: Record<string, unknown>;
}

export interface JsonApiResource<
  T extends JsonApiAttributes = JsonApiAttributes,
> {
  id: string;
  type: string;
  attributes: T;
  relationships?: Record<string, JsonApiRelationship>;
}

export interface JsonApiDocument {
  data: JsonApiResource | JsonApiResource[];
  included?: JsonApiResource[];
}

/**
 * Convert a plain object into a JSON:API resource.
 */
export function jsonApiResource<
  T extends { id: string | number } & JsonApiAttributes,
>(
  type: string,
  record: T,
  relationships: Record<string, JsonApiRelationship> = {}
): JsonApiResource {
  const { id, ...attributes } = record;

  return {
    id: String(id),
    type,
    attributes,
    relationships: Object.keys(relationships).length
      ? relationships
      : undefined,
  };
}

/**
 * Convert an array of records into a JSON:API collection.
 */
export function jsonApiCollection<
  T extends { id: string | number } & JsonApiAttributes,
>(
  type: string,
  records: T[],
  relationshipFn: (
    record: T
  ) => Record<string, JsonApiRelationship> = () => ({})
): JsonApiDocument {
  return {
    data: records.map((r) => jsonApiResource(type, r, relationshipFn(r))),
  };
}

/**
 * Wrap a resource or collection into a full JSON:API document.
 */
export function jsonApiDocument(
  data: JsonApiResource | JsonApiResource[],
  included: JsonApiResource[] = []
): JsonApiDocument {
  return included.length ? { data, included } : { data };
}
