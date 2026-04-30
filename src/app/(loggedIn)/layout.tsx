import { NavBar } from "./components/NavBar";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div
            className="flex h-screen w-full overflow-hidden"
        >
            <NavBar />
            <main className="min-w-0 flex-1 overflow-auto">
                {children}
            </main>
        </div>
    );
}