/* eslint-disable max-len */
import { validationSchemaAdminOurContacts } from "constants/validationSchemaAdminOurContacts";

import Typography from "@mui/material/Typography";

import { OurContactsContainer } from "components/Admin/OurContacts/OurContactsContainer/OurContactsContainer";
import { OurContactsForm } from "features/components/admin/ourContacts/OurContactsForm/OurContactsForm";
import { handleAdminOurContactsForm } from "helpers/handleAdminOurContactsForm";
import { NumberField } from "features/components/admin/ourContacts/NumberField/NumberField";
import { EmailField } from "features/components/admin/ourContacts/EmailField/EmailField";
import { SubmitButton } from "features/components/admin/ourContacts/SubmitButton/SubmitButton";
import { InputWrapper } from "features/components/admin/ourContacts/InputWrapper/InputWrapper";

const OurContacts = () => {
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

export { OurContacts };
