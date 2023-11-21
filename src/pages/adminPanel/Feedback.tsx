import Typography from "@mui/material/Typography";

import {theme} from "../../theme/theme";

import {AdminFeedback} from "../../components/Admin/AdminFeedback/AdminFeedback";

const Feedback = () => {
    return <>
        <Typography variant="h4" component="h4" color="info.main">
            Звернення
        </Typography>

        <AdminFeedback />
    </>;
};

export {Feedback}
