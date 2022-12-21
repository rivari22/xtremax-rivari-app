import React, { useContext, useEffect, lazy, Suspense } from "react";

import { GoogleMap } from "./modules/Homepage/GoogleMap";
import { Header } from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { mockData } from "./mocks";

import { PlaceContext } from "./Context/PlaceProvider/PlaceProvider";
import { PlaceReducerEnum } from "./Context/PlaceProvider/PlaceReducer";
import {
  BlogIcon,
  BookIcon,
  GlobeIcon,
  InformationIcon,
  VideoIcon,
} from "./assets/icons";

const mockMenu = [
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

const DetailPlace = lazy(() => import("./modules/Homepage/Detail/DetailPlace"));

function App() {
  const { state, dispatch } = useContext(PlaceContext);

  useEffect(() => {
    dispatch({
      type: PlaceReducerEnum["Fetch"],
      payload: {
        places: mockData,
      },
    });
  }, []);

  return (
    <main className="App flex w-full">
      <Sidebar menu={mockMenu} />
      <section className="w-full h-full flex flex-col">
        <Header title="TOP-RATED TOURIST ATTRACTIONS IN SINGAPORE" />
        <div
          className="flex w-full relative overflow-hidden"
          style={{ height: "calc(100vh - 125px)" }}
        >
          <GoogleMap />
          <Suspense fallback={<>Loading</>}>
            {state.selectedPlace && (
              <DetailPlace
                {...state.selectedPlace.detail}
                label={state.selectedPlace.label}
              />
            )}
          </Suspense>
        </div>
      </section>
    </main>
  );
}

export default App;
