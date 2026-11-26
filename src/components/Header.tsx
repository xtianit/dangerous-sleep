import { useEffect, useRef, useState } from "react";
import { Minus, Plus, Moon, Sun, ChevronDown, Type } from "lucide-react";

type HeaderProps = {
    logo: string;
    contentData: { lessonDate: string };
    fontSize: number;
    adjustFontSize: (delta: number) => void;
    darkMode: boolean;
    toggleTheme: () => void;
};

export default function Header({
    logo,
    contentData,
    fontSize,
    adjustFontSize,
    darkMode,
    toggleTheme,
}: HeaderProps) {
    const [openDropdown, setOpenDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close the mobile panel only when tapping outside it or pressing Escape.
    useEffect(() => {
        if (!openDropdown) return;

        const onPointerDown = (e: PointerEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpenDropdown(false);
            }
        };
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpenDropdown(false);
        };

        document.addEventListener("pointerdown", onPointerDown);
        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("pointerdown", onPointerDown);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [openDropdown]);

    // touch-manipulation removes the double-tap-zoom delay so rapid taps all register.
    const stepBtn =
        "flex h-11 w-11 items-center justify-center rounded-xl touch-manipulation select-none transition active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70";

    return (
        <div className="flex flex-row justify-between p-3 items-center gap-3 md:flex-row sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
            {/* Logo + Lesson Name */}
            <div className="flex flex-row items-center gap-2">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-10 h-10 object-contain"
                    />
                </div>
                <div className="flex flex-col">
                    <p className="text-base font-semibold">
                        Sunday School Lesson
                    </p>
                    <p className="text-sm opacity-90">
                        {contentData.lessonDate}
                    </p>
                </div>
            </div>

            {/* Controls */}
            <div className="flex gap-2 items-center">
                {/* Desktop Controls */}
                <div className="hidden md:flex items-center gap-1 rounded-2xl bg-white/15 p-1 ring-1 ring-white/20 backdrop-blur-sm">
                    <button
                        type="button"
                        onClick={() => adjustFontSize(-2)}
                        className={`${stepBtn} hover:bg-white/25`}
                        title="Decrease Font Size"
                        aria-label="Decrease font size"
                    >
                        <Minus size={18} strokeWidth={2.5} />
                    </button>
                    <span
                        className="min-w-[3.5rem] text-center text-sm font-mono font-semibold tabular-nums"
                        aria-live="polite"
                    >
                        {fontSize}px
                    </span>
                    <button
                        type="button"
                        onClick={() => adjustFontSize(2)}
                        className={`${stepBtn} hover:bg-white/25`}
                        title="Increase Font Size"
                        aria-label="Increase font size"
                    >
                        <Plus size={18} strokeWidth={2.5} />
                    </button>
                </div>

                {/* Mobile Font Panel */}
                <div className="relative md:hidden" ref={dropdownRef}>
                    <button
                        type="button"
                        onClick={() => setOpenDropdown((o) => !o)}
                        aria-haspopup="true"
                        aria-expanded={openDropdown}
                        aria-label="Text size"
                        className={`flex h-11 items-center gap-1.5 rounded-xl px-3 touch-manipulation select-none ring-1 ring-white/25 transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
                            openDropdown ? "bg-white/30" : "bg-white/15"
                        }`}
                    >
                        <span className="text-base font-bold leading-none">Aa</span>
                        <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${openDropdown ? "rotate-180" : ""}`}
                        />
                    </button>

                    {openDropdown && (
                        <div
                            role="group"
                            aria-label="Text size controls"
                            className={`absolute right-0 mt-3 w-64 rounded-2xl p-4 shadow-2xl ring-1 backdrop-blur-xl ${
                                darkMode
                                    ? "bg-slate-900/95 text-slate-100 ring-white/10"
                                    : "bg-white/95 text-slate-800 ring-slate-200"
                            }`}
                        >
                            {/* little pointer arrow */}
                            <div
                                aria-hidden="true"
                                className={`absolute -top-1.5 right-6 h-3 w-3 rotate-45 ${
                                    darkMode ? "bg-slate-900" : "bg-white"
                                }`}
                            />

                            <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider opacity-60">
                                <Type size={13} aria-hidden="true" />
                                Text size
                            </div>

                            <div
                                className={`flex items-center justify-between gap-2 rounded-2xl p-1.5 ${
                                    darkMode ? "bg-slate-800" : "bg-slate-100"
                                }`}
                            >
                                <button
                                    type="button"
                                    onClick={() => adjustFontSize(-2)}
                                    aria-label="Decrease font size"
                                    className={`${stepBtn} h-12 w-12 bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-600/30 hover:brightness-110`}
                                >
                                    <Minus size={20} strokeWidth={2.75} />
                                </button>

                                <div className="flex flex-col items-center leading-tight">
                                    <span
                                        className="text-xl font-extrabold tabular-nums"
                                        aria-live="polite"
                                    >
                                        {fontSize}
                                    </span>
                                    <span className="text-[10px] font-semibold uppercase tracking-widest opacity-60">
                                        px
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => adjustFontSize(2)}
                                    aria-label="Increase font size"
                                    className={`${stepBtn} h-12 w-12 bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-600/30 hover:brightness-110`}
                                >
                                    <Plus size={20} strokeWidth={2.75} />
                                </button>
                            </div>

                            <button
                                type="button"
                                onClick={() => setOpenDropdown(false)}
                                className={`mt-3 w-full rounded-xl py-2.5 text-xs font-semibold touch-manipulation transition active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                                    darkMode
                                        ? "bg-slate-800 text-slate-200 hover:bg-slate-700"
                                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                }`}
                            >
                                Done
                            </button>
                        </div>
                    )}
                </div>

                {/* Theme Toggle */}
                <button
                    type="button"
                    onClick={toggleTheme}
                    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                    className="flex h-11 w-11 items-center justify-center rounded-xl touch-manipulation transition hover:bg-white/20 active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ml-1"
                >
                    {darkMode ? <Sun size={24} /> : <Moon size={24} />}
                </button>
            </div>
        </div>
    );
}
