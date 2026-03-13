import { Metadata } from "next";
import Services from "./Services"

export const metadata: Metadata = {
  title: "Services Page",
  description: "This is a student app built with Next.js 13 and TypeScript",
};

const ServicesPage = () => {
  return (
    <div>
        <Services name="john"/>
    </div>
  )
}

export default ServicesPage