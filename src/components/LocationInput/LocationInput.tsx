import React from "react";
import { CiLocationOn } from "react-icons/ci";
import type { LocationInputProps } from "../../pages/MainPage";

export const LocationInput = ({
  cityInput,
  setCityInput,
  setCity,
  weatherIcon,
}: LocationInputProps) => {
  return (
    <div className="logo">
      <div className="areaName">
        <span>
          <CiLocationOn />
        </span>
        <input
          className="inputCity"
          name="city"
          type="text"
          value={cityInput ?? ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCityInput(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setCity(cityInput.trim());
            }
          }}
        />
      </div>
      <div className="weatherIcon">
        <span>{weatherIcon}</span>
      </div>
    </div>
  );
};
