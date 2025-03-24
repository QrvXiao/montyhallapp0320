/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getMontyHallRecord } from "../graphql/queries";
import { updateMontyHallRecord } from "../graphql/mutations";
const client = generateClient();
export default function MontyHallRecordUpdateForm(props) {
  const {
    id: idProp,
    montyHallRecord: montyHallRecordModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    userId: "",
    firstChosenDoor: "",
    revealedDoor: "",
    finalChosenDoor: "",
    isWinner: false,
  };
  const [userId, setUserId] = React.useState(initialValues.userId);
  const [firstChosenDoor, setFirstChosenDoor] = React.useState(
    initialValues.firstChosenDoor
  );
  const [revealedDoor, setRevealedDoor] = React.useState(
    initialValues.revealedDoor
  );
  const [finalChosenDoor, setFinalChosenDoor] = React.useState(
    initialValues.finalChosenDoor
  );
  const [isWinner, setIsWinner] = React.useState(initialValues.isWinner);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = montyHallRecordRecord
      ? { ...initialValues, ...montyHallRecordRecord }
      : initialValues;
    setUserId(cleanValues.userId);
    setFirstChosenDoor(cleanValues.firstChosenDoor);
    setRevealedDoor(cleanValues.revealedDoor);
    setFinalChosenDoor(cleanValues.finalChosenDoor);
    setIsWinner(cleanValues.isWinner);
    setErrors({});
  };
  const [montyHallRecordRecord, setMontyHallRecordRecord] = React.useState(
    montyHallRecordModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getMontyHallRecord.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getMontyHallRecord
        : montyHallRecordModelProp;
      setMontyHallRecordRecord(record);
    };
    queryData();
  }, [idProp, montyHallRecordModelProp]);
  React.useEffect(resetStateValues, [montyHallRecordRecord]);
  const validations = {
    userId: [{ type: "Required" }],
    firstChosenDoor: [],
    revealedDoor: [],
    finalChosenDoor: [],
    isWinner: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          userId,
          firstChosenDoor: firstChosenDoor ?? null,
          revealedDoor: revealedDoor ?? null,
          finalChosenDoor: finalChosenDoor ?? null,
          isWinner: isWinner ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateMontyHallRecord.replaceAll("__typename", ""),
            variables: {
              input: {
                id: montyHallRecordRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "MontyHallRecordUpdateForm")}
      {...rest}
    >
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        value={userId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId: value,
              firstChosenDoor,
              revealedDoor,
              finalChosenDoor,
              isWinner,
            };
            const result = onChange(modelFields);
            value = result?.userId ?? value;
          }
          if (errors.userId?.hasError) {
            runValidationTasks("userId", value);
          }
          setUserId(value);
        }}
        onBlur={() => runValidationTasks("userId", userId)}
        errorMessage={errors.userId?.errorMessage}
        hasError={errors.userId?.hasError}
        {...getOverrideProps(overrides, "userId")}
      ></TextField>
      <TextField
        label="First chosen door"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={firstChosenDoor}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              userId,
              firstChosenDoor: value,
              revealedDoor,
              finalChosenDoor,
              isWinner,
            };
            const result = onChange(modelFields);
            value = result?.firstChosenDoor ?? value;
          }
          if (errors.firstChosenDoor?.hasError) {
            runValidationTasks("firstChosenDoor", value);
          }
          setFirstChosenDoor(value);
        }}
        onBlur={() => runValidationTasks("firstChosenDoor", firstChosenDoor)}
        errorMessage={errors.firstChosenDoor?.errorMessage}
        hasError={errors.firstChosenDoor?.hasError}
        {...getOverrideProps(overrides, "firstChosenDoor")}
      ></TextField>
      <TextField
        label="Revealed door"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={revealedDoor}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              userId,
              firstChosenDoor,
              revealedDoor: value,
              finalChosenDoor,
              isWinner,
            };
            const result = onChange(modelFields);
            value = result?.revealedDoor ?? value;
          }
          if (errors.revealedDoor?.hasError) {
            runValidationTasks("revealedDoor", value);
          }
          setRevealedDoor(value);
        }}
        onBlur={() => runValidationTasks("revealedDoor", revealedDoor)}
        errorMessage={errors.revealedDoor?.errorMessage}
        hasError={errors.revealedDoor?.hasError}
        {...getOverrideProps(overrides, "revealedDoor")}
      ></TextField>
      <TextField
        label="Final chosen door"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={finalChosenDoor}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              userId,
              firstChosenDoor,
              revealedDoor,
              finalChosenDoor: value,
              isWinner,
            };
            const result = onChange(modelFields);
            value = result?.finalChosenDoor ?? value;
          }
          if (errors.finalChosenDoor?.hasError) {
            runValidationTasks("finalChosenDoor", value);
          }
          setFinalChosenDoor(value);
        }}
        onBlur={() => runValidationTasks("finalChosenDoor", finalChosenDoor)}
        errorMessage={errors.finalChosenDoor?.errorMessage}
        hasError={errors.finalChosenDoor?.hasError}
        {...getOverrideProps(overrides, "finalChosenDoor")}
      ></TextField>
      <SwitchField
        label="Is winner"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isWinner}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              firstChosenDoor,
              revealedDoor,
              finalChosenDoor,
              isWinner: value,
            };
            const result = onChange(modelFields);
            value = result?.isWinner ?? value;
          }
          if (errors.isWinner?.hasError) {
            runValidationTasks("isWinner", value);
          }
          setIsWinner(value);
        }}
        onBlur={() => runValidationTasks("isWinner", isWinner)}
        errorMessage={errors.isWinner?.errorMessage}
        hasError={errors.isWinner?.hasError}
        {...getOverrideProps(overrides, "isWinner")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || montyHallRecordModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || montyHallRecordModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
