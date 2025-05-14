import CookieCard from "./components/CookieCard";
import NationalFlavors from "./components/NationalFlavors";

export default function Home() {
  return (
    <div className="flex
                    justify-center
    ">
      <NationalFlavors />
      {/* <CookieCard /> */}
    </div>
  );
}
