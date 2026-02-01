import { Link } from "react-router-dom";

const FeatureCard = ({ icon, title, link }) => {
  return (
    <Link
      to={link}
      className="
        bg-white rounded-xl shadow-md
        p-6 flex flex-col items-center
        hover:shadow-xl hover:-translate-y-1
        transition-all duration-300
      "
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800">
        {title}
      </h3>
    </Link>
  );
};

export default FeatureCard;
