/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMontyHallRecord = /* GraphQL */ `
  query GetMontyHallRecord($id: ID!) {
    getMontyHallRecord(id: $id) {
      id
      userId
      firstChosenDoor
      revealedDoor
      finalChosenDoor
      isWinner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMontyHallRecords = /* GraphQL */ `
  query ListMontyHallRecords(
    $filter: ModelMontyHallRecordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMontyHallRecords(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        firstChosenDoor
        revealedDoor
        finalChosenDoor
        isWinner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
