import { useEffect } from "react";

export const ParticlesBackground = () => {
  useEffect(() => {
    fetch("/particles.json")
      .then((res) => res.json())
      .then((config) => window.particlesJS?.("particles-container", config))
      .catch((err) => console.error("Error al cargar particles.json:", err));
  }, []);

  return <div id="particles-container" style={styles} />;
};

const styles = {
  position: "absolute",
  width: "100%",
  height: "100vh",
  top: 0,
  left: 0,
  backgroundColor: "#000",
  zIndex: -1,
};
