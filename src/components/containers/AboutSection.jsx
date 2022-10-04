import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import { useQuery } from "react-query";
import { getInformation } from "../../fetchers";
import { childrenAnimation } from "../../lib/motion";
import { Spinner } from "../utils";
const AboutSection = () => {
  const { data, isLoading } = useQuery("information", getInformation);

  if (isLoading)
    return (
      <div className="block py-20 text-center">
        <Spinner />
      </div>
    );

  if (!data) return null;

  return (
    <div className="grid grid-cols-2 items-center gap-7">
      <div className="col-span-2 lg:col-span-1">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          variants={childrenAnimation}
          className="about-image overflow-hidden rounded-lg"
        >
          {/* <div className="about-image-inner fiximage relative border-10 border-primary border-opacity-10">
            <Image
              loader={imageLoader}
              unoptimized={true}
              src={data.largeImage}
              height={422}
              width={660}
              layout="responsive"
              alt={data.fullName}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(660, 422)
              )}`}
            />
          </div> */}
          <div className=" border-10 border-primary border-opacity-10">
            <ReactPlayer
              url={data.largeVideo}
              playing={true}
              // light={true}
              muted={true}
              // onReady={true}
              // playIcon={true}
              // loop={true}
              // controls={true}
            />
          </div>
        </motion.div>
      </div>
      <div className="col-span-2 lg:col-span-1">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          variants={childrenAnimation}
          className="about-content"
        >
          <h2 className="text-3xl ordinal text-primary md:text-4xl">
            {data.fullName}
          </h2>
          <span className="text-xl text-primary  md:text-2xl ">
            -Full Of Tech Senses
          </span>

          <p>
            Inflexiont, is one of the leading IT Solution & Consultation Company
            that aims to deliver the best technology Solutions. We are the team
            that provides web design, web development, and app development. Save
            your time and efforts and hire the best team at the right time with
            a cost-effective, easy-to-use, and unified platform.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
