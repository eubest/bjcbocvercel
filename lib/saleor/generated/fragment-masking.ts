import type { ResultOf, DocumentTypeDecoration } from '@graphql-typed-document-node/core';

// Introduce a generic type placeholder
type GenericType = unknown;

export type FragmentType<TDocumentType extends DocumentTypeDecoration<GenericType, GenericType>> =
  TDocumentType extends DocumentTypeDecoration<infer TType, GenericType>
  ? TType extends { ' $fragmentName'?: infer TKey }
  ? TKey extends string
  ? { ' $fragmentRefs'?: { [key in TKey]: TType } }
  : never
  : never
  : never;

// Replace any with GenericType in the function signatures
export function useFragment<TType>(
  _documentNode: DocumentTypeDecoration<TType, GenericType>,
  fragmentType: FragmentType<DocumentTypeDecoration<TType, GenericType>>,
): TType;

export function useFragment<TType>(
  _documentNode: DocumentTypeDecoration<TType, GenericType>,
  fragmentType: FragmentType<DocumentTypeDecoration<TType, GenericType>> | null | undefined,
): TType | null | undefined;

export function useFragment<TType>(
  _documentNode: DocumentTypeDecoration<TType, GenericType>,
  fragmentType: ReadonlyArray<FragmentType<DocumentTypeDecoration<TType, GenericType>>>,
): ReadonlyArray<TType>;

export function useFragment<TType>(
  _documentNode: DocumentTypeDecoration<TType, GenericType>,
  fragmentType: ReadonlyArray<FragmentType<DocumentTypeDecoration<TType, GenericType>>> | null | undefined,
): ReadonlyArray<TType> | null | undefined;

export function useFragment<TType>(
  _documentNode: DocumentTypeDecoration<TType, GenericType>,
  fragmentType:
    | FragmentType<DocumentTypeDecoration<TType, GenericType>>
    | ReadonlyArray<FragmentType<DocumentTypeDecoration<TType, GenericType>>>
    | null
    | undefined,
): TType | ReadonlyArray<TType> | null | undefined {
  return fragmentType as TType | ReadonlyArray<TType> | null | undefined;
}


export function makeFragmentData<
  F extends DocumentTypeDecoration<GenericType, GenericType>,
  FT extends ResultOf<F>,
>(data: FT, _fragment: F): FragmentType<F> {
  return data as FragmentType<F>;
}
