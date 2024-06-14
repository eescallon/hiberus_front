import type { Metadata } from "next";
import { Hero } from "./components/home/hero";

export default function IndexPage() {
  return <Hero></Hero>
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
