import { Link, useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="h-auto flex flex-col justify-center items-center py-4">
      <h2 className="text-[50px] font-bold ">
        Error <span className="text-[#F15E75]">404</span>
      </h2>
      <img src="../../../public/error.png" alt="Error Page" width={400} />
      <div className="flex gap-5">
        <Link to={"/"}>
          <button className="btn btn-accent">Go Home</button>
        </Link>
        <button onClick={handleGoBack} className="btn btn-error">
          Go back
        </button>
      </div>
    </div>
  );
}
