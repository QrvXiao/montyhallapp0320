/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MontyHallRecordCreateFormInputValues = {
    userId?: string;
    firstChosenDoor?: number;
    revealedDoor?: number;
    finalChosenDoor?: number;
    isWinner?: boolean;
};
export declare type MontyHallRecordCreateFormValidationValues = {
    userId?: ValidationFunction<string>;
    firstChosenDoor?: ValidationFunction<number>;
    revealedDoor?: ValidationFunction<number>;
    finalChosenDoor?: ValidationFunction<number>;
    isWinner?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MontyHallRecordCreateFormOverridesProps = {
    MontyHallRecordCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    firstChosenDoor?: PrimitiveOverrideProps<TextFieldProps>;
    revealedDoor?: PrimitiveOverrideProps<TextFieldProps>;
    finalChosenDoor?: PrimitiveOverrideProps<TextFieldProps>;
    isWinner?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type MontyHallRecordCreateFormProps = React.PropsWithChildren<{
    overrides?: MontyHallRecordCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MontyHallRecordCreateFormInputValues) => MontyHallRecordCreateFormInputValues;
    onSuccess?: (fields: MontyHallRecordCreateFormInputValues) => void;
    onError?: (fields: MontyHallRecordCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MontyHallRecordCreateFormInputValues) => MontyHallRecordCreateFormInputValues;
    onValidate?: MontyHallRecordCreateFormValidationValues;
} & React.CSSProperties>;
export default function MontyHallRecordCreateForm(props: MontyHallRecordCreateFormProps): React.ReactElement;
