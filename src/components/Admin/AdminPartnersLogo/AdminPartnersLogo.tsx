import {Form, Formik} from "formik";

import {Button, Box} from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";

import {PageContentWrapper} from "../PageContentWrapper/PageContentWrapper";

import {FieldStyled, LabelStyled} from "./AdminPartnersLogo.styled";

const AdminPartnersLogo = () => {

    //const onSubmitForm = () => {
        //console.log("submit");
    //}
  return (
      <PageContentWrapper>
          <Formik
            initialValues={{logoImg: ""}}
            onSubmit={(values) =>(
                console.log(values)
            )}
          >
              <Form>

                  <div>
                      <LabelStyled htmlFor="logoImg">
                          <AddCircleIcon color="primary"/>
                          <span>Додати лого</span>
                      </LabelStyled>

                      <FieldStyled
                          type="file"
                          id="logoImg"
                          name="logoImg"
                      ></FieldStyled>
                  </div>

                  <Box display="flex"
                       justifyContent="center"
                      m={"auto"}>
                      <Button
                          variant="contained"
                          type="submit">
                          Додати
                      </Button>
                  </Box>
              </Form>
          </Formik>
      </PageContentWrapper>
  )
}

export {AdminPartnersLogo}