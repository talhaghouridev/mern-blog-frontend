import { HeroImage } from "@assets/Images";
import { Image } from "@components/ui";

export const Hero = () => {
  return (
    <section
      id="hero "
      className="w-[100%] h-[100%] bg-white border-b border-solid border-[#ededed]  "
    >
      <div className="container grid grid-cols-1  md:grid-cols-2 py-[75px] sm:py-[90px] gap-[40px]">
        {/* Banner Info  */}
        <div className=" h-[100%] flex items-start justify-center flex-col gap-[10px]">
          <h1 className=" text-[40px] md:text-[50px] font-PoppinsBold font-bold text-[#222935] leading-[1.2] max-w-[400px]">
            Read the most interesting articles{" "}
          </h1>
          <p className="text-[15px] text-[#0F3460] font-Sans mt-[12px]">
            Explore innovation at your fingertips. Find cutting-edge tech
            gadgets that blend seamlessly into your lifestyle.
          </p>
        </div>

        {/* Banner Info Image */}
        <div className="h-[100%] w-[100%] flex items-center justify-center">
          <Image
            src={HeroImage}
            alt="hero"
            className="h-[350px] w-[100%] sm:h-[550px] sm:w-[550px] max-w-[100%] max-h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
