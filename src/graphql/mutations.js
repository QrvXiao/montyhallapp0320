/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMontyHallRecord = /* GraphQL */ `
  mutation CreateMontyHallRecord(
    $input: CreateMontyHallRecordInput!
    $condition: ModelMontyHallRecordConditionInput
  ) {
    createMontyHallRecord(input: $input, condition: $condition) {
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
export const updateMontyHallRecord = /* GraphQL */ `
  mutation UpdateMontyHallRecord(
    $input: UpdateMontyHallRecordInput!
    $condition: ModelMontyHallRecordConditionInput
  ) {
    updateMontyHallRecord(input: $input, condition: $condition) {
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
export const deleteMontyHallRecord = /* GraphQL */ `
  mutation DeleteMontyHallRecord(
    $input: DeleteMontyHallRecordInput!
    $condition: ModelMontyHallRecordConditionInput
  ) {
    deleteMontyHallRecord(input: $input, condition: $condition) {
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
