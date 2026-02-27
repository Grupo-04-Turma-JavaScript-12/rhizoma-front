import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

interface CardTeamProps {
  name: string;
  role: string;
  image: string;
  github: string;
  linkedin: string;
}

function CardTeam(time: CardTeamProps) {
  return (
    <>
      <div className="group relative w-72 h-96 overflow-hidden rounded-xl cursor-pointer shadow-lg mb-8">
        <img
          src={time.image}
          alt=""
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h3 className="text-2xl font-bold mb-1">{time.name}</h3>
          <p className="text-blue-400 font-medium mb-4">{time.role}</p>

          {/* Redes Sociais */}
          <div className="flex gap-3">
            <a href={time.linkedin} target="_blank">
              <LinkedinLogoIcon size={48} weight="bold" />
            </a>
            <a href={time.github} target="_blank">
              <GithubLogoIcon size={48} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardTeam;
