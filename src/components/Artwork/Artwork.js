import { makeStyles } from "@material-ui/core/styles";
import React, { useContext } from "react";

import SingleArtwork from "./SingleArtwork";

import { ThemeContext } from "../../contexts/ThemeContext";
import { artworkData } from "../../data/artworkData";
import "reactjs-popup/dist/index.css";

import "./Artwork.css";

function Artwork() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {artworkData.length > 0 && (
        <div
          className="artwork"
          id="artwork"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="artwork--header">
            <h1 style={{ color: theme.primary }}>Artwork</h1>
          </div>
          <div className="artwork--body">
            {artworkData.map((section) => (
              <div className="map--content">
                <h2
                  className="section--title"
                  style={{ color: theme.quaternary, backgroundColor: theme.tertiary }}
                >
                  {section.name}
                </h2>
                {section.images.map((art) => (
                  <SingleArtwork art={art} />
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Artwork;
