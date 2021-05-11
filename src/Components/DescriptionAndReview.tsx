import {Button, Container, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import React from "react";
import {tabProps, TabPanel} from "../Interfaces/TabPanel";
import Orange from "@material-ui/core/colors/orange";
import Rating from '@material-ui/lab/Rating';
import {customIcons, IconContainer} from "../Interfaces/RatingBar";

export default function DescriptionAndReview(props: any){
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    console.log(props.food.id);
    return(
        <Container fixed style={{ marginTop: 50 }}>
            <Paper square>
                <Tabs
                    value={value}
                    indicatorColor="secondary"
                    textColor="secondary"
                    onChange={handleChange}
                    aria-label="tabs"
                >
                    <Tab label="Description" {...tabProps(0)}/>
                    <Tab label="Review" {...tabProps(1)}/>
                </Tabs>
            </Paper>
                <TabPanel value={value} index={0}>
                    <Typography variant="body1">
                        {props.food.description}
                    </Typography>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div  style={{ display: "flex",
                        flexDirection: "row",
                        justifyContent: "start"}}>
                        <Rating
                            name="rating-icons"
                            defaultValue={4}
                            getLabelText={(value: number) => customIcons[value].label}
                            IconContainerComponent={IconContainer}
                        />
                        <Button size="large" variant="contained"
                                style={{
                                    marginLeft: 20,
                                    backgroundColor: Orange[700],
                                    fontWeight: "bold",
                                    color: "whitesmoke",
                                }}>Give A Review
                        </Button>
                    </div>
                </TabPanel>
        </Container>
    );
}