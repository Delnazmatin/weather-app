import type { WeatherInfoProps } from "../../pages/MainPage";

export const WeatherInfo = ({
  error,
  date,
  temperature,
  weatherDesc,
  wind,
  humidity,
}: WeatherInfoProps) => {
  return (
    <>
      <div className="informationContent">
        {error ? <p className="errorCity">Error: {error}</p> : null}
        <p>{date}</p>
        <h1>{temperature}</h1>
        <h3>{weatherDesc}</h3>
        <h6>
          Wind: <i>{wind}</i>
        </h6>
        <h6>
          Hum: <i>{humidity}</i>
        </h6>
      </div>
    </>
  );
};
