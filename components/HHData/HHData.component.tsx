import React from "react";
import { HHDataProps } from "./HHData.props"
import { Card } from "../Card/Card.component";
import styles from "./HHData.module.css";
import RaitIcon from "./rait.svg"
import { priceRU } from "../../helpers/helpers";

export const HHData = ({ count, juniorSalary, middleSalary, seniorSalary }: HHDataProps ): JSX.Element => {
    return (
        <div className={styles.hh}>
            <Card className={styles.count}>
                <div className={styles.title}>Всего вакансии</div>
                <div className={styles.countValue}>{count}</div>
            </Card>
            <Card className={styles.sallary}>
                <div>
                    <div className={styles.title}>Начальный</div>
                    <div className={styles.sallaryValue}>{priceRU(juniorSalary)}</div>
                    <div className={styles.rait}>
                        <RaitIcon className={styles.filled}/>
                        <RaitIcon />
                        <RaitIcon />
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Средний</div>
                    <div className={styles.sallaryValue}>{priceRU(middleSalary)}</div>
                    <div className={styles.rait}>
                        <RaitIcon className={styles.filled}/>
                        <RaitIcon className={styles.filled}/>
                        <RaitIcon />
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Професcионал</div>
                    <div className={styles.sallaryValue}>{priceRU(seniorSalary)}</div>
                    <div className={styles.rait}>
                        <RaitIcon className={styles.filled}/>
                        <RaitIcon className={styles.filled}/>
                        <RaitIcon className={styles.filled}/>
                    </div>
                </div>
            </Card>
        </div>
    )
}
