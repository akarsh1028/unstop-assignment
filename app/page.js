import Sidebar from "./components/Sidebar";
import MyAssessment from "./components/home/MyAssessment";
import Topbar from "./components/home/Topbar";

export default function Home() {
  return (
    <main className="flex xl:gap-4 xl:max-w-[1440px] xl:m-auto">
      <div className="max-xl:hidden bg-white sticky top-0 h-screen"><Sidebar/></div>
      <div className="w-full xl:bg-white xl:rounded-xl">
        <Topbar/>
        <MyAssessment/>
      </div>
    </main>
  )
}
