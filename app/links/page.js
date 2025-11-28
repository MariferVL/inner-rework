import { FiGlobe, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

const links = [
    {
        label: 'Portfolio',
        href: '/',
        icon: FiGlobe,
        color: 'cyan',
    },
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/marifervl',
        icon: FiLinkedin,
        color: 'blue',
    },
    {
        label: 'GitHub',
        href: 'https://github.com/marifervl',
        icon: FiGithub,
        color: 'white',
    },
    {
        label: 'Email',
        href: 'mailto:marifervl.dev@gmail.com',
        icon: FiMail,
        color: 'pink',
    },
];

export default function LinksPage() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background cyberpunk effect */}
            <div className="background" />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

            {/* Scan line effect*/}
            <div className="absolute inset-0 pointer-events-none z-50">
                <div className="bg-scan-line-gradient animate-scan-line opacity-30" />
            </div>

            {/* Main content */}
            <main className="relative z-10 w-full max-w-md">
                {/* Glass container */}
                <div className="glass-effect rounded-lg p-8 shadow-2xl border border-cyan-500/20">
                    {/* Header */}
                    <header className="text-center mb-8">
                        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-white glitch" data-text="Marifer Villalobos">
                            Marifer VL
                        </h1>
                        <p className="text-cyan-400 text-sm md:text-base font-mono mb-2">
                            Frontend · Python · DevOps
                        </p>
                        <p className="text-gray-400 text-xs md:text-sm">
                            Events · Resources · Mentorship · ES / EN
                        </p>
                    </header>

                    {/* Links */}
                    <nav className="space-y-3">
                        {links.map((link, index) => {
                            const Icon = link.icon;
                            const colorClasses = {
                                cyan: 'border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-cyan-500/50',
                                blue: 'border-blue-500/40 hover:border-blue-400 hover:bg-blue-500/10 hover:shadow-blue-500/50',
                                white: 'border-white/40 hover:border-white hover:bg-white/10 hover:shadow-white/50',
                                pink: 'border-pink-500/40 hover:border-pink-400 hover:bg-pink-500/10 hover:shadow-pink-500/50',
                            }[link.color];

                            return (
                                <a
                                    key={index}
                                    href={link.href}
                                    className={`
                    flex items-center justify-center gap-3 w-full
                    min-h-[44px] px-6 py-3
                    bg-black/40 backdrop-blur-sm
                    border rounded
                    text-white font-mono text-sm md:text-base
                    transition-all duration-300
                    hover:scale-105 hover:shadow-lg
                    ${colorClasses}
                  `}
                                    target={link.href.startsWith('http') ? '_blank' : undefined}
                                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                >
                                    <Icon className="text-lg flex-shrink-0" />
                                    <span className="flex items-center gap-2">
                                        {link.label}
                                        {link.sublabel && (
                                            <span className="text-xs opacity-70">— {link.sublabel}</span>
                                        )}
                                    </span>
                                </a>
                            );
                        })}
                    </nav>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-cyan-500/30 -translate-x-4 -translate-y-4 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-pink-500/30 translate-x-4 translate-y-4 pointer-events-none" />
            </main>
        </div>
    );
}