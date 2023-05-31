import GithubLogo from "../components/icons/GithubLogo";
import LocationIcon from "../components/icons/LocationIcon";
import LinkIcon from "../components/icons/LinkIcon";
import TwitterIcon from "../components/icons/TwitterIcon";
import BuildIcon from "../components/icons/BuildIcon";

import Image from 'next/image';

import { User } from ".../interfaces/User";

interface Props {
  user: User | null;
}

function validaURL(url: String) {
  // Verificar si la URL comienza con "http://" o "https://"
  if (!/^https?:\/\//i.test(url)) {
    // Agregar "https://" al principio de la url
    url = "https://" + url;
  }
  return url;
}

const UserCardInfo = ({ user }: Props) => {
  return (
    <article className="grid-areas rounded-xlbg-white bg-white dark:bg-tarjeta p-4 shadow-md text-fondo dark:text-white">
      <div className="section-logo mr-3 grid h-24 w-24 place-content-center rounded-full dark:bg-gray-200 p-1 lg:mx-auto">
        <Image
          className="rounded-full"
          src={user.avatar_url}
          width={96}
          height={96}
          alt={`profile img user ${user.username}`}
        />
        {/*<GithubLogo className="relative top-2 h-full w-full" />*/}
      </div>
      <div className="section-title">
        <h2 className="text-3xl font-bold">{user.name}</h2>
        <p className=" text-boton dark:text-white">@{user.login}</p>
      </div>

      <p className="section-date lg:text-right">
        Joined{" "}
        {new Date(user.created_at || "").toLocaleDateString("es", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <p className="section-description mt-8 leading-loose">
        {user.bio || "Sin user bio"}
      </p>
      <div className="section-number mt-4 flex justify-around rounded-xl bg-fondo-light text-fondo dark:text-white dark:bg-fondo p-8 text-center">
        <article>
          <p>Repos</p>
          <p className="text-xl font-bold">{user.public_repos}</p>
        </article>
        <article>
          <p>Followers</p>
          <p className="text-xl font-bold">{user.followers}</p>
        </article>
        <article>
          <p>Following</p>
          <p className="text-xl font-bold">{user.following}</p>
        </article>
      </div>
      <div className="section-social mt-4 space-y-3 md:grid md:grid-cols-2">
        <article className="flex space-x-2">
          <i>
            <LocationIcon className="h-full w-full fill-fondo dark:fill-white" width={"1rem"} />
          </i>
          <a href="#">{user.location}</a>
        </article>
        <article className="flex space-x-2">
          <i>
            <LinkIcon className="h-full w-full  fill-fondo dark:fill-white" width={"1rem"} />
          </i>
          <a href={validaURL(user.blog)} className="... truncate">
            {user.blog}
          </a>
        </article>
        <article className="flex space-x-2">
          <i>
            <TwitterIcon className="h-full w-full  fill-fondo dark:fill-white" width={"1rem"} />
          </i>
          <a href={`https://twitter.com/${user.twitter_username}`}>
            {user.twitter_username}
          </a>
        </article>
        <article className="flex space-x-2">
          <i>
            <BuildIcon className="h-full w-full  fill-fondo dark:fill-white" width={"1rem"} />
          </i>
          <a href={user.html_url}>@{user.login}</a>
        </article>
      </div>
    </article>
  );
};

export default UserCardInfo;
