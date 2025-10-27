import AboutImage from "../../assets/home/about.svg";
const Intro = () => {
  return (
    <div className="max-w-[1300px] w-[100%] px-[20px] md:px-[50px] py-[50px] flex flex-col md:flex-row justify-between items-center">
      <div className="w-full md:w-[50%] md:h-[500px] flex md:block items-center justify-center pb-[50px] md:pb-[0px]">
        <img
          src={AboutImage}
          alt="About-Image"
          className="h-[250px] md:h-[500px] "
        />
      </div>
      <div className="w-full md:w-[50%] h-full md:h-[500px] flex items-center justify-center">
        <p>
          For over 40 years, we have built CSR on the foundations of trust,
          reliability, and innovation. Having been at the forefront of progress
          that is driven by our values ofresponsible, sustainable practices with
          long-lasting relationships. Through our future-focused approach, we
          strive for the ideal of ‘Vasudhaiva Kutumbakam believes that the world
          is one family, bound by shared values, mutual respect, and collective
          responsibility to create a more compassionate and inclusive future. We
          are committed to aligning our efforts with Sustainable Development
          Goals laid out by the United Nations Development Programme, ensuring
          our work contributes meaningfully to global well-being. Guided by a
          forward-looking spirit, our inspiration is drawn from our philosophy
          of progress and possibility. Our every step reflects our progressive,
          forward-thinking way of doing things, reminding us that true growth is
          found in constantly (and consistently) moving toward and embracing
          what lies ahead. As we continue to look into a future full of
          possibilities and promises, we aim to develop nurturing communities
          that are deeply connected, consciously driven, while fostering a sense
          of togetherness.
        </p>
      </div>
    </div>
  );
};

export default Intro;
