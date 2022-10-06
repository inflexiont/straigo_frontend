const Spinner = () => {
  // const { data } = useQuery("information", getInformation);
  return (
    <div className="spinner relative inline-flex items-center justify-center rounded-full ">
      <span className="relative z-20 text-sm uppercase tracking-wider">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-10 max-h-full w-auto animate-ping animate-bounce animate-spin md:h-28 "
          src="/images/lodarLogo.png"
          alt="straigo"
        />
      </span>
      {/* <span className="absolute z-10 h-full w-full animate-spin rounded-full border-l-2 border-t-2 border-white border-opacity-50 bg-grey-lighten"></span> */}
    </div>
  );
};

export default Spinner;
