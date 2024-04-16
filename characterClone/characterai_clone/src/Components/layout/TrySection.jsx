import React, { Fragment } from "react";
import natureImage from "../../assets/images/nature.jpg";
import tripImage from "../../assets/images/trip.jpg";
import { ForYouCard } from "../UI/ForYouCard";
import { ElementSlider } from "../UI/ElementSlider";
import { TryCard } from "../UI/TryCard";

export const TrySection = () => {
  const tryCards = [
    <div className="flex flex-col gap-2">
      <TryCard
        imageUrl={natureImage}
        title={"Practice a new language"}
        with={"HyperGlot"}
      />
      <TryCard
        imageUrl={tripImage}
        title={"Plan a trip"}
        with={"Trip Planner"}
      />
    </div>,
    <div className="flex flex-col gap-2">
      <TryCard
        imageUrl={natureImage}
        title={"Practice a new language"}
        with={"HyperGlot"}
      />
      <TryCard
        imageUrl={tripImage}
        title={"Plan a trip"}
        with={"Trip Planner"}
      />
    </div>,
    <div className="flex flex-col gap-2">
      <TryCard
        imageUrl={natureImage}
        title={"Practice a new language"}
        with={"HyperGlot"}
      />
      <TryCard
        imageUrl={tripImage}
        title={"Plan a trip"}
        with={"Trip Planner"}
      />
    </div>,
    <div className="flex flex-col gap-2">
      <TryCard
        imageUrl={natureImage}
        title={"Practice a new language"}
        with={"HyperGlot"}
      />
      <TryCard
        imageUrl={tripImage}
        title={"Plan a trip"}
        with={"Trip Planner"}
      />
    </div>,
    <div className="flex flex-col gap-2">
      <TryCard
        imageUrl={natureImage}
        title={"Practice a new language"}
        with={"HyperGlot"}
      />
      <TryCard
        imageUrl={tripImage}
        title={"Plan a trip"}
        with={"Trip Planner"}
      />
    </div>,
  ];

  return (
    <Fragment>
      <div className="text-gray-100 space-y-2">
        <p>Try these</p>
        <ElementSlider slides={tryCards} />
      </div>
    </Fragment>
  );
};
