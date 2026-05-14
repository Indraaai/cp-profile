import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const topBarData = {
  location: "Jakarta, Indonesia",
  email: "hello@learningwithus.id",
  hours: "Senin - Jumat: 09:00 - 18:00",
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
        {/* Contact info */}
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5">
            <LocationOnIcon className="!text-base" aria-hidden="true" />
            <span>{topBarData.location}</span>
          </span>
          <a
            href={`mailto:${topBarData.email}`}
            className="hidden items-center gap-1.5 transition-colors hover:text-primary-900 lg:inline-flex"
          >
            <EmailIcon className="!text-base" aria-hidden="true" />
            <span>{topBarData.email}</span>
          </a>
        </div>

        {/* Office hours */}
        <div className="hidden items-center gap-1.5 lg:flex">
          <AccessTimeIcon className="!text-base" aria-hidden="true" />
          <span>{topBarData.hours}</span>
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
