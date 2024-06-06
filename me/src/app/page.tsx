import { FC } from "react";
import "@/styles/cv.css";
import Abilities from "@/components/AbilitiesList";
import Header from "@/components/Header";
import Columns from "@/components/Columns";

const Page: FC = () => {
    return (
        <div className="cv">

            <Header />

            <div className="cv-introduction">
                <p>Aspiring 22-year-old Full Stack Developer with a passion for creativity and problem-solving, graduating this summer with a BSc (Hons) in Software Engineering from the University of Portsmouth, expected First Class Honours and currently achieving a 71% grade average.</p>
            </div>

            <Abilities />

            <Columns />

        </div>
    );
};

export default Page;
