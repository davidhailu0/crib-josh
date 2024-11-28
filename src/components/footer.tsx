import { Mail, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-background border-t">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Josh Cheetham</h3>
                        <p className="text-muted-foreground">
                            Transforming businesses and empowering entrepreneurs through expert coaching
                            and network marketing strategies.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <div className="space-y-2">
                            <Link href="/" className="block text-muted-foreground hover:text-primary transition-colors">
                                Home
                            </Link>
                            <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                                About
                            </Link>
                            <Link href="/work-with-me" className="block text-muted-foreground hover:text-primary transition-colors">
                                Work With Me
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="mailto:contact@joshcheetham.com" className="text-muted-foreground hover:text-primary transition-colors">
                                <Mail className="h-6 w-6" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Josh Cheetham. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}