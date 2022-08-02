import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import { format }  from "date-fns"
import cn from "../../node_modules/classnames/index"


export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
    return (
         <footer className={cn(className, styles.footer)}
         {...props}>
            <div>
            OwlTop © 2020 - {format(new Date(),'yyyy')} Все права защищены
            </div>
            <a href="#" target='blanck'>Пользовательское соглашение</a>
            <a href="#" target='blanck'>Политика конфиденциальности</a>
         </footer>
    )
}