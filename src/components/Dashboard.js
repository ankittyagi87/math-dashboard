import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [problems, setProblems] = useState([]);
  const [difficultyFilter, setDifficultyFilter] = useState(""); // State for filtering difficulty

  useEffect(() => {
    axios.get("/data/Algebra/Linear_Algebra/problems.json")
      .then(response => setProblems(response.data))
      .catch(error => console.error("Error loading data:", error));
  }, []);

  // Apply filtering based on selected difficulty level
  const filteredProblems = difficultyFilter
    ? problems.filter(problem => problem.difficulty === difficultyFilter)
    : problems;

  return (
    <div>
    <div className="flex justify-center mb-6 text-2xl font-bold">
        <h2>Math Problems Dashboard</h2>
    </div>

      {/* Buttons for Filtering by Difficulty */}
      <div className="flex space-x-4 justify-center mb-6">
        <button onClick={() => setDifficultyFilter("")}>All</button>
        <button onClick={() => setDifficultyFilter("Beginner")}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Beginner
        </button>
        <button onClick={() => setDifficultyFilter("Intermediate")}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Intermediate
        </button>
        <button onClick={() => setDifficultyFilter("Advanced")}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Advanced
        </button>
       </div>


      <div className="flex justify-center mb-6">
        <table className="border border-gray-300 shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-700 text-white">
            <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Question</th>
                <th className="px-6 py-3">Difficulty</th>
                <th className="px-6 py-3">Category</th>
            </tr>
            </thead>
            <tbody className="bg-white">
            {filteredProblems.map((problem, index) => (
                <tr key={index} className="border-b hover:bg-gray-100 transition">
                <td className="px-6 py-4">{problem.problem_id}</td>
                <td className="px-6 py-4">{problem.question}</td>
                <td className="px-6 py-4">{problem.difficulty}</td>
                <td className="px-6 py-4">{problem.category}</td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>

    </div>
  );
};

export default Dashboard;


