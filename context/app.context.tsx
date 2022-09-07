import React, {createContext, useState} from "react";
import {MenuItem, TopLevelCategory} from "../interface";

export interface IAppContext {
    menu: MenuItem[];
    firstCategory: TopLevelCategory;
    setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>(
    {menu: [], firstCategory: TopLevelCategory.Services}
);

export const AppContextProvider: React.FC<React.PropsWithChildren<IAppContext>> = ({menu, firstCategory, children}) => {

    const [menuState, setMenuState] = useState<MenuItem[]>(menu);
    const setMenu = (newMenu: MenuItem[]): void =>{
        setMenuState(newMenu);
    };
  return (
      <AppContext.Provider value={{menu: menuState, firstCategory, setMenu}}>
          {children}
      </AppContext.Provider>
  );
}