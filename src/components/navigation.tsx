"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/work-with-me", label: "Work With Me" },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="fixed w-full bg-white/90 backdrop-blur-lg z-50 border-b shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition">
                        Josh Cheetham
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-lg transition-all ${isActive(link.href)
                                    ? "text-blue-600 font-semibold"
                                    : "text-gray-600 hover:text-blue-600"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative z-50"
                        >
                            {isOpen ? <X className="h-6 w-6 text-blue-600" /> : <Menu className="h-6 w-6 text-blue-600" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="fixed inset-0 bg-gray-50 pt-16 z-40">
                    <div className="flex flex-col items-center space-y-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`text-xl ${isActive(link.href)
                                    ? "text-blue-600 font-semibold"
                                    : "text-gray-700 hover:text-blue-600"
                                    } transition`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
