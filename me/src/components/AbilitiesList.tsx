import { FC } from "react";
import "@/styles/cv-abilities.css";

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
    )
};

const AbilitiesList: FC = () => {

    const abilities: Abilities = DEFAULT_ABILITIES;

    return (
        <div className="cv-abilities">

            { abilities.languages.map((ability, index) =>
                <AbilityView
                    type="language"
                    ability={ ability }
                    first={ index == 0 }
                    key={ index + 1 }
                />
            )}

            { abilities.technologies.map((ability, index) =>
                <AbilityView
                    type="technology"
                    ability={ ability }
                    first={ index == 0 }
                    key={ index + abilities.languages.length + 1 }
                />
            )}

            { abilities.skills.map((ability, index) =>
                <AbilityView
                    type="skill"
                    ability={ ability }
                    first={ index == 0 }
                    key={ index + abilities.languages.length + abilities.technologies.length + 1 }
                />
            )}

        </div>
    );
};

export default AbilitiesList;
