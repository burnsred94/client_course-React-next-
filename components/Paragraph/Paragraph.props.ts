import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface PropsParagraph extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>,HTMLParagraphElement> {
    children: ReactNode
    size:  'small'| 'medium'| 'large';
    // color: "white"| "black" | "aqua"
}