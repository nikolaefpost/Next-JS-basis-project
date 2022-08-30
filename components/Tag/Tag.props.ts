import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface TagProps  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    children: ReactNode;
    link?: string;
    size?: "s" | "l";
    color?: "ghost" | "red" | "grey" | "green" | "primary"
}