import { NAV_MENU_TYPES } from "../utils/constants";

export type NavMenuType = {
  title: string;
  subMenu?: NavSubMenuType;
};

export type NavSubMenuType = {
  type: SubMenuType;
  links?: {
    title: string;
  }[];
  video?: {
    url: string;
    alt: string;
    desc: string;
  };
  match?: {
    clubLogo: string;
    clubName: string;
    time: string;
    league: string;
    stadium: string;
  };
  hospitality?: {
    title: string;
  }[];
};

export type SubMenuType =
  | typeof NAV_MENU_TYPES.noPromo
  | typeof NAV_MENU_TYPES.promoTicket
  | typeof NAV_MENU_TYPES.promoVideo
  | typeof NAV_MENU_TYPES.hospitality;
