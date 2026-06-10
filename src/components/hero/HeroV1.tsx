import { HeroLanding, HeroLandingProps } from "@/components/ui/hero-1";
import { BeamsBackground } from "@/components/ui/beams-background";

const HeroV1 = () => {
    const heroProps: HeroLandingProps = {
        title: <>Designing <span className="text-purple-500">Digital Experiences</span> That Stand Out</>,
        description: "We craft powerful websites, intuitive software, and compelling visuals that drive results. Whether you're a startup or a brand in growth mode — we're your creative tech partner.",
        callToActions: [
            {
                text: "View Our Work",
                href: "/projects",
                variant: "primary"
            },
            {
                text: "Chat With Us",
                href: "/contact",
                variant: "secondary"
            }
        ],
        titleSize: "large",
        gradientColors: {
            from: "oklch(0.3 0.15 280)", // Deep purple
            to: "oklch(0.2 0.2 320)"    // Dark magenta
        },
        className: "bg-transparent text-white"
    };

    return (
        <BeamsBackground
            id="hero"
            className="bg-black"
            intensity="strong"
        >
            <HeroLanding {...heroProps} />
        </BeamsBackground>
    );
};

export default HeroV1;