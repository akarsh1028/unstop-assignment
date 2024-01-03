import Sidebar from "./components/Sidebar";
import MyAssessment from "./components/home/MyAssessment";
import Topbar from "./components/home/Topbar";

export default function Home() {
  return (
    <main className="flex lg:bg-whiteblue lg:gap-4 lg:max-w-[1440px] lg:m-auto">
      <div className="max-lg:hidden bg-white sticky top-0 h-screen"><Sidebar/></div>
      <div className="w-full lg:w-[79rem] lg:bg-white lg:rounded-xl">
        <Topbar/>
        <MyAssessment/>
      </div>
    </main>
  )
}
