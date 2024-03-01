import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <h1 className="h1 text-red-400">Mindblast</h1>
      <div className="pt-16 lg:pt-20 overflow-hidden">
        <Button href="#login" className="mt-10">
          Button
        </Button>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
