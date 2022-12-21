import React, { useContext, useEffect, lazy, Suspense } from "react";

import { GoogleMap } from "./modules/Homepage/GoogleMap";
import { Header } from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import useFetchPlaces from "./hooks/useFetchPlaces";
import { mockMenu } from "./mocks";

const DetailPlace = lazy(() => import("./modules/Homepage/Detail/DetailPlace"));

function App() {
  const { dataPlacesMap } = useFetchPlaces();

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
            {dataPlacesMap.selectedPlace && (
              <DetailPlace
                {...dataPlacesMap.selectedPlace.detail}
                label={dataPlacesMap.selectedPlace.label}
              />
            )}
          </Suspense>
        </div>
      </section>
    </main>
  );
}

export default App;
