import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { GithubIcon, LinkArrow } from "./Icons";

const ProjectCard = ({ username }) => {
  const [profileImage, setProfileImage] = useState("");
  const [latestProject, setLatestProject] = useState(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch GitHub user profile
        const userResponse = await axios.get(`https://api.github.com/users/${username}`);
        setProfileImage(userResponse.data.avatar_url);

        // Fetch user's repositories
        const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
        const repos = reposResponse.data;

        // Find the latest updated repository
        const latestRepo = repos.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))[0];

        setLatestProject(latestRepo);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    fetchGitHubData();
  }, [username]);

  if (!latestProject) {
    return <div>Loading latest project...</div>;
  }

  return (
    <div className="max-w-lg mx-auto justify-center items-center text-center select-none dark:text-white">
      {/* Profile Image */}
      {profileImage && (
        <div className="flex justify-center">
          <Link href={`https://api.github.com/users/${username}`}><img
            src={profileImage}
            alt={`${username}'s profile`}
            className="w-24 h-24 rounded-full mb-4 shadow-sm border-4 border-sky-500 dark:border-white hover:scale-105"
          /></Link>
        </div>
      )}

      {/* Project Details */}
      <h3 className="text-gray-700 text-lg font-semibold text-center dark:text-white">Latest Project</h3>
      <Link href={latestProject.html_url}><h2 className="text-xl font-bold text-gray-800 mt-2 text-center dark:text-white hover:scale-105">{latestProject.name || "Project"}</h2></Link>
      <p className="text-gray-600 mt-2 text-center dark:text-white">{latestProject.description || "No description available"}</p>

      {/* Links */}
      <div className="mt-4 flex space-x-4 items-center justify-center text-center">
        {latestProject.homepage && (
          <a
            href={latestProject.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:dark:text-white hover:scale-105 w-10"
          >
            <LinkArrow className="w-10 h-10" />
          </a>
        )}
        <a
          href={latestProject.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-black hover:dark:text-white hover:scale-105 w-10"
        >
          <GithubIcon className="w-10 h-10" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
