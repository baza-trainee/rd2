import React from "react";

import {Grid, Typography} from "@mui/material";

import {PageContentWrapper} from "../PageContentWrapper/PageContentWrapper";

import {LoadReportForm} from "./LoadReportForm/LoadReportForm";

import {reportsNameList} from "./reportsNameList";

type AdminReportsProps = {
    openModal: () => void
}

const AdminReports = ({openModal}: AdminReportsProps) => {

    return (
        <PageContentWrapper>

            <Grid container rowSpacing={6} columnSpacing={2}>

                {
                    reportsNameList.map((reportTitle, index) => (

                        <Grid item xs={6} key={reportTitle+index}>

                            <Typography variant="h6">
                                {reportTitle}
                            </Typography>

                            <LoadReportForm
                                id={`reportFile${index}`}
                                openModal={openModal}
                            />
                        </Grid>

                    ))
                }

            </Grid>

        </PageContentWrapper>
    );
};

export { AdminReports };