import React, { useContext, useEffect } from "react";
import GithubContext from "../../context/github/GithubContext";
import RepoItem from "./RepoItem";

function RepoList() {
  const { repo } = useContext(GithubContext);

  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Latest Repositories
        </h2>
        {repo.map((repoo) => (
          <RepoItem key={repoo.id} repo={repoo} />
        ))}
      </div>
    </div>
  );
}

export default RepoList;
