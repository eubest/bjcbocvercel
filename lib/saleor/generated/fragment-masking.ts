import type { ResultOf, DocumentTypeDecoration } from '@graphql-typed-document-node/core';

export type FragmentType<TDocumentType extends DocumentTypeDecoration<any, any>> =
  TDocumentType extends DocumentTypeDecoration<infer TType, any>
  ? TType extends { ' $fragmentName'?: infer TKey }
  ? TKey extends string
  ? { ' $fragmentRefs'?: { [key in TKey]: TType } }
  : never
  : never
  : never;

// return non-nullable if `fragmentType` is non-nullable
export function useFragment<TType>(
  _documentNode: DocumentTypeDecoration<TType, any>,
  fragmentType: FragmentType<DocumentTypeDecoration<TType, any>>,
): TType;
// return nullable if `fragmentType` is nullable
export function useFragment<TType>(
  _documentNode: DocumentTypeDecoration<TType, any>,
  fragmentType: FragmentType<DocumentTypeDecoration<TType, any>> | null | null,
): TType | null | null;
// return array of non-nullable if `fragmentType` is array of non-nullable
export function useFragment<TType>(
  _documentNode: DocumentTypeDecoration<TType, any>,
  fragmentType: ReadonlyArray<FragmentType<DocumentTypeDecoration<TType, any>>>,
): ReadonlyArray<TType>;
// return array of nullable if `fragmentType` is array of nullable
export function useFragment<TType>(
  _documentNode: DocumentTypeDecoration<TType, any>,
  fragmentType: ReadonlyArray<FragmentType<DocumentTypeDecoration<TType, any>>> | null | null,
): ReadonlyArray<TType> | null | null;
export function useFragment<TType>(
  _documentNode: DocumentTypeDecoration<TType, any>,
  fragmentType:
    | FragmentType<DocumentTypeDecoration<TType, any>>
    | ReadonlyArray<FragmentType<DocumentTypeDecoration<TType, any>>>
    | null
    | null,
): TType | ReadonlyArray<TType> | null | null {
  return fragmentType as any;
}

export function makeFragmentData<
  F extends DocumentTypeDecoration<any, any>,
  FT extends ResultOf<F>,
>(data: FT, _fragment: F): FragmentType<F> {
  return data as FragmentType<F>;
}
