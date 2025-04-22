const HeroLeft = () => {
  return (
    <>
      <div>
        <h1 className="lg:text-5xl/tight font-bold text-3xl/tight text-content-primary ">
          Unlock Your Potential <br />
          With Byway
        </h1>
        <p className="mt-4 text-content-secondary text-body-base/relaxed lg:max-w-[70%]">
          Welcome to Byway, where learning knows no bounds. We believe that
          education is the key to personal and professional growth, and we're
          here to guide you on your journey to success.
        </p>
        <div className="mt-4">
          <button className="bg-accent-primary flex flex-row px-5 py-2  text-amber-50 text-body-base rounded-small ">
            Start your instructor journey
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroLeft;
