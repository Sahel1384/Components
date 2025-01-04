import btn from "../assets/img/Group 93.png";
import number from "../assets/img/01.png";
import ui from "../assets/img/UX Design.png";
import btn1 from "../assets/img/Button.png";
import rect from "../assets/img/Rectangle 92.png";
import share from "../assets/img/Sharing some unique creations.png";
import btn2 from "../assets/img/Button (1).png";
import bg from "../assets/img/Vector 16.png";
function Services() {
  return (
    <div className="relative pb-20">
      <div className="flex flex-col md:flex-row justify-start">
        <div className="flex flex-col px-10 sm:px-20 gap-4 justify-start pt-1 sm:pt-8 bg-servImg bg-contain h-64 bg-no-repeat w-full md:w-[500px] lg:w-[600px] xl:w-[50%]">
          <div>
            <p className="font-semibold text-[13px]">Brilliant minds</p>
            <h1 className="font-semibold text-3xl mt-1">OUR SERVICES</h1>
          </div>
          <p className="w-80 text-[13px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center sm:mt-10 md:mt-0 md:items-start gap-4">
          <div className="flex justify-between items-center gap-5 md:gap-1 lg:gap-5">
            <img
              src={btn}
              className="cursor-pointer w-24 md:w-[70px] lg:w-24 h-8 md:h-7 lg:h-8"
              alt=""
            />
            <button className="bg-white text-sm px-3 lg:px-5 py-[6.5px] rounded-full">
              Design
            </button>
            <button className="bg-white text-sm px-3 lg:px-5 py-[6.5px] rounded-full">
              Development
            </button>
          </div>
          <div className="flex justify-center items-center gap-5 md:gap-1 lg:gap-5">
            <button className="bg-white text-sm px-5 py-[6.5px] rounded-full">
              Coding
            </button>
            <button className="bg-white text-sm px-5 py-[6.5px] rounded-full">
              Digital Marketing
            </button>
          </div>
        </div>
      </div>
      <div className="px-5 md:px-14 lg:px-40 xl:px-64 mt-5">
        <div className="flex justify-between sm:justify-center sm:gap-[480px] items-center w-full">
          <div className="flex sm:justify-center items-center gap-2 sm:gap-7 w-full sm:w-auto">
            <img src={number} className="w-5" alt="" />
            <img src={ui} className="w-24 lg:w-32 mt-[5px]" alt="" />
          </div>
          <img src={btn1} className="w-10 cursor-pointer" alt="" />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-2 w-full">
          <div className="w-full">
            <img src={rect} className="w-[100%] lg:w-96" alt="" />
          </div>
          <div className="w-full">
            <img src={share} className="w-60" alt="" />
            <p className="text-white text-[12px] mt-3 w-full lg:w-80">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal.
            </p>
          </div>
        </div>
      </div>
      <div className="xl:px-52 mt-10 flex flex-col justify-center items-center gap-5">
        <hr className="w-full sm:w-[600px] md:w-[703px]" />
        <div className="flex px-5 sm:px-0 justify-between w-full sm:justify-center sm:gap-[350px] md:gap-[500px] items-center text-white">
          <div className="flex items-center justify-center gap-5">
            <p className="text-[#bfbfbf]">02</p>
            <p className="text-[#bfbfbf] font-medium text-lg">Graphoc Design</p>
          </div>
          <div>
            <img src={btn2} className="w-10 cursor-pointer" alt="" />
          </div>
        </div>
        <hr className="w-full sm:w-[600px] md:w-[703px]" />
        <div className="flex px-5 sm:px-0 justify-between w-full sm:justify-center sm:gap-[350px] md:gap-[480px] items-center text-white">
          <div className="flex items-center justify-center gap-5">
            <p className="text-[#bfbfbf]">02</p>
            <p className="text-[#bfbfbf] font-medium text-lg">
              Animation Design
            </p>
          </div>
          <div>
            <img src={btn2} className="w-10 cursor-pointer" alt="" />
          </div>
        </div>
        <hr className="w-full sm:w-[600px] md:w-[703px]" />
        <div className="flex px-5 sm:px-0 justify-between w-full sm:justify-center sm:gap-[350px] md:gap-[500px] items-center text-white">
          <div className="flex items-center justify-center gap-5">
            <p className="text-[#bfbfbf]">02</p>
            <p className="text-[#bfbfbf] font-medium text-lg">Front-End Dev</p>
          </div>
          <div>
            <img src={btn2} className="w-10 cursor-pointer" alt="" />
          </div>
        </div>
        <hr className="w-full sm:w-[600px] md:w-[703px]" />
      </div>
      <img src={bg} className="absolute right-0 bottom-0 w-80" alt="" />
    </div>
  );
}

export default Services;
