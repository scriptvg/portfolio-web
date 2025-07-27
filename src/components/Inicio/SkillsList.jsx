import { FaCheckCircle } from "react-icons/fa";

function SkillsList({ skills }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-gray-800 text-base bg-white/90 rounded-xl p-8 shadow-lg">
      {skills.map((skill, i) => (
        <li key={i} className="flex items-center gap-2">
          <FaCheckCircle className="text-green-500" />{skill}
        </li>
      ))}
    </ul>
  );
}

export default SkillsList; 
