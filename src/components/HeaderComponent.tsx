"use client";
import { SyntheticEvent, useEffect, useState } from "react";
import NavigationComponent from "./NavigationComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  menuHeaderClassesSelector,
  menuSiteTitleClassesSelector,
  menuItemsSelector,
} from "../store/selectors/menuSelectors";
import {
  hideMobileMenu,
  showMobileMenu,
  addHeaderClass,
  removeHeaderClass,
} from "../store/slices/menuSlice";
import { AppDispatch } from "../store";
import { userSelector } from "../store/selectors/userSelectors";
import Link from "next/link";

const HeaderComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const menu = useSelector(menuItemsSelector);
  const {
    name: { firstName, lastName },
  } = useSelector(userSelector);
  const headerClasses = useSelector(menuHeaderClassesSelector);
  const siteTitleClass = useSelector(menuSiteTitleClassesSelector);
  const [titleClasses, setTitleClasses] = useState("mobile-hidden");

  const toggleMenu = (e: SyntheticEvent) => {
    e.preventDefault();
    if (headerClasses.indexOf("mobile-menu-hide") !== -1) {
      dispatch(showMobileMenu());
      setTitleClasses(siteTitleClass);
    } else {
      dispatch(hideMobileMenu());
      setTitleClasses("");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        dispatch(addHeaderClass("sticked"));
      } else {
        dispatch(removeHeaderClass("sticked"));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  return (
    <>
      <header id="site_header" className={`header ${headerClasses}`}>
        <div className="header-content">
          <div className={`site-title-block ${titleClasses}`}>
            <div className="site-title">
              {firstName} <span>{lastName}</span>
            </div>
          </div>
          <NavigationComponent menus={menu} />
        </div>
      </header>

      <div className={`mobile-header mobile-visible`}>
        <div className="mobile-logo-container">
          <div className="mobile-site-title">
            {firstName} {lastName}
          </div>
        </div>
        <Link href="/" className={`menu-toggle`} onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </Link>
      </div>
    </>
  );
};

export default HeaderComponent;
