import sankeerth from "../assets/leadership/C.SankeerthAdityaReddy.jpg";
import shekar from "../assets/leadership/C.ShekarReddy.jpg";
import himareddy from "../assets/leadership/HIMAReddy.jpg";
const Leadership = () => {
  return (
    <section className="flex items-center flex-col justify-center max-w-[1300px]  ">
      <h1 className="text-[45px] text-[#A0AB9B] text-center py-[50px] font-weight-300">
        LEADERSHIP
      </h1>
      <div className="px-[20px] md:px-[50px]">
        <img src={shekar} alt="chairman-shekar" className="leadership-img" />
        <h2 className="text-[20px] text-[#63A37B] ">C. SHEKAR REDDY</h2>
        <p className="font-bold mb-[10px] text-[#404041]">
          Chairman & Managing Director
        </p>
        <p className=" md:w-[40%] text-[#404041]">
          A civil engineer with over three decades of experience in real estate,
          he has been a driving force in shaping policies at both state and
          national levels. A founding member of CREDAI and former National
          President, he has played a pivotal role. His contributions include
          championing rainwater harvesting, recycling initiatives, and leading
          the award-winning eco-friendly Lotus Pond project. He is currently the
          National Vice Chairman of the Indian Green Building Council.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-[50px] md:gap-0 md:px-[50px] px-[20px] py-[50px] w-[100%]">
        <div className="w-[100%] md:w-[50%]">
          <img
            src={sankeerth}
            alt="Director-sankeerth"
            className="leadership-img"
          />
          <h2 className="text-[20px] text-[#63A37B] ">
            C. SANKEERTH ADITYA REDDY
          </h2>
          <p className="font-bold mb-[10px] text-[#404041]">Director</p>
          <p className="  text-[#404041] w-[75%]">
            A civil engineer and management specialist by education, Mr.
            Sankeerth brings a passion for building and construction to CSR
            Estates. As a tech enthusiast, he integrates innovative technologies
            to enhance efficiency and sustainability. With his strong academic
            background, he plays a key role in shaping CSR Estates’ future,
            overseeing projects with a focus on excellence.
          </p>
        </div>
        <div className="flex flex-col items-start md:items-start w-[100%] md:w-[50%]">
          <img
            src={himareddy}
            alt="Director-Himareddy"
            className="leadership-img "
          />
          <h2 className="text-[20px] text-[#63A37B] ">HIMA REDDY</h2>
          <p className="font-bold mb-[10px] text-[#404041]">Director</p>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
