import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function LocationsList() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const getEpisodes = () => {
      axios
        .get(`https://rickandmortyapi.com/api/episode`)
        .then(response => {
          setEpisodes(response.data.results);
        })
        .catch(error => {
          console.error("Server Error: ", error);
        });
    };

    getEpisodes();
  }, []);

  return (
    <section className="episode-list grid-view">
      {episodes.map(episode => (
        <EpisodeCard episode={episode} />
      ))}
    </section>
  );
}
