import { getProfile } from "@/actions/profile/get-profile";
import { Assessment } from "@/components/Assessment";
import { StrongTitle } from "@/components/StrongTitle";
import { Title } from "@/components/Title";
import { Dot } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Portfolio - Ivan Führ",
  description: "Conheça um pouco mais sobre mim.",
};

export default async function Home() {
  const profile = await getProfile();

  if ("error" in profile) {
    redirect("/404");
  }

  return (
    <main className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-28">
      <div>
        <Title type="h1">
          Olá, meu nome é <br />
          <StrongTitle>{profile.name}</StrongTitle>
        </Title>

        <p className="font-supermolot text-xl lg:text-3xl">{profile.office}</p>

        <Title className="mb-2 mt-8 lg:mt-28">Sobre mim</Title>

        <p className="max-w-xl font-light">{profile.about}</p>
      </div>

      <aside>
        <Image
          src={profile.picture}
          alt="Foto de perfil"
          width={576}
          height={576}
          className="w-full max-w-xl"
        />

        <Title type="h3" className="mt-11">
          Habilidades
        </Title>

        <ul className="mt-3 flex flex-col gap-1 sm:max-w-max">
          {profile.skills.map((skill, index) => (
            <li className="flex" key={index}>
              <Dot />
              <Assessment label={skill.name} score={skill.level} />
            </li>
          ))}
        </ul>
      </aside>
    </main>
  );
}
