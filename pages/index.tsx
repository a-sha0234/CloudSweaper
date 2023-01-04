import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { fetchWeatherData } from "../axios/weatherData";

import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [location, setLocation] = useState("London");
  const [isSubmit, setIsSubmit] = useState(false);
  const [data, setData] = useState();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    return setLocation(value);
  }

  function handleSubmit(e: React.MouseEvent<HTMLElement>) {
    // track when submit button clicked
    e.preventDefault();
    setIsSubmit((prev) => !prev);
  }

  useEffect(() => {
    // run everytime submit is clicked
    fetchWeatherData(location, setData);
  }, [isSubmit]);

  console.log(data);
  return (
    <>
      <Head>
        <title>Weather app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <form>
          <input
            type="text"
            name="place"
            placeholder="eg: London"
            value={location}
            onChange={handleChange}
          ></input>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </main>
    </>
  );
}