/* eslint-disable max-len */
import { validationSchemaAdminOurContacts } from "constants/validationSchemaAdminOurContacts";

import Typography from "@mui/material/Typography";

import { OurContactsContainer } from "components/Admin/OurContacts/OurContactsContainer/OurContactsContainer";
import { OurContactsForm } from "features/admin/ourContacts/OurContactsForm/OurContactsForm";
import { handleAdminOurContactsForm } from "helpers/handleAdminOurContactsForm";
import { NumberField } from "features/admin/ourContacts/NumberField/NumberField";
import { EmailField } from "features/admin/ourContacts/EmailField/EmailField";
import { SubmitButton } from "features/admin/ourContacts/SubmitButton/SubmitButton";
import { InputWrapper } from "features/admin/ourContacts/InputWrapper/InputWrapper";

export const Component = () => {
  return (
    <>
      <Typography variant="h4" component="h4" color="info.main">
        Контакти
      </Typography>
      <OurContactsContainer>
        <OurContactsForm
          handleSubmit={handleAdminOurContactsForm}
          validationSchema={validationSchemaAdminOurContacts}
        >
          <InputWrapper>
            <NumberField
              disabled
              labelText="Поточний номер телефону"
              name="currentNumber"
            />

            <NumberField labelText="Новий номер телефону" name="newNumber" />
          </InputWrapper>

          <InputWrapper>
            <EmailField labelText="Поточний email" name="currentEmail" disabled />

            <EmailField labelText="Новий email" name="newEmail" />
          </InputWrapper>

          <SubmitButton>Надіслати</SubmitButton>
        </OurContactsForm>
      </OurContactsContainer>
    </>
  );
};

Component.displayName = "OurContacts";
