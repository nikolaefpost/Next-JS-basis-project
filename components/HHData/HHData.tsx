import React, {FC} from 'react';
import {HhData as HHDataProps } from "../../interface";
import cn from "classnames";
import RateIcon from "./rate.svg"
import styles from "./HHData.module.scss";
import Card from '../Card/Card';
import {priceRu} from "../../helpers";


const HhData: FC<HHDataProps> = ({_id, count, middleSalary, seniorSalary, juniorSalary, updatedAt}) => {
    return (
        <div className={styles.hh}>
            <Card color="white" className={styles.count}>
                <h3 className={styles.title}>Всего вакансий</h3>
                <p className={styles.countValue}>{count}</p>
            </Card>
            <Card color="white" className={styles.salary}>
                <div className={styles.wrapper}>
                    <h3 className={styles.title}>Начальный</h3>
                    <p className={styles.salaryValue}>{priceRu(juniorSalary)}</p>
                    <div className={styles.rate}>
                        <RateIcon style={{fill: "#FC836D"}}/>
                        <RateIcon/>
                        <RateIcon/>
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <h3 className={styles.title}>Средний</h3>
                    <p className={styles.salaryValue}>{priceRu(middleSalary)}</p>
                    <div className={styles.rate}>
                        <RateIcon style={{fill: "#FC836D"}}/>
                        <RateIcon style={{fill: "#FC836D"}}/>
                        <RateIcon/>
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <h3 className={styles.title}>Профессионал</h3>
                    <p className={styles.salaryValue}>{priceRu(seniorSalary)}</p>
                    <div className={styles.rate}>
                        <RateIcon style={{fill: "#FC836D"}}/>
                        <RateIcon style={{fill: "#FC836D"}}/>
                        <RateIcon style={{fill: "#FC836D"}}/>
                    </div>
                </div>
            </Card>

        </div>
    );
};

export default HhData;