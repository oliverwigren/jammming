import React, { useContext } from "react";
import styles from "../styles/PlaylistName.module.css";
import { SongsContext } from "../context/SongsContextArea";

function PlaylistName() {
  const { PN } = useContext(SongsContext);
  const [name, setName] = PN;

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  return (
    <form>
      <input
        className={styles.input}
        onChange={handleChange}
        placeholder={name}
        value={name}
        required
      ></input>
    </form>
  );
}

export default PlaylistName;
