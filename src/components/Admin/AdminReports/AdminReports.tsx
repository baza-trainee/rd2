import React from "react";

import {Grid, Typography} from "@mui/material";

import {PageContentWrapper} from "../PageContentWrapper/PageContentWrapper";

import {LoadReportForm} from "./LoadReportForm/LoadReportForm";

import {reportsNameList} from "./reportsNameList";


const AdminReports = () => {

    return (
        <PageContentWrapper>

            <Grid container rowSpacing={6} columnSpacing={2}>

                {
                    reportsNameList.map((reportTitle, index) => (

                        <Grid item xs={6} key={reportTitle+index}>
                            <Typography variant="h6">{reportTitle}</Typography>

                            <LoadReportForm id={`reportFile${index}`} />
                        </Grid>

                    ))
                }

            </Grid>

        </PageContentWrapper>
    );
};

export { AdminReports };