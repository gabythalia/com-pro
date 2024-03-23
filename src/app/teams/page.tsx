import { getTeam } from "@/lib/team";
import Image from "next/image";
import { FaCity } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


export default async function Team() {
    const member = await getTeam()
    console.log(member.results[0].picture.large);
    console.log(member.results[0].name.first);
    console.log(member.results[0].location.city);
    console.log(member.results[0].email);
    console.log(member.results[0].phone);
    

        return (
        <div>
            <div className="flex overflow-hidden flex-col lg:flex-row justify-between items-center p-16 bg-[#eb609c]">
                    <div className="text-[#f2cbdc] font-figtree" data-aos="fade-up" 
            data-aos-anchor-placement="bottom-bottom">
                        <h1 className="flex-wrap md:text-left justify-center pr-[150px] lg:flex-row text-[50px] md:text-7xl mt-[40px] px-[10%]" >
                        Meet the Team !
                        </h1>
                        <p className="flex px-[10%] text-[#f2cbdc] "> This is the team that has been working with our company<br/> </p>  
                    </div>    
            </div>

            <div className="flex flex-col justify-center items-center max-sm:w-full bg-[#eb609c]">
            {member.results.map((users : any) => {
                        return (
                    <div key={users.id.value} className="flex justify-center sm:justify-start items-center bg-[#de2a78] text-black font-figtree rounded 3xl max-sm:py-2 my-5 gap-5 sm:gap-10 max-sm:max-w-[300px] max-sm:w-full sm:w-[500px] overflow-hidden">
                        <div className=" flex shadow-[-12px_0px_15px_rgba(0,0,0,0.5)] overflow-hidden max-sm:hidden">
                            <Image className="rounded-l-3xl sm:min-32 sm:min-h-32 overflow-hidden" src={`${users.picture.large}`} alt="users" width={200} height={100} />    
                        </div>
                        <div className="text-black flex flex-col ">
                            <p className="flex items-center gap-3 max-sm:text-sm sm:text-xl">{users.name.first} {users.name.last}</p>
                            <p className="flex items-center gap-4 max-sm:text-sm sm:text-base"><FaCity /> {users.location.city}</p>
                            <p className="flex items-center gap-4 max-sm:text-sm sm:text-base"><MdOutlineEmail />{users.email}</p>
                            <p className="flex items-center gap-4 max-sm:text-sm sm:text-base"><FaPhoneAlt />{users.phone}</p>
                        </div>
                            
                    </div>
                            
                        )
                    })
                }
            </div>

            {/* ==================================================== */}

                    {/* FOOTER  */}

            <footer className="flex justify-between shadow-lg footer p-10 bg-[#962053] ">
        <aside>
                <div className="justify-between
                bottom-0 left-[40rem] hidden md:flex
                sm:-left-[10rem] ml-[15px] mb-[10px]">
                <Image className="flex transform " src="/main_logo1.png" alt="logooo" width={90} height={80}></Image>
                </div>    
        </aside> 
        <h6 className="footer-title">
            <div className="flex justify-center items-center">
                <p className="pt-[15px] text-white]"> © SM ENTERTAINMENT <br/>All Rights Reserved.</p>
            </div></h6>
            <div className="grid grid-flow-col gap-4 pt-[15px] ">   
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
            </div>
        </footer>
           

        </div>
    )
}