import { NAV_MENU_TYPES } from "./constants";
import { NavMenuType } from "../types/navMenu";

export const navMoreItems = [
  {
    title: "About the club",
    children: [
      "About The Club",
      "General Information",
      "Club Partners",
      "Safeguarding",
      "Careers",
      "Contact Us",
    ],
  },
  {
    title: "Our history",
    children: [
      "Our History",
      "The Story Of Chelsea",
      "Women's Team History",
      "Stadium History",
      "Key Former Players",
      "Former Managers",
    ],
  },
  {
    title: "Community",
    children: [
      "Community",
      "Chelsea Foundation",
      "No To Hate",
      "Social Media Policy",
    ],
  },
  {
    title: "Fans",
    children: [
      "Fans",
      "The 5th Stand App",
      "Official Supporters Clubs",
      "Junior Blues",
      "Fans' Forum",
      "Accessible Fans' Forum",
      "Chelsea Pitch Owners",
      "The Shed",
    ],
  },
  {
    title: "Stamford Bridge",
    children: [
      "Stamford Bridge",
      "Getting To Stamford Bridge",
      "Matchday Experience",
      "Stadium Tours & Museum",
      "Stadium Megastore",
      "Quiet Area / Prayer Room",
      "Lost Property",
    ],
  },
  {
    title: "Our venues",
    children: [
      "Our Venues",
      "Frankie's Sports Bar & Grill",
      "Meetings & Events at Club Chelsea",
      "Millennium & Copthorne Hotels",
      "Under The Bridge",
    ],
  },
];

export const navMenuItems: NavMenuType[] = [
  {
    title: "Latest",
    subMenu: {
      type: NAV_MENU_TYPES.noPromo,
      links: [
        {
          title: "News",
        },
        {
          title: "Interviews & Features",
        },
        {
          title: "Highlight & Full Matches",
        },
        {
          title: "Columnists",
        },
      ],
    },
  },
  {
    title: "Watch",
    subMenu: {
      type: NAV_MENU_TYPES.promoVideo,
      links: [
        {
          title: "Discover",
        },
        {
          title: "Highlight & Full Matches",
        },
        {
          title: "Boxsets",
        },
      ],
      video: {
        url: "/images/blueprint_thumbnail.webp",
        alt: "Blue print",
        desc: "Watch episode three",
      },
    },
  },
  {
    title: "Men's Team",
    subMenu: {
      type: NAV_MENU_TYPES.promoTicket,
      links: [
        {
          title: "Fixtures & Results",
        },
        {
          title: "Players & Staff",
        },
        {
          title: "Leaguge Tables",
        },
        {
          title: "News",
        },
        {
          title: "Academy",
        },
      ],
      match: {
        clubLogo: "/svg/arsenal.svg",
        clubName: "Arsenal",
        time: "2022-11-06T12:00:00Z",
        league: "Premier League",
        stadium: "Stamford Bridge",
      },
    },
  },
  {
    title: "Women's Team",
    subMenu: {
      type: NAV_MENU_TYPES.promoTicket,
      links: [
        {
          title: "Fixtures & Results",
        },
        {
          title: "Players & Staff",
        },
        {
          title: "Leaguge Tables",
        },
        {
          title: "News",
        },
        {
          title: "About Chelsea FC Women",
        },
      ],
      match: {
        clubLogo:
          "https://clublogos.stadion.io/assets/ClubLogos/Football/English/680.png",
        clubName: "Manchester United Women",
        time: "2022-11-06T18:45:00Z",
        stadium: "Leigh Sports Village",
        league: "WOMEN'S SUPER LEAGUE",
      },
    },
  },
  {
    title: "Ticket & Hospitality",
    subMenu: {
      type: NAV_MENU_TYPES.hospitality,
      links: [
        {
          title: "Buy Tickets",
        },
        {
          title: "Stadium Tours & Museum",
        },
        {
          title: "Memberships",
        },
        {
          title: "Season Tickets",
        },
        {
          title: "Ticket Information",
        },
        {
          title: "My Tickets Account",
        },
      ],
      hospitality: [
        {
          title: "Buy Hospitality Tickets",
        },
        {
          title: "Matchday VIP Packages",
        },
        {
          title: "Annual VIP Packages",
        },
        {
          title: "Season Tickets",
        },
        {
          title: "Westview",
        },
        {
          title: "Members Area",
        },
        {
          title: "Contact Hospitality",
        },
      ],
    },
  },
  {
    title: "Shop",
  },
];
