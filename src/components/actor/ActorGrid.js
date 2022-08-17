import React from "react";
import IMAGE_NOT_FOUND from "../../assets/images/not-found.png";
import ActorCard from "./ActorCard";

const ActorGrid = ({ data }) => {
  return (
    <div>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          id={person.id}
          name={person.name}
          image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
          gender={person.gender}
          birthday={person.birthday}
          deathday={person.deathday}
        />
      ))}
    </div>
  );
};

export default ActorGrid;
