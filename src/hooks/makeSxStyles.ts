import { SxProps, Theme } from "@mui/system";
import { CSSProperties } from "react";

type StyleProps<T, K extends PropertyKey> = { [P in K]: T }

export const makeSxStyles = <K extends PropertyKey>(props: StyleProps<SxProps<Theme>, K>) => props
export const makeCssStyles = <K extends PropertyKey>(props: StyleProps<CSSProperties, K>) => props