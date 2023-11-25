type fieldNamesItem = {
  field: string;
  key: string;
};
const fieldNamesList: Array<fieldNamesItem> = [
  { field: "Ім'я", key: "name" },
  { field: "Прізвище", key: "surname" },
  { field: "Телефон", key: "phone" },
  { field: "Електронна адреса", key: "email" },
];

export { fieldNamesList };
