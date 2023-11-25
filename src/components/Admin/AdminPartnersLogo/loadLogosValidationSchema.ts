import * as Yup from "yup";

const loadLogosSchema = Yup.object().shape({
    logoImg: Yup.mixed()
        //.min(2, 'Too Short!')
        //.max(50, 'Too Long!')
        .required("Спочатку виберіть лого"),
});

export {loadLogosSchema}