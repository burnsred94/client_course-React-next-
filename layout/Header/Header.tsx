import { SidebarProps } from "./Header.props";


export const Header = ({...props}: SidebarProps): JSX.Element => {
    return (
         <div {...props}>
            Header
        </div>
    )
}