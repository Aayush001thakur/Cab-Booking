import Navbar from "./component/navbar"
import { MdSpaceDashboard } from "react-icons/md";
import Sidebar from "./component/sidebar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen">
      <div className="flex h-screen">
        <div className="lg:w-2/12 md:w-2/12 h-full lg:relative md:relative absolute ">
          <Sidebar />
        </div>
        <div className="lg:w-10/12 md:lg:w-10/12 h-full overflow-y-auto">
          <div className="w-full ">
            <Navbar />

          </div>
          <div className="bg-gray-300 pt-5">
            {children}
          </div>


        </div>
      </div>
    </div>
  )
}

