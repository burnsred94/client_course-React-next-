import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface RaitingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditable?: boolean;
    ratign: number;
    setRating?: (rating: number) => void;
}