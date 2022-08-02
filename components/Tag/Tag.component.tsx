import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css"
import cn from "../../node_modules/classnames/index"
 


export const Tag = ({ children, className, size = 'medium', href, color = 'ghost', ...props }: TagProps): JSX.Element =>{
    return (
        <div
        className={cn(styles.tag, className,{
            [styles.small]: size == 'small',
            [styles.medium]: size == 'medium',
            [styles.large]: size == 'large',
            [styles.ghost]: color == 'ghost',
            [styles.red]: color == 'red',
            [styles.gray]: color == 'gray',
            [styles.primary]: color == 'primary',
            [styles.green]: color == 'green',
        })}
        {...props}
        >
            {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
    )
}