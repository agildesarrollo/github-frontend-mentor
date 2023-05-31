
import React from "react";
import SearchIcon from "../components/icons/SearchIcon";

interface Props {
  getUser: (username: string) => Promise<void>;
}

const FormSearchUser = ({getUser}:Props) => {
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    if (!username) return;
    await getUser(username);
  }
  return (
    <>
      <form onSubmit={handleSubmit}
      className="mb-4 flex flex-wrap items-center gap-2 rounded-xl bg-white shadow-md dark:shadow-none dark:bg-tarjeta p-4">
        <span className="min-w-[30px] ">
          <SearchIcon className="fill-boton" />
        </span>
        <input
          name="username"
          className="h-14 flex-1 rounded-lg bg-transparent text-fondo dark:text-white placeholder:text-fondo  dark:placeholder:text-white focus:outline-none focus:ring-2 focus:ring-boton"
          type="text"
          placeholder="Search Github username..."
        />
        <button className="rounded-lg bg-boton px-4 py-4 font-bold text-white">
          Buscar
        </button>
      </form>
    </>
  );
};

export default FormSearchUser;
