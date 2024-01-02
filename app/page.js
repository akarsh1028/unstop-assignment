import Sidebar from "./components/Sidebar";
import MyAssessment from "./components/home/MyAssessment";
import Topbar from "./components/home/Topbar";

export default function Home() {
  return (
    <main className="flex">
      <div className="max-lg:hidden"><Sidebar/></div>
      <div className="">
        <Topbar/>
        <MyAssessment/>
      </div>
    </main>
  )
}
