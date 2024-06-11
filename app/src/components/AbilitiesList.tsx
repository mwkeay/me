"use client"

import { FC } from "react";
import "@/styles/cv-abilities.css";
import useWindowSize from "@/hooks/useWindowSize";

interface Abilities {
    languages: string[]
    technologies: string[]
    skills: string[]
}

const DEFAULT_ABILITIES: Abilities = {
    languages: ["JavaScript", "TypeScript", "HTML/CSS", "Python", "SQL"],
    technologies: ["React", "Next.js", "PostgreSQL"],
    skills: ["RESTful APIs", "Build Configurations", "Web Design"],
};

const AbilityView: FC<{ type: "language" | "technology" | "skill", ability: string, first?: boolean }> = ({ type, ability, first = false }) => {
    
    return (
        <>
            <div className="cv-ability">

                { first
                    ? <p className="label">{
                        type == "language"
                        ? "Languages"
                        : type == "technology"
                        ? "Technologies"
                        : "Skills"
                    }</p>
                    : null
                }

                <p className={ "ability " + type }>{ ability }</p>
            </div>
        </>
    )
};

const AbilitiesList: FC = () => {

    // Max width (in rem) before adding breaks to abilities list
    const NARROW_LIMIT = 34
    // Only retrieve rem value if running in client, otherwise set to default for server rendering
    const remSize = typeof window !== "undefined" ? parseFloat(getComputedStyle(document.documentElement).fontSize) : 16;

    const { width } = useWindowSize();

    const narrow = width !== undefined && width < remSize * NARROW_LIMIT;

    const abilities: Abilities = DEFAULT_ABILITIES;

    const languageViews = abilities.languages.map((ability, index) =>
        <AbilityView
            type="language"
            ability={ ability }
            first={ index == 0 }
            key={ index + 1 }
        />
    )

    const technologyViews = abilities.technologies.map((ability, index) =>
        <AbilityView
            type="technology"
            ability={ ability }
            first={ index == 0 }
            key={ index + abilities.languages.length + 1 }
        />
    )

    const skillViews = abilities.skills.map((ability, index) =>
        <AbilityView
            type="skill"
            ability={ ability }
            first={ index == 0 }
            key={ index + abilities.languages.length + abilities.technologies.length + 1 }
        />
    )

    return (
        <div className="cv-abilities">
            { languageViews }
            { narrow ? <div className="break" /> : null }
            { technologyViews }
            { narrow ? <div className="break" /> : null }
            { skillViews }
        </div>
    );
};

export default AbilitiesList;
