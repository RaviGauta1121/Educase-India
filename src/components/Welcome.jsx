import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[375px] min-h-screen bg-white flex flex-col justify-end px-6 py-10">
        <h1 className="text-2xl font-bold text-gray-900">Welcome to PopX</h1>
        <p className=" text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <button
          onClick={() => navigate("/signup")}
          className="w-full bg-violet-600 text-white font-semibold py-3 mt-6 rounded-lg"
        >
          Create Account
        </button>
        <button
          onClick={() => navigate("/login")}
          className="w-full bg-violet-200 text-black font-semibold py-3 mt-3 rounded-lg"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Welcome;
