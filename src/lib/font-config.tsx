import { Roboto_Flex as googleFont } from "next/font/google";
import localFont from "next/font/local";

const robotoFlex = googleFont({ subsets: ["latin"], variable: "--font-sans" });
const ttSupermolot = localFont({ src: [
  {
      path: '../assets/fonts/tt-supermolot-thin.ttf',
      weight: '100',
      style: 'normal',
  },
  {
      path: '../assets/fonts/tt-supermolot-thin-italic.ttf',
      weight: '100',
      style: 'italic',
  },
  {
      path: '../assets/fonts/tt-supermolot-light.ttf',
      weight: '300',
      style: 'normal',
  },
  {
      path: '../assets/fonts/tt-supermolot-light-italic.ttf',
      weight: '300',
      style: 'italic',
  },
  {
      path: '../assets/fonts/tt-supermolot-regular.ttf',
      weight: '400',
      style: 'normal',
  },
  {
      path: '../assets/fonts/tt-supermolot-italic.ttf',
      weight: '400',
      style: 'italic',
  },
  {
      path: '../assets/fonts/tt-supermolot-bold.ttf',
      weight: '700',
      style: 'normal',
  },
  {
      path: '../assets/fonts/tt-supermolot-bold-italic.ttf',
      weight: '700',
      style: 'italic',
  },
  {
      path: '../assets/fonts/tt-supermolot-black.ttf',
      weight: '900',
      style: 'normal',
  },
  {
      path: '../assets/fonts/tt-supermolot-black-italic.ttf',
      weight: '900',
      style: 'italic',
  },
], variable: "--font-supermolot" })

export {
    robotoFlex,
    ttSupermolot
};

