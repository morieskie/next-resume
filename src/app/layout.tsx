"use client";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageLayoutComponent from "@/components/PageLayoutComponent";
import HeaderComponent from "@/components/HeaderComponent";
import MainContentComponent from "@/components/MainContentComponent";
import { store } from "@/store";
import { Provider } from "react-redux";
import { AnimatePresence, motion } from "motion/react";
import { PageTransitionOptions } from "@/utils/PageTransitionOptions";
import { usePathname } from "next/navigation";
import ResumeComponent from "./resume/page";
import ServiceComponent from "./services/page";
import PortfolioComponent from "./portfolio/page";
import ContactComponent from "./contact/page";
import Home from "./page";
import ThemeSelectorComponent from "@/components/ThemeSelectorComponent";
import DynamicContentComponent from "@/components/DynamicContentComponent";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const animations = Object.values(PageTransitionOptions.transition);
export default function RootLayout() {
  const pathname = usePathname();
  const { initial, animate, exit } =
    animations[Math.floor(Math.random() * animations.length)];
  return (
    <html lang="en">
      <body
        className={`material-template`}
      >
        <Provider store={store}>
          <PageLayoutComponent>
            <HeaderComponent />
            <MainContentComponent>
              <AnimatePresence>
                <motion.div
                  key={pathname.includes("portfolio") ? "portfolie" : pathname}
                  initial={initial}
                  animate={animate}
                  exit={exit}
                  onAnimationStart={() => {
                    const elem: HTMLElement = document.querySelector(
                      ".subpages"
                    ) as HTMLElement;
                    elem.style.overflow = "visible";
                  }}
                  className="pt-page pt-page-home pt-page-current pt-page-relative "
                  data-id="home"
                >
                  {pathname === "/" && <Home />}
                  {pathname === "/home" && <Home />}
                  {pathname === "/resume" && <ResumeComponent />}
                  {pathname === "/services" && <ServiceComponent />}
                  {pathname.includes("portfolio") && <PortfolioComponent />}
                  {pathname === "/contact" && <ContactComponent />}
                </motion.div>
              </AnimatePresence>
            </MainContentComponent>
          </PageLayoutComponent>

          <DynamicContentComponent />
          <ThemeSelectorComponent />
        </Provider>
      </body>
    </html>
  );
}
