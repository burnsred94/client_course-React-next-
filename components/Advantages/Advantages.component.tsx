import React from "react";
import { HHDataAdvantages } from "./Advantages.props"
import styles from "./Advantages.module.css";
import cn from "classnames";
import AdvantagesIcon from "./check.svg"

export const Advantages = ({ advantages }: HHDataAdvantages): JSX.Element => {
    return (
        <>
            {advantages.map(a => (
                <div key={a._id} className={styles.advantage}>
                    <AdvantagesIcon />
                    <div className={styles.title}>{a.title}</div>
                    <hr className={styles.vline}/> 
                    <div>{a.description}</div>
                </div>
            ))}
        </>
    )
}
