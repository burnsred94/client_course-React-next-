import React from "react";
import { ButtonProps } from "./Button.pops";
import ArrowIcon from './arrow.svg'
import styles from './Button.module.css';
import cn  from '../../node_modules/classnames/index'



export const Button = ({appearance, arrow = 'none', children, className, ...props}: ButtonProps): JSX.Element => {
    return (
        <button
        className={cn(styles.button, className, { 
            [styles.primary]: appearance == 'primary',
            [styles.ghost]: appearance == 'ghost' 
        })}
        {...props}
        >
            {children}
            {arrow !== 'none' && <span className={cn(styles.arrow, {
                [styles.arrow]: arrow == 'down'
                })}>
                  <ArrowIcon/>
                </span> }
        </button>
    )
    
}