import { NAV_MENU_TYPES } from "../utils/constants";

export enum SubMenuType {
  noPromo = "no-promo",
  promoVideo = "promo-video",
  promoTicket = "promo-ticket",
  megaPopup = "mega-popup",
}

export type NavMenuType = {
  title: string;
  subMenu?: NavSubMenuType;
};

export type NavSubMenuType = {
  type:
    | typeof NAV_MENU_TYPES.noPromo
    | typeof NAV_MENU_TYPES.promoTicket
    | typeof NAV_MENU_TYPES.promoVideo
    | typeof NAV_MENU_TYPES.megaPopup;
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
  mega?: {
    title: string;
  }[];
};
