import React from "react";
import { useEffect, useState } from "react";

const Preloader = () => {
  //preloader
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={isLoading ? "preloader loaded" : "preloader"}>
      <p>Dolcezza artigianale.</p>
    </div>
  );
};

export default Preloader;
