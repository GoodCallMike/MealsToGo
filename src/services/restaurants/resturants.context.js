import React, { useState, useEffect, useMemo, createContext } from "react";
import { restaurantRequest, restaurantsTransform } from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children, value }) => {
  return (
    <RestaurantsContext.Provider value={{ restaurants: [1, 2, 3] }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
