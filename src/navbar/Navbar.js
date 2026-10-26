
import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  IconButton,
  CloseButton,
  Portal,
} from "@chakra-ui/react";

import {
  FiMenu,
  FiArrowUpRight,
  FiCode,
} from "react-icons/fi";

import { Link as ScrollLink } from "react-scroll";

import NavLogo from "../Media/jkb-png.webp";
import ResumeDownloadButton from "../ReuableComponents/ResumeDownloadButton";
import "./navbar.css";

const navItems = [
  { label: "About", to: "aboutMe" },
  { label: "Skills", to: "myskills" },
  { label: "Projects", to: "myProjects" },
  { label: "Services", to: "myservice" },
  { label: "Blogs", to: "myblogs" },
  { label: "Contact", to: "contactme" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const openMenu = () => setIsOpen(true);

  // Close drawer with Escape and prevent background scrolling.
  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Close drawer if the viewport switches to desktop.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderNavLink = (item, mobile = false) => (
    <ScrollLink
      key={item.to}
      to={item.to}
      spy={true}
      smooth={true}
      offset={-85}
      duration={500}
      activeClass="active"
      onClick={closeMenu}
      className={
        mobile ? "mobile-nav-link" : "desktop-nav-link"
      }
    >
      {mobile && (
        <span className="mobile-nav-number">
          {String(navItems.indexOf(item) + 1).padStart(2, "0")}
        </span>
      )}

      <span>{item.label}</span>

      {mobile && (
        <FiArrowUpRight className="mobile-nav-arrow" />
      )}
    </ScrollLink>
  );

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <Box as="header" className="premium-navbar">
        <Flex
          className="navbar-inner"
          align="center"
          justify="space-between"
        >
          {/* Logo */}

          <a
            href="#home"
            className="navbar-brand"
            aria-label="Go to homepage"
            onClick={closeMenu}
          >
            <img src={NavLogo} alt="Juber Khan" />
          </a>

          {/* Desktop navigation */}

          <HStack className="desktop-navigation" gap={1}>
            {navItems.map((item) =>
              renderNavLink(item, false)
            )}

            <Box className="desktop-resume">
              <ResumeDownloadButton className="navButton" />
            </Box>
          </HStack>

          {/* Mobile menu button */}

          <IconButton
            className="mobile-menu-button"
            aria-label="Open navigation menu"
            title="Open menu"
            onClick={openMenu}
            variant="ghost"
            fontSize="25px"
            color="white"
          >
            <FiMenu />
          </IconButton>
        </Flex>
      </Box>

      {/* ================= MOBILE DRAWER ================= */}

      <Portal>
        {/* Backdrop */}

        <Box
          as="button"
          type="button"
          aria-label="Close navigation menu"
          aria-hidden={!isOpen}
          tabIndex={isOpen ? 0 : -1}
          className={`premium-drawer-overlay ${
            isOpen ? "is-open" : ""
          }`}
          onClick={closeMenu}
        />

        {/* Drawer panel */}

        <Box
          as="aside"
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio navigation"
          aria-hidden={!isOpen}
          className={`premium-drawer ${
            isOpen ? "is-open" : ""
          }`}
        >
          {/* Drawer header */}

          <Flex className="drawer-header" align="center" justify="space-between">
            <HStack gap={3}>
              <Box className="drawer-brand-icon">
                <FiCode />
              </Box>

              <VStack align="start" gap={0}>
                <Text className="drawer-brand-name">
                  JUBER KHAN
                </Text>

                <Text className="drawer-brand-caption">
                  FRONTEND DEVELOPER
                </Text>
              </VStack>
            </HStack>

            <CloseButton
              className="drawer-close-button"
              size="lg"
              aria-label="Close navigation menu"
              onClick={closeMenu}
            />
          </Flex>

          {/* Drawer content */}

          <Box className="drawer-body">
            <Box className="drawer-intro">
              <Text className="drawer-eyebrow">
                NAVIGATION <span>— PORTFOLIO</span>
              </Text>

              <Text className="drawer-heading">
                Explore
                <br />
                <span>my portfolio.</span>
              </Text>

              <Text className="drawer-description">
                Design-minded developer building modern digital
                experiences.
              </Text>
            </Box>

            {/* Navigation links */}

            <VStack
              className="mobile-navigation-list"
              align="stretch"
              gap={0}
            >
              {navItems.map((item) =>
                renderNavLink(item, true)
              )}
            </VStack>

            {/* Drawer footer */}

            <Box className="drawer-bottom">
              <Box className="drawer-availability">
                <span className="availability-dot" />

                <Text>
                  Open to exciting opportunities
                </Text>
              </Box>

              <Box className="drawer-resume">
                <ResumeDownloadButton className="navButton" />
              </Box>

              <Text className="drawer-footer-text">
                LET'S BUILD SOMETHING GREAT.
              </Text>
            </Box>
          </Box>
        </Box>
      </Portal>
    </>
  );
};

export default Navbar;
