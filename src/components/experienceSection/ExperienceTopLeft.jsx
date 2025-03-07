import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2022
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="0" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="6" text="Months" />
      </div>
      <p className="text-justify">
        With experience in banking services, doctor appointment systems, and job portals, I specialize in building scalable and user-friendly web applications using React, modern JavaScript, AWS, and serverless computing. 🚀
      </p>
      {/* <ExperienceInfo number="$100k" text="Max Budget" /> */}
    </div>
  );
};

export default ExperienceTopLeft;
