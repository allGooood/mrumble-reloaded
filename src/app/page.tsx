import Menubar from "../components/menubar/Menubar";
import NationalFlavors from "../components/NationalFlavors";

export default function Home() {
  return (
    <div className="flex
                    justify-center
    ">
      <NationalFlavors />
      {/* <Menubar /> */}
    </div>
  );
}
