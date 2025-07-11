// src/components/ProblemsList.tsx
import { useNavigate } from 'react-router-dom';
import { leetCodeQuestions } from './data/LeetCodeQuestions';

const ProblemsList = () => {
  const navigate = useNavigate();

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      Easy: "text-emerald-500",
      Medium: "text-yellow-500",
      Hard: "text-rose-500"
    };
    return colors[difficulty as keyof typeof colors];
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl p-8">
          <h1 className="text-3xl font-bold mb-8">Problems</h1>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-gray-700">
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Title</th>
                  <th className="pb-4">Difficulty</th>
                  <th className="pb-4">Category</th>
                </tr>
              </thead>
              <tbody>
                {leetCodeQuestions.map((problem) => (
                  <tr 
                    key={problem.id}
                    onClick={() => navigate(`/problems/${problem.id}`)}
                    className="border-b border-gray-700 hover:bg-gray-800/50 cursor-pointer transition-colors"
                  >
                    <td className="py-4">
                      <div className="w-4 h-4 rounded-full border border-gray-500"></div>
                    </td>
                    <td className="py-4 font-medium">{problem.title}</td>
                    <td className={`py-4 ${getDifficultyColor(problem.difficulty)}`}>
                      {problem.difficulty}
                    </td>
                    <td className="py-4 text-gray-400">Arrays</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsList;