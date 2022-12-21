import {
  BlogIcon,
  BookIcon,
  GlobeIcon,
  InformationIcon,
  VideoIcon,
} from "../assets/icons";

export const mockMenu: any = [
  {
    label: "Browse",
    Icon: <GlobeIcon />,
    submenu: [
      {
        label: "Merlion",
        key: 0,
      },
      {
        label: "Marina Bay Sands",
        items: [
          "ArtScience Museum",
          "Marina Bay Sadns Skypark",
          "Double Helix Bridge",
        ],
        key: 5,
      },
      {
        label: "Garden by the Bay",
        items: ["sample place"],
        key: 6,
      },
      {
        label: "China town",
        items: ["sample place"],
        key: 7,
      },
      {
        label: "Asian Civilisations Museum",
        key: 1,
      },
      {
        label: "Clarke Quay",
        key: 2,
      },
      {
        label: "Fort Canning Park",
        key: 3,
      },
      {
        label: "Singapore Flyer", // doesnt exist
        key: 8,
      },
      {
        label: "Orchard Road",
        key: 4,
      },
    ],
  },
  {
    label: "Suggest Attraction",
    Icon: <BookIcon />,
  },
  {
    label: "Videos",
    Icon: <VideoIcon />,
  },
  {
    label: "Blog",
    Icon: <BlogIcon />,
  },
  {
    label: "About",
    Icon: <InformationIcon />,
  },
];
