import Image from "next/image"
import { FaArrowRightLong } from "react-icons/fa6";
import Introduction from "@/components/introduction"
import Link from "next/link";

export default function Home() {
  return (
    <section>
      {/* PART 1 */}

    <div className="overflow-hidden flex w-full bg-repeat-y relative h-screen self-center justify-between  min-h-screen bg-primary ">
      <div className="flex flex-col text-start text-[50px] md:text-5xl md:w-8 lg:text-7xl font-figtree text-secondary line-height-1428 font-weight-400 mt-40">
      <h1 className="pl-2 sm:pl-8 flex flex-wrap" >
        GLOBAL NO.1
        <br/>
         ENTERTAINMENT GROUP</h1>
  
      <div className="flex w-[40rem]  justify-end items-end 
        absolute bottom-0 -right-[20rem] duration-200
        sm:-right-[10rem] translate-y-[10rem] ">
        <Image className="hidden md:flex transform " src="/sment2...png" alt="gambarr" width={900} height={900}></Image>
      </div>
      </div>
    </div>

{/* ======================================================= */}

    {/* PART 2 */}

    {/* SLIDE 1 */}
    <div className="overflow-hidden flex w-90 bg-repeat-y relative h-auto self-center justify-between  bg-secondary ">
      <div className="flex text-start flex-col text-[50px] md:text-7xl font-figtree text-black mt-5">
        <h1 className="pl-[10%] sm:pl-[10%] mb-7 flex flex-wrap" data-aos="fade-up">NEWS</h1>
        
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full flex flex-col gap-10 item-center justify-center"data-aos="fade-up">
           

            <Link href="" className=" text-4xl text-black px-[10%] md:text-[16px] lg:text-[30px] sm:text-2xl transform"
                  >NCT 127 Hangul 엔시티 127 RR ensiti il-i-chil
                  is the second sub-unit of the South Korean male vocal group NCT formed by SM Entertainment. </Link>

            <p className="text-base text-black px-[10%] mb-10">
            They originally debuted on July 7, 2016, with their debut extended play NCT 127, with an original lineup of seven members: Taeil, Taeyong, Yuta, Jaehyun, Winwin, Mark, and Haechan. Doyoung and Johnny joined the unit in December 2016, ahead of their second EP Limitless, while Jungwoo, the final member, was introduced in September 2018 ahead of their first studio album Regular-Irregular. </p> 

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle opacity-60">❮</a> 
              <a href="#slide2" className="btn btn-circle opacity-60">❯</a>
            {/* </div> */}
          </div>
          </div>

            {/* SLIDE 2 */}
          <div id="slide2" className="carousel-item relative w-full flex flex-col gap-10 item-center justify-center " data-aos="fade-up">
            <a href="#nct127" className=" text-4xl text-black md:px-[10%] sm:text-2xl md:text-[16px] lg:text-[30px] transform"
                  >NCT Dream Hangul 엔시티 드림 RR Ensiti Deurim is the third sub-unit of the South Korean boy band NCT, consisting exclusively of teenagers in their teens. </a>

            <p className="text-base text-black px-[10%] mb-10">
            Originally, the sub-unit had a graduation system where members who passed the age of 20 would drop out, but in 2020, this system was replaced and made NCT Dream a permanent unit of NCT. The unit made its debut on August 25, 2016 with the song Chewing Gum and seven members: Mark, Renjun, Jeno, Haechan, Jaemin, Chenle and Jisung. </p> 

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle opacity-60">❮</a> 
              <a href="#slide3" className="btn btn-circle opacity-60">❯</a>
            </div>
          </div> 
        </div>
      

    {/* ================================================= */}

    {/* PART 3 */}

    <div id="#about" className="overflow-hidden flex w-full bg-repeat-y relative self-center justify-between  bg-third ">

      <div  className="flex pl-[10%] sm:pl-[10%] flex-col text-start md:text-7xl font-figtree text-black mt-5 ">
        <h1 id="#about" className=" flex flex-wrap sm:pl[10%] mb-7 " data-aos="fade-up">ABOUT</h1>

          <p className="text-base text-black mb-[20px] "data-aos="fade-up">Established in 1995, SM Entertainment has been a trailblazer in the world of entertainment, reshaping the very essence of K-POP and revolutionizing the industry as a whole. We take immense pride in pioneering the comprehensive artist development system, covering casting, training, production, and management, setting the stage for what K-POP is today.Our journey commenced with the ignition of the `&quot;`Korean Wave`&quot;`, propelling K-POP onto the global stage. With our unwavering commitment to excellence, we continue to set pivotal milestone in the entertainment realm, propelling ourselves beyond Asia to emerge as a top global entertainment company.
          <br/> 
          </p> 
      </div>
    </div>
    
      {/* ================================================ */}
    <Introduction/>
      {/* {/* ============================================ */}

      {/* PART 4 */}

<div id="#about" className="overflow-hidden flex w-full bg-repeat-y relative self-center justify-between  bg-[#e188e3] ">

  <div  className="flex pl-[10%] sm:pl-[10%] flex-col text-start md:text-7xl font-figtree text-black mt-5 ">
    <h1 className=" flex flex-wrap sm:pl[10%] mb-7 " data-aos="fade-up">Culture Technology
</h1>
    <p className="text-base text-black mt-7 "data-aos="fade-up">Blends culture with technology to create innovative and impactful entertainment content.</p>
      <br/>
  </div>
</div>
{/* =================================================================== */}
  
  {/* PART 5 */}

<div id="about" className="overflow-hidden flex w-full bg-repeat-y relative self-center justify-between  bg-[#bf88e3] ">
    <div  className="flex pl-[10%] sm:pl-[10%] flex-col text-start md:text-7xl font-figtree text-black mt-5 ">
      <h1 className=" flex flex-wrap sm:pl[10%] mb-7 " data-aos="fade-up">LOCATION</h1>
      <p className="text-base text-black mt-7 "data-aos="fade-up">서울특별시 성동구 왕십리로 83-21 에스엠엔터테인먼트
83-21, Wangsimni-ro, Seongdong-gu, Seoul, Republic of Korea</p>
          <br/>
    </div>
</div>

{/* ======================================================================= */}
{/* PART 6 */}

      <footer className="flex justify-between shadow-lg footer p-10 bg-[#bcb8fc] ">
  <aside>
        <div className="justify-between
         bottom-0 left-[40rem] hidden md:flex
        sm:-left-[10rem] ml-[15px] mb-[10px]">
        <Image className="flex transform " src="/main_logo.png" alt="logooo" width={90} height={80}></Image>
        </div>
      
  </aside> 
  <h6 className="footer-title text-[#141414]">
    <div className="flex justify-center items-center">
        <p className="pt-[15px] "> © SM ENTERTAINMENT <br/>All Rights Reserved.</p>
      </div></h6>
   
    <div className="grid grid-flow-col gap-4 pt-[15px] ">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  
</footer>



{/* ================================================ */}
          
        
      </div>  
    </div>
   
  
    </section>

   



    
  )
}