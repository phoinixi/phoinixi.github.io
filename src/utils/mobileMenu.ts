/**
 * Initializes the mobile menu functionality
 */
export function initMobileMenu(): void {
  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenu = document.getElementById("close-mobile-menu");

  if (menuButton && mobileMenu && closeMenu) {
    // Remove existing listeners to avoid duplicates
    menuButton.replaceWith(menuButton.cloneNode(true));
    closeMenu.replaceWith(closeMenu.cloneNode(true));

    // Get fresh references after cloning
    const newMenuButton = document.getElementById("mobile-menu-button");
    const newCloseMenu = document.getElementById("close-mobile-menu");

    // Add event listeners
    if (newMenuButton) {
      newMenuButton.addEventListener("click", () => {
        mobileMenu.classList.remove("hidden");
        document.body.style.overflow = "hidden";
      });
    }

    if (newCloseMenu) {
      newCloseMenu.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        document.body.style.overflow = "";
      });
    }

    // Handle mobile menu links
    if (mobileMenu) {
      // Find all navigation links in the mobile menu
      const mobileLinks = Array.from(mobileMenu.querySelectorAll("nav a"));

      // Get the site title link from the mobile menu (not in the nav element)
      const siteTitleLink = mobileMenu.querySelector('a[href="/"]');
      if (
        siteTitleLink &&
        !mobileLinks.includes(siteTitleLink as HTMLAnchorElement)
      ) {
        mobileLinks.push(siteTitleLink as HTMLAnchorElement);
      }

      // Process all links
      mobileLinks.forEach((link) => {
        // Clone and replace to remove existing listeners
        const newLink = link.cloneNode(true);
        link.parentNode?.replaceChild(newLink, link);

        // Add custom click handler to each link
        newLink.addEventListener("click", (e) => {
          e.preventDefault(); // Prevent default navigation
          const href = (newLink as HTMLAnchorElement).getAttribute("href");

          // We're using a 10ms timeout to keep the menu open during navigation
          setTimeout(() => {
            window.location.href = href || "/";
          }, 10);
        });
      });
    }
  }
}
