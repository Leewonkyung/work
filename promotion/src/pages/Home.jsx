import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();

  return (
    <>
      Home
      <button onClick={() => nav(`/work01`)}>work01</button>
      <button onClick={() => nav(`/work02`)}>work02</button>
    </>
  );
};
export default Home;
