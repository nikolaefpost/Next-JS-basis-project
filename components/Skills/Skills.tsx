import React, {FC} from 'react';
import { TopPageModel as SkillsProps} from "../../interface";
import styles from "./skills.module.scss";
import {HTag, Tag} from "../index";

const Skills: FC<SkillsProps> = ({tags}) => {
    return (
        <div className={styles.skills}>
            <HTag tag="h2">Получаемые навыки</HTag>
            <div className={styles.block}>
                {tags.map(item=>(
                    <Tag key={item} size="l" color="primary">
                        {item}
                    </Tag>
                ))}
            </div>
        </div>
    );
};

export default Skills;