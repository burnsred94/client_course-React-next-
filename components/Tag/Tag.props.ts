import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    children: ReactNode
    size?: 'small' | 'medium' | 'large' 
    color: 'ghost' | 'red' | 'gray' | 'green' | 'primary'
    href?: string
}