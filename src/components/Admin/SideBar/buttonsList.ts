import iconPartners from "assets/icons/admin/partners.png";
import iconReport from "assets/icons/admin/report.png";
import iconContacts from "assets/icons/admin/contacts.png";

export interface SidebarButton {
  id: number;
  icon: string;
  buttonText: string;
}

export const buttonsList: SidebarButton[] = [
  { id: 1, icon: iconPartners, buttonText: "Лого партнерів" },
  { id: 2, icon: iconReport, buttonText: "Звітність" },
  { id: 3, icon: iconContacts, buttonText: "Контакти" },
];
