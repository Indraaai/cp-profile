import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const topBarData = {
  location: "Jakarta, Indonesia",
  social: [
    {
      platform: "Facebook",
      url: "https://facebook.com/learningwithus",
      ariaLabel: "Kunjungi Facebook Learning With Us",
      Icon: FacebookIcon,
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/learningwithus",
      ariaLabel: "Kunjungi Twitter Learning With Us",
      Icon: TwitterIcon,
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/learningwithus",
      ariaLabel: "Kunjungi Instagram Learning With Us",
      Icon: InstagramIcon,
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/company/learningwithus",
      ariaLabel: "Kunjungi LinkedIn Learning With Us",
      Icon: LinkedInIcon,
    },
  ],
};

export default function TopBar() {
  return (
    <div className="hidden border-b border-primary-100 bg-primary-50 text-primary-700 md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs sm:px-6 lg:px-8">
        {/* Location */}
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5">
            <LocationOnIcon className="!text-base" aria-hidden="true" />
            <span>{topBarData.location}</span>
          </span>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-1">
          {topBarData.social.map(({ platform, url, ariaLabel, Icon }) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ariaLabel}
              className="inline-flex h-7 w-7 items-center justify-center rounded-full text-primary-600 transition-colors hover:bg-primary-100 hover:text-primary-800"
            >
              <Icon className="!text-base" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
