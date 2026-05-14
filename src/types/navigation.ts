export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: "instagram" | "facebook" | "youtube" | string;
  url: string;
  /** Material Icons name atau brand icon */
  icon: string;
  ariaLabel: string;
}

export interface NavigationData {
  mainLinks: NavLink[];
  socialLinks: SocialLink[];
}
