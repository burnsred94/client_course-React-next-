import { RaitingProps } from "./Rating.props";
import StarIcon from './rating.svg'
import styles from "./Rating.module.css";
import cn from "../../node_modules/classnames/index"
import { useEffect, useState, KeyboardEvent } from "react";
 



export const Rating = ({setRating, isEditable = false, ratign, ...props }: RaitingProps) : JSX.Element=>{
    const [ratignArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(()=>{
        constractRating(ratign)
    }, [ratign])

    const constractRating = (currentRating: number) => {
        const updatedArray = ratignArray.map((r: JSX.Element, i: number) => {
            return (
                <> 
                <span
                className={cn(styles.star, {
                    [styles.filled] : i < currentRating,
                    [styles.editable] : isEditable
                })}
                onMouseEnter={()=> changeDisplay(i + 1)}
                onMouseLeave={()=> changeDisplay(ratign)}
                onClick={()=> onClick(i + 1)}
                >
                <StarIcon
                tabIndex={isEditable ? 0 : -1}
                onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(i + 1, e)}
                /> 
                </span>
                </>
            );
        }); 
        setRatingArray(updatedArray);

    }

    const changeDisplay = (i: number) => {
        if(!isEditable) {
            return;
        }
        constractRating(i)
    }

    const onClick = (i: number) => {
        if(!isEditable || !setRating) {
            return;
        } 
        setRating(i)
    };

    const handleSpace = (i: number, e: React.KeyboardEvent<SVGAElement>) => {
        if(e.code !== 'Space' || !setRating){
            return;
        }
        setRating(i)
    }

    return (
        <div {...props}>
            {ratignArray.map((r, i) => (<span key={i}>{r}</span>))}
        </div>
    )
}