import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchAPI from "../../utils/fetchAPI";
import Header from "../Header/Header";
import "./watchmovie.scss";
import "../scss/base.scss";

function WatchMovie() {
  const { slug, episodeSlug } = useParams();
  const [episodeData, setEpisodeData] = useState(null);

  useEffect(() => {
    const fetchEpisodeDetails = async () => {
      try {
        const API_EPISODE_DETAILS = `https://phimapi.com/phim/${slug}`;
        const episodeDetails = await fetchAPI(API_EPISODE_DETAILS);
        console.log("episodeDetails", episodeDetails);
        setEpisodeData(episodeDetails);
      } catch (error) {
        console.error("Error fetching episode details:", error);
      }
    };

    fetchEpisodeDetails();
  }, []);

  return (
    <div className="main-page">
      <Header />
      <div className="content">
        <div className="detail-movie">
          {episodeData && (
            <>
              <h3 className="name-movie">{episodeData.movie.name}</h3>
              <div className="view-iframe">
                <iframe
                  src={episodeData.episodes[0].server_data[0].link_embed}
                  frameborder="0"
                  className="video"
                  allow="fullscreen"
                ></iframe>
              </div>
              <div className="episode-list">
                {episodeData.episodes[0].server_data.map((episode, index) => (
                  <div
                    className="episode"
                    key={index}
                    data-index={index}
                    data-linkEmbed={episode.link_embed}
                  >
                    {episode.name}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default WatchMovie;
