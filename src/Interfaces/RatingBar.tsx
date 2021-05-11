import React from "react";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import {IconContainerProps} from "@material-ui/lab/Rating";

interface IRatingIcons{
    [index: string] : {
     icon: React.ReactElement,
     label : string,
    }
}

export const customIcons: IRatingIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon  style={{ fontSize: 30 }} />,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <SentimentDissatisfiedIcon  style={{ fontSize: 30 }} />,
        label: 'Dissatisfied',
    },
    3: {
        icon: <SentimentSatisfiedIcon  style={{ fontSize: 30 }} />,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon  style={{ fontSize: 30 }} />,
        label: 'Satisfied',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon  style={{ fontSize: 30 }} />,
        label: 'Very Satisfied',
    },
};

export function IconContainer(props: IconContainerProps) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}