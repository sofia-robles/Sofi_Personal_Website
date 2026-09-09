const links = [
    { label: "Personal GitHub", href: "https://github.com/sofia-robles" },
    { label: "University GitHub", href: "https://github.com/robles-sofia" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sofianrobles/" },
];

export default function Resume() {
    return(
    <main className="max-w-2xl mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Resume</h1>
        
        <ul>
            {links.map((link) => (
                <li key={link.href}>
                    <a href={link.href} className="underline" target="_blank" rel="noopener noreferrer">
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>

        <p>Enter resume info here</p>
    </main>
    );
}