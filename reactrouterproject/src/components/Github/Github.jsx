import React from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(`https://api.github.com/users/Shadab786-developer`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="w-full h-full flex justify-center items-center bg-slate-900 text-white">
      <img
        src={data.avatar_url}
        alt="github profile"
        className="sm:h-fit sm:w-fit w-40 h-40 rounded-full m-11 "
      />
      <div className="flex flex-col items-center justify-center">
        <span className="m-10 text-1xl font-serif sm:text-5xl">
          {data.login}
        </span>
        <span className="m-10 text-1xl font-serif sm:text-5xl">
          Github Followers : {data.followers}
        </span>
        <span className="m-10 text-1xl font-serif sm:text-5xl">
          Github Following : {data.following}
        </span>
      </div>
    </div>
  );
}

export default Github;
export const githubDataLoader = async () => {
  const response = await fetch(
    `https://api.github.com/users/Shadab786-developer`
  );

  return response.json();
};
