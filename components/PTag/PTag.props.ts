import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface PTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    children: ReactNode;
    fontSize?: 14 | 16 | 18;
}