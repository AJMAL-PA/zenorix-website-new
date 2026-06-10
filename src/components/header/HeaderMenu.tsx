import { Link } from "react-router-dom";
import NavHeader from "@/components/ui/nav-header";

const HeaderMenu = () => {
    return (
        <>
            <header className="header-menu-wrap" style={{
                background: 'transparent',
                padding: '0',
            }}>
                <div className="custom-container">
                    <div
                        className="custom-row"
                        style={{
                            alignItems: 'center',
                            position: 'relative',
                            display: 'flex',
                            minHeight: '110px',
                        }}
                    >
                        {/* Logo — left-anchored, vertically centered */}
                        <Link
                            to="/"
                            className="logo"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                zIndex: 1,
                                flexShrink: 0,
                                textDecoration: 'none',
                            }}
                        >
                            <img
                                src="/assets/images/logoinblack-Photoroom%20(1).png"
                                alt="Zenorix Logo"
                                style={{
                                    height: '70px',
                                    width: 'auto',
                                    maxWidth: 'none',
                                    display: 'block',
                                    objectFit: 'contain',
                                }}
                            />
                        </Link>

                        {/* Animated sliding nav — absolutely centered in header */}
                        <nav
                            className="navbar"
                            style={{
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)', // ← removed the +20px offset
                                zIndex: 0,
                            }}
                        >
                            <NavHeader />
                        </nav>

                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderMenu;