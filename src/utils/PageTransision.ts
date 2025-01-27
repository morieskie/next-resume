// class PageTransitions {
//   private defaultStartPage: string = "home";
//   private sectionsContainer: HTMLElement;
//   private isAnimating: boolean = false;
//   private endCurrentPage: boolean = true;
//   private endNextPage: boolean = false;
//   private windowArea: Window;
//   private animEndEventNames: { [key: string]: string } = {
//     WebkitAnimation: "webkitAnimationEnd",
//     OAnimation: "oAnimationEnd",
//     msAnimation: "MSAnimationEnd",
//     animation: "animationend",
//   };
//   private animEndEventName: string;
//   private support: boolean;

//   constructor() {
//     this.sectionsContainer = document.querySelector(".subpages") as HTMLElement;
//     this.windowArea = window;
//     this.animEndEventName =
//       this.animEndEventNames[
//         "animation" in document.body.style ? "animation" : "webkitAnimation"
//       ];
//     this.support = "animation" in document.body.style;
//   }

//   init(options: any) {
//     const children = Array.from(this.sectionsContainer.children);

//     children.forEach((child: HTMLElement | any) => {
//       child.dataset.originalClassList = child.className;
//     });

//     const menuTrigger = document.querySelectorAll(
//       ".pt-trigger"
//     ) as NodeListOf<HTMLElement>;

//     menuTrigger.forEach((trigger: HTMLElement) => {
//       trigger.addEventListener("click", (e: MouseEvent) => {
//         e.preventDefault();
//         if (!this.isAnimating) {
//           const pageTrigger = trigger;
//           this.activeMenuItem(pageTrigger);
//           this.Animate(pageTrigger);

//           const hash = pageTrigger.getAttribute("href") as string;
//           window.location.hash = hash;
//         }
//       });
//     });

//     window.addEventListener("hashchange", (event: HashChangeEvent) => {
//       if (window.location.hash) {
//         if (this.isAnimating) {
//           return;
//         }
//         const menuLink = document.querySelector(
//           'a[href*="' + window.location.hash.split("/")[0] + '"]'
//         );
//         this.activeMenuItem(menuLink);
//         this.Animate(menuLink);

//         this.ajaxLoader();
//       }
//     });

//     const pageStart = this.getActiveSection();
//     window.location.hash = pageStart;
//     const menuLink = document.querySelector(
//       'a[href*="' + window.location.hash.split("/")[0] + '"]'
//     );
//     this.activeMenuItem(menuLink);
//     this.Animate(menuLink);

//     this.ajaxLoader();
//   }

//   getActiveSection() {
//     if (window.location.hash === "") {
//       return (window.location.hash = this.defaultStartPage);
//     } else {
//       return window.location.hash;
//     }
//   }

//   activeMenuItem(item: HTMLElement) {
//     if (!item) {
//       return false;
//     }

//     const navLink = item.parentNode;
//     if (navLink) {
//       const links = document.querySelectorAll("ul.site-main-menu li");
//       links.forEach((link: HTMLElement) => {
//         link.classList.remove("active");
//       });
//       navLink.classList.add("active");
//     }
//   }

//   ajaxLoader() {
//     const ajaxLoadedContent = document.getElementById("page-ajax-loaded");

//     function showContent() {
//       ajaxLoadedContent.classList.remove("rotateOutDownRight", "closed");
//       ajaxLoadedContent.style.display = "block";
//       document.body.classList.add("ajax-page-visible");
//     }

//     function hideContent() {
//       const ajaxLoadedContent = document.getElementById("page-ajax-loaded");
//       ajaxLoadedContent.classList.add("rotateOutDownRight", "closed");
//       document.body.classList.remove("ajax-page-visible");
//       setTimeout(() => {
//         const closedAjaxLoadedContent =
//           document.getElementById("page-ajax-loaded");
//         closedAjaxLoadedContent.innerHTML = "";
//         closedAjaxLoadedContent.style.display = "none";
//       }, 500);
//     }

//     const href = document.querySelectorAll(".ajax-page-load");

//     href.forEach((link: HTMLElement) => {
//       const hash =
//         window.location.hash.split("/")[0] +
//         "/" +
//         link
//           .getAttribute("href")
//           .substr(0, link.getAttribute("href").length - 5);
//       if (window.location.hash === hash) {
//         const toLoad = link.getAttribute("href");
//         showContent();
//         ajaxLoadedContent.innerHTML = "";
//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", toLoad, true);
//         xhr.onload = function () {
//           if (xhr.status === 200) {
//             ajaxLoadedContent.innerHTML = xhr.responseText;
//           }
//         };
//         xhr.send();
//         return false;
//       }
//     });

//     document.addEventListener("click", (e: MouseEvent) => {
//       if (
//         e.target.classList.contains("site-main-menu") ||
//         e.target.id === "ajax-page-close-button"
//       ) {
//         e.preventDefault();
//         hideContent();
//         window.location.hash = window.location.hash.split("/")[0];
//       }
//     });

//     document.addEventListener("click", (e: MouseEvent) => {
//       if (e.target.classList.contains("ajax-page-load")) {
//         const hash =
//           window.location.hash.split("/")[0] +
//           "/" +
//           e.target
//             .getAttribute("href")
//             .substr(0, e.target.getAttribute("href").length - 5);
//         window.location.hash = hash;
//         showContent();

//         return false;
//       }
//     });
//   }

//   Animate(pageTrigger: HTMLElement) {
//     const animation = pageTrigger.dataset.animation;
//     const animNumber = animation
//       ? parseInt(animation)
//       : Math.floor(Math.random() * 67) + 1;
//     pageTrigger.dataset.animation = animNumber.toString();

//     let inClass: string;
//     let outClass: string;

//     switch (
//       animNumber
//       // Animation cases
//       //...
//     ) {
//     }

//     const $pageWrapper = this.sectionsContainer;
//     const tempPageIndex = $pageWrapper.dataset.current;
//     const linkhref = pageTrigger.getAttribute("href").split("#");
//     const gotoPage = linkhref[1];

//     const $currentPage = document.querySelector(
//       'section[data-id="' + tempPageIndex + '"]'
//     );
//     const $nextPage = document.querySelector(
//       'section[data-id="' + gotoPage + '"]'
//     );

//     if (tempPageIndex !== gotoPage) {
//       this.isAnimating = true;

//       $pageWrapper.dataset.current = gotoPage;

//       $nextPage.classList.add("pt-page-current");

//       window.scrollTo(0, 0);
//       const subpagesHeight = window.innerHeight;
//       $pageWrapper.style.height = subpagesHeight + 50 + "px";

//       $currentPage.classList.add(outClass);
//       $currentPage.addEventListener(this.animEndEventName, () => {
//         $currentPage.classList.remove(outClass);
//         this.endCurrentPage = true;
//         if (this.endNextPage) {
//           this.onEndAnimation($pageWrapper, $nextPage, $currentPage);
//           this.endCurrentPage = false;
//         }
//       });

//       $nextPage.classList.add(inClass);
//       $nextPage.addEventListener(this.animEndEventName, () => {
//         $nextPage.classList.remove(inClass);
//         this.endNextPage = true;
//         if (this.endCurrentPage) {
//           this.onEndAnimation($pageWrapper, $nextPage, $currentPage);
//           this.endNextPage = false;
//           this.isAnimating = false;
//         }
//       });
//     } else {
//       this.isAnimating = false;
//     }

//     if (!this.support) {
//       this.onEndAnimation($currentPage, $nextPage);
//     }
//   }

//   onEndAnimation(
//     $pageWrapper: HTMLElement,
//     $nextPage: HTMLElement,
//     $currentPage: HTMLElement
//   ) {
//     const subpagesHeight = $nextPage.offsetHeight;
//     $pageWrapper.style.height = subpagesHeight + 50 + "px";
//     this.resetPage($nextPage, $currentPage);
//   }

//   resetPage($nextPage: HTMLElement, $currentPage: HTMLElement) {
//     $currentPage.className = $currentPage.dataset.originalClassList;
//     $nextPage.className =
//       $nextPage.dataset.originalClassList + " pt-page-current";
//   }
// }

// const pageTransitions = new PageTransitions();
// pageTransitions.init({});
