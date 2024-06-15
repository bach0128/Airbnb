import "./globals.css";
import Sidebar from "../components/Sidebar/index";
import { getServerSession } from "next-auth";
import SessionProvider from "../components/SessionProvider";
import NavMenu from "../components/NavMenu";

export const metadata = {
  title: "Airbnb admin page",
  description: "Project",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={`  h-screen max-h-full min-h-full`}>
        <SessionProvider session={session}>
          <div className="flex flex-row h-screen">
            {session?.user && <Sidebar />}

            <div className="flex flex-col w-full">
              <NavMenu />
              {children}
            </div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
