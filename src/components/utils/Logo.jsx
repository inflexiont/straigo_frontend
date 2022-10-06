import Link from "next/link";

const Logo = ({ url = "/", text = false }) => {
  return (
    <Link href={url}>
      <a className="sitelogo py-2">
        {text ? (
          <span className="text-4xl font-bold uppercase leading-none text-primary">
            straigo
          </span>
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-10 max-h-full w-auto"
              src="/images/logo_light.png"
              alt="straigo"
            />
            {/* <h2 className="text-[green]">straigo.</h2> */}
          </>
        )}
      </a>
    </Link>
  );
};

export default Logo;
