import Link from "next/link";
import {FaStar, FaCodeBranch, FaEye} from 'react-icons/fa';

async function fetchRepo(name) {
    const respone = await fetch(`https://api.github.com/repos/alimohiuddin79/${name}`, {
        // if data often changing then use this 
        next: {
            revalidate: 60,
        }
    });
    const repo = await respone.json();

    return repo;
}

const Repo = async ({ name }) => {
    const repo = await fetchRepo(name); 
    // console.log(repo);
  return (
    <>
        <h2>{repo.name}</h2>
        <p>{repo.description}</p>
        <div className="card-stats">
            <div className="card-stat">
                <FaStar />
                <span>{repo.stargazers_count}</span>
            </div>
            <div className="card-stat">
                <FaCodeBranch />
                <span>{repo.forks_count}</span>
            </div>
            <div className="card-stat">
                <FaEye />
                <span>{repo.watchers_count}</span>
            </div>
        </div>
    </>
  )
}

export default Repo;