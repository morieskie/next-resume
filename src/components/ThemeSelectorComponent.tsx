"use client";
import { useCallback, useEffect, useState } from "react";
import "@/assets/css/theme-switcher.css";
import { AnimatePresence, motion } from "motion/react";
import { setActiveTheme } from "@/store/slices/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import {
  activeThemeSelector,
  themeColorsSelector,
} from "@/store/selectors/themeSelectors";
import { appUrl } from "@/config";

const ThemeSelectorComponent = () => {
  const [panelVisibility, setPanelVisibility] = useState(false);
  const colors = useSelector(themeColorsSelector);
  const [activeColor, setActiveColor] = useState<string>();
  const dispatch = useDispatch<AppDispatch>();
  const activeTheme = useSelector(activeThemeSelector);

  const toggle = () => {
    setPanelVisibility(!panelVisibility);
  };

  const selectColor = useCallback(
    (color: string) => {
      const preColor = activeColor;
      const el = document.createElement("link");
      el.href = `${appUrl}/assets/css/main-${color}.css`;
      el.rel = "stylesheet";
      el.type = "text/css";
      el.id = `${color}-theme`;

      document.head.querySelector(`#${preColor}-theme`)?.remove();
      document.head.appendChild(el);

      setActiveColor(color);
      dispatch(setActiveTheme(color));
    },
    [dispatch, activeColor]
  );

  const getActiveClass = (color: string): string => {
    return activeTheme === color ? "current-main-color" : "";
  };

  useEffect(() => {
    selectColor(activeTheme);
  }, [activeTheme, selectColor]);

  return (
    <>
      <span
        id="lm_demo_panel_switcher"
        className="lm-demo-panel-switcher right"
        onClick={toggle}
      >
        <i className="fa fa-gear"></i>
      </span>

      <AnimatePresence>
        {panelVisibility && (
          <motion.div
            id="lm_demo_panel"
            className="lm-demo-panel right panel-color-red active"
            initial={{ right: "-100%" }}
            animate={{ right: "0%" }}
            exit={{ right: "-100%" }}
          >
            <div className="demo-panel-title">Main Color</div>
            <div id="main_color" className="demo-panel-options">
              {colors.map((color, index) => (
                <span
                  onClick={() => selectColor(color)}
                  className={getActiveClass(color)}
                  key={`${color + index}`}
                >
                  <div className={"preview color-" + (index + 1)}>&nbsp;</div>
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default ThemeSelectorComponent;
