import { NavBar } from "./components/NavBar";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div
            className="flex h-screen w-full overflow-hidden"
        >
            <NavBar />
            {children}
        </div>
    );
}