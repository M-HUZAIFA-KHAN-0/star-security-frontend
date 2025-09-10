"use client";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import styles from "./Navigation.module.css";
import { usePathname } from "next/navigation";

function Navigation() {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const pathname = usePathname();

    const handleClose = () => setShowOffcanvas(false);
    const handleToggle = () => setShowOffcanvas(!showOffcanvas);
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    const navLinks = [
        { href: "/", label: "HOME" },
        { href: "/about", label: "ABOUT US" },
        { href: "/business", label: "OUR BUSINESS" },
        { href: "/network", label: "OUR NETWORK" },
        { href: "/careers", label: "CAREERS" },
        { href: "/clients", label: "CLIENTS" },
        { href: "/testimonials", label: "TESTIMONIALS" },
    ];

    return (
        <>
            <Navbar className={styles.customNavbar}>
                <div className={styles.navItemRow}>
                    {/* Logo */}
                    <Navbar.Brand className={styles.logo}>
                        <Link href="/" className={styles.logo}>
                            <span className={styles.logoYellow}>Star </span>
                            <span className={styles.logoBlack}>Security</span>
                        </Link>
                    </Navbar.Brand>

                    {/* Desktop Links */}
                    <Nav className={styles.navWrapper}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`${styles.navLink} ${
                                    pathname === link.href ? styles.activeNav : ""
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className={styles.loginContainer}>
                            <Link href="/contact" className={`btn ${styles.navBtn}`}>
                                CONTACT US
                            </Link>
                        </div>
                    </Nav>

                    {/* Hamburger Toggle (Mobile) */}
                    <button
                        className={`${styles.hamburgerToggle} d-lg-none`}
                        onClick={handleToggle}
                        aria-label="Toggle navigation menu"
                        aria-expanded={showOffcanvas}
                    >
                        <span className={styles.hamburgerBar}></span>
                        <span className={styles.hamburgerBar}></span>
                        <span className={styles.hamburgerBar}></span>
                    </button>
                </div>
            </Navbar>

            {/* Mobile Offcanvas Menu */}
            {showOffcanvas && (
                <div className={styles.offcanvasBackdrop} onClick={handleBackdropClick}>
                    <div className={`${styles.offcanvas} ${showOffcanvas ? styles.show : ""}`}>
                        <div className={styles.offcanvasHeader}>
                            <div className={styles.offcanvasTitle}>
                                <span className={styles.logoYellow}>Star </span>
                                <span className={styles.logoBlack}>Security</span>
                            </div>
                            <button
                                className={styles.closeButton}
                                onClick={handleClose}
                                aria-label="Close menu"
                            >
                                ×
                            </button>
                        </div>
                        <div className={styles.offcanvasBody}>
                            <Nav className={styles.mobileNav}>
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={styles.mobileNavLink}
                                        onClick={handleClose}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <div className={styles.mobileLoginContainer}>
                                    <Link
                                        href="/contact"
                                        className={`btn ${styles.mobileLoginBtn}`}
                                        onClick={handleClose}
                                    >
                                        CONTACT US
                                    </Link>
                                </div>
                            </Nav>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navigation;
