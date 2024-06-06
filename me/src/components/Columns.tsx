import Image from "next/image";
import { Inter } from "next/font/google";
import { FC, ReactNode } from "react";
import "@/styles/cv-columns.css";

const inter = Inter({ subsets: ["latin"] });

const DEFAULT_UNI_POINTS: (string | ReactNode)[] = [
    "Modules including: Advanced Database Concepts, Usability Testing, Software Engineering Culture and Data Analytics and Visualisation.",
    <>Presented on React frameworks and build tools at the Student Software Engineering and Culture Mock Conference. Slides, handouts and source code available at: <a href="https://github.com/mwkeay/the-cra-curse">github.com/mwkeay/the-cra-curse</a></>,
    "Lead a MoD student project working with the Royal Navy Head of Climate Change and Sustainability to research behaviours around digital education and design alternative programs.",
    "Engineering dissertation follows the development of a web app integrated into Spotify to recommend music based on a crowd-sourced sampling database.",
];

const DEFAULT_SUPER_POINTS: (string)[] = [
    "Worked 36-hour/week whilst withdrawn from undergraduate study and received promotion after 10 months.",
    "Ran the store one or two days per week including banking, administrating off-site servicing and leading the sales team.",
    "Conducted interviews and final decisions for temp recruitment over holiday period.",
    "Learned professionalism working with brand ambassadors, multiple store managers and high-end clients.",
];

const DEFAULT_SALES_POINTS: (string)[] = [
    "Gained valuable experience in sales and clientelling.",
    "Repaired jewellery and watches, and performed piercings with council certification.",
];

// ==================
//     UNIVERSITY
// ==================

const UniversityColumn: FC = () => {
    return (
        <div className="university-col">
            
            <div className="heading">
                <Image 
                    src="/university.svg"
                    width={ 19 }
                    height={ 21 }
                    alt="university.svg"
                />
                <h3>University of Portsmouth</h3>
            </div>

            <div className="subheading">
                <p id="date">2019 - 2024</p>
                <p id="course">{ "BSc (Hons) Software Engineering" }</p>
                <p>Expected first class honours</p>
                <p>Current grade average <span className={ inter.className }>71%</span></p>
            </div>

            <ul>
                { DEFAULT_UNI_POINTS.map((point, index) => <ListItem text={ point } key={ index+1 } />) }
            </ul>

        </div>
    );
};

// ==================
//     EMPLOYMENT
// ==================

const EmploymentColumn: FC = () => {
    return (
        <div className="employment-col">

            <div className="heading">
                <Image 
                    src="/employment.svg"
                    width={ 19 }
                    height={ 19 }
                    alt="employment.svg"
                />
                <div>
                    <h3>Signet Jewelers</h3>
                    <p>H. Samuel, 145-147 Commercial Rd, Portsmouth, PO1 1EX</p>
                </div>
            </div>

            <div className="job">
                <h4>{ "Supervisor (Part-time)" }</h4>
                <p id="date">July 2023 - present</p>
            </div>

            <ul>
                { DEFAULT_SUPER_POINTS.map((point, index) => <ListItem text={ point } key={ index+1 } />) }
            </ul>

            <div className="job">
                <h4>{ "Sales Associate (Part-time)" }</h4>
                <p id="date">September 2022 - July 2023</p>
            </div>

            <ul>
                { DEFAULT_SALES_POINTS.map((point, index) => <ListItem text={ point } key={ index+1 } />) }
            </ul>

            <p id="references">{ "(References readily available on request)" }</p>

        </div>
    );
};

// ============
//     MAIN
// ============

const ListItem: FC<{ text: string | ReactNode }> = ({ text }) => {
    return (
        <li>
            <p className="bullet">&#x2022;</p>
            <p className="text">{ text }</p>
        </li>
    );
};

const Columns: FC = () => {
    return (
        <div className="cv-columns">
            <UniversityColumn />
            <EmploymentColumn />
        </div>
    );
};

export default Columns;
