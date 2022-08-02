import React from "react";
import { PropsParagraph } from "./Paragraph.props"
import styles from "./Paragraph.module.css";
import cn from "../../node_modules/classnames/index"

export const Paragraph = ({children, size, className, ...props }: PropsParagraph ): JSX.Element => {
    return (
        <p 
        className={cn(styles.p, className, {
            [styles.small]: size === "small",
            [styles.medium]: size === "medium",
            [styles.large]: size === "large",
        })}
            {...props}
        >
            {children}
        </p>
    )
}
