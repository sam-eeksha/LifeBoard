import { Fira_Code as FontMono, Inter as FontSans, Dancing_Script } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontDancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});
