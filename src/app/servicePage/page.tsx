import Service from "@/components/service";
import Image from "next/image";

export default function ServicePage() {
   
    return (

        <section>
                
                <div className="flex relative overflow-hidden flex-col lg:flex-row justify-between items-center p-16 bg-[#dbc397]">
                    <div className="text-black font-figtree" data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom">
                        <h1 className="flex-wrap md:text-left justify-center pr-[150px] lg:flex-row text-[50px] md:text-7xl mt-[40px] px-[10%]" >
                        LIGHTSTICK
                        </h1>
                        <p className="flex px-[10%] text-black ">Do you want to watch your idol? Do you want to sing while fanchant? <br/> Please scroll down to see a lightstick according to your favorite idol right now!!!</p>  
                    </div>

                    <div className=" w-[20rem] mt-[80px]">
                        <Image className="flex lg:w-[20rem] shadow-lg rounded-lg bg-white" src="/light_all.jpg" alt="naevis" width={600} height={600} data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"></Image>
                    </div>
                   
                </div>
            {/* =====================  N C T  ========================*/}

                <div className="flex overflow-hidden flex-col lg:flex-row justify-between items-center p-16 bg-[#decaa6]">

                    <div className="w-[20rem] ">
                        <Image className="flex lg:w-[20rem] shadow-lg rounded-lg bg-white  hover:scale-75 duration-75 max-sm:hidden" src="/light_nct.jpg" alt="sijeuni" width={600} height={600} ></Image>
                    </div>

                    <div className="text-black font-figtree  ">
                        <h1 className="text-right pr-[150px] lg:flex-row text-[50px] md:text-7xl px-[10%] mb-[10px]" >
                            NCT
                        </h1>
                        <p className="flex ml-[40px] px-[10%]">You can`&apos;`t forget the distinctive impression of the iconic green color. This unforgettable atmosphere is why the box shape and green color were chosen.
                        and usually sijeuni call it a green meadow</p>
                    </div>
            {/* The button to open modal */}
            
            <label htmlFor="my_modal_7" className="flex font-figtree justify-end btn mt-[140px] shadow-inner border-none hover:bg-fourth text-black bg-[#c2aa7e] hover:text-white">Learn More</label>

        {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle " />
                <div className="modal" role="dialog">
                    <div className="modal-box bg-[#c2aa7e] text-black">
                    <h3 className="text-lg font-bold">Hello!</h3>
                    <p className="py-4 font-figtree ">
                        Price : Rp 559.000,00 <br/>
                        <br/>
        1. Item: a Fanlight (Fanlight 1pc, Strap 1pc, Manual 1pc, Dust Bag 1pc) <br/>

        2. Size: 110 x 257 (mm) <br/>
        <br/>
        3. Material: ABS, PC, Nylon <br/>
        <br/>
        4. Made in Korea <br/>
        <br/>
        5. Weight : 210g <br/>
        <br/>
        *Use 3 AAA Alkaline battery <br/>
        *Has Bluetooth function <br/>
        *Battery is not included <br/></p>
                </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                </div>
                </div>

        {/*===================== A E S P A ============================= */}

                <div className="flex overflow-hidden flex-col lg:flex-row justify-between items-center p-16 bg-[#dbc397]">
                    <div className="text-black font-figtree">
                        <h1 className="text-left pr-[150px] lg:flex-row text-[50px] md:text-7xl mb-[10px] px-[10%]" >
                        aespa
                        </h1>
                        <p className="flex mr-[30px] px-[10%] text-black ">The shape of the aespa lightstick is very simple, dominantly white, starting from the handle to the aespa logo at the top. And the top is a ball like a snowball. While on the bottom side there is also an aespa logo.</p>
                        
                    </div>
                    <div className="w-[20rem] mr-[30px] shadow-lg rounded-lg bg-white hover:scale-75 duration-75 max-sm:hidden">
                        <Image className="flex lg:w-[20rem]" src="/light_aespa.jpg" alt="naevis" width={600} height={600}></Image>
                    </div>
            {/* The button to open modal */}
            
            <label htmlFor="my_modal_7" className="flex font-figtree justify-end btn mt-[140px] shadow-inner border-none hover:bg-fourth text-black bg-[#c2aa7e] hover:text-white">Learn More</label>

        {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle " />
                <div className="modal" role="dialog">
                    <div className="modal-box bg-[#c2aa7e] text-black">
                    <h3 className="text-lg font-bold">Hello!</h3>
                    <p className="py-4 font-figtree ">
                        Price : Rp 559.000,00 <br/>
                        <br/>
        1. Item: a Fanlight (Fanlight 1pc, Strap 1pc, Manual 1pc, Dust Bag 1pc) <br/>

        2. Size: 110 x 257 (mm) <br/>
        <br/>
        3. Material: ABS, PC, Nylon <br/>
        <br/>
        4. Made in Korea <br/>
        <br/>
        5. Weight : 210g <br/>
        <br/>
        *Use 3 AAA Alkaline battery <br/>
        *Has Bluetooth function <br/>
        *Battery is not included <br/></p>
                </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                </div>  
                </div>
        {/*===================  E X O  =============================== */}
                <div className="flex overflow-hidden flex-col lg:flex-row justify-between items-center p-16 bg-[#decaa6]">

                    <div className=" w-[20rem]">
                        <Image className="flex lg:w-[20rem] shadow-lg rounded-lg bg-white hover:scale-75 duration-75 max-sm:hidden" src="/light_exo.jpg" alt="exol" width={600} height={600} ></Image>
                    </div>

                    <div className="text-black font-figtree  ">
                        <h1 className="text-right pr-[150px] lg:flex-row text-[50px] md:text-7xl mb-[10px] px-[10%]" >
                            EXO
                        </h1>
                        <p className="flex ml-[30px] px-[10%]">The flashing logo is very pretty indeed and theres some cool flashing modes here. 
                        But EXO lightstick is let down by the fact that the big separating bar in the centre means that theres not a lot of illuminated area to work with</p>

                    </div>
                {/* The button to open modal */}
            
            <label htmlFor="my_modal_7" className="flex font-figtree justify-end btn mt-[140px] shadow-inner border-none hover:bg-fourth text-black bg-[#c2aa7e] hover:text-white">Learn More</label>

        {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle " />
                <div className="modal" role="dialog">
                    <div className="modal-box bg-[#c2aa7e] text-black">
                    <h3 className="text-lg font-bold">Hello!</h3>
                    <p className="py-4 font-figtree ">
                        Price : Rp 559.000,00 <br/>
                        <br/>
        1. Item: NCT Fanlight (Fanlight 1pc, Strap 1pc, Manual 1pc, Dust Bag 1pc) <br/>

        2. Size: 110 x 257 (mm) <br/>
        <br/>
        3. Material: ABS, PC, Nylon <br/>
        <br/>
        4. Made in Korea <br/>
        <br/>
        5. Weight : 210g <br/>
        <br/>
        Use 3 AAA Alkaline battery <br/>
        Has Bluetooth function <br/>
        Battery is not included <br/></p>
                </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                </div>
                </div>                              
        {/*===================  R E D  V E L V E T  =============================== */}

                <div className="flex overflow-hidden flex-col lg:flex-row justify-between items-center p-16 bg-[#dbc397]">
                    <div className="text-black font-figtree">
                        <h1 className="text-left pr-[150px] lg:flex-row text-[50px] md:text-7xl mb-[10px] px-[10%]" >
                        Red Velvet
                        </h1>
                        <p className="flex mr-[30px] px-[10%] text-black ">This light stick has a white handle and a top shaped like a red crown with RV written on it, and will bring a cool impression.</p>
                        
                    </div>

                    <div className=" w-[15rem] mr-[30px] ">
                        <Image className="flex lg:w-[20rem] shadow-lg rounded-lg bg-white hover:scale-75 duration-75 max-sm:hidden" src="/light_redvelvet.jpg" alt="reveluv" width={600} height={600}></Image>
                    </div>
            {/* The button to open modal */}
            
            <label htmlFor="my_modal_7" className="flex font-figtree justify-end btn mt-[140px] shadow-inner border-none hover:bg-fourth text-black bg-[#c2aa7e] hover:text-white">Learn More</label>

        {/* Put this part before </body> tag */}
                <input type="checkbox" id="my_modal_7" className="modal-toggle " />
                <div className="modal" role="dialog">
                    <div className="modal-box bg-[#c2aa7e] text-black">
                    <h3 className="text-lg font-bold">Hello!</h3>
                    <p className="py-4 font-figtree ">
                        Price : Rp 559.000,00 <br/>
                        <br/>
        1. Item: NCT Fanlight (Fanlight 1pc, Strap 1pc, Manual 1pc, Dust Bag 1pc) <br/>

        2. Size: 110 x 257 (mm) <br/>
        <br/>
        3. Material: ABS, PC, Nylon <br/>
        <br/>
        4. Made in Korea <br/>
        <br/>
        5. Weight : 210g <br/>
        <br/>
        *Use 3 AAA Alkaline battery <br/>
        *Has Bluetooth function <br/>
        *Battery is not included <br/></p>
                </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                </div>
                </div>

        {/* ============================================================ */}

        {/* ======================T E S T I M O N Y=================================== */}

        <div className="flex overflow-hidden flex-col lg:flex-row justify-between items-center p-16 bg-[#d4bf5b]">
                    <div className="text-black font-figtree">
                        <h1 className="text-left pr-[150px] lg:flex-row text-[50px] md:text-7xl mb-[10px] px-[10%]" >
                        TESTIMONY
                        </h1>
                        <p className="flex mr-[30px] px-[10%] text-black ">This is a gathering of fans of each idol! Which is your fandom? Please scroll down to find your fandom friends!</p>                
                    </div>

        <div className="chat chat-start  font-figtree ">
                    <div className="chat-bubble bg-[#c7ae32] text-black text-center">
                    <Image className="flex lgw-[20rem]" src="/testi1.png" alt="testt" width={500} height={500}></Image>
        </div>
                    </div>
        <div className="chat chat-end font-figtree">
        <div className="chat-bubble bg-[#c7ae32] text-black text-center">
        <Image className="flex lgw-[20rem]" src="/testi2.png" alt="testtt" width={500} height={500}></Image>
        </div>

        </div>
                </div>
        {/* ============== PART 2=================== */}
        <div className="flex overflow-hidden flex-col lg:flex-row justify-between items-center p-16 bg-[#d4bf5b]">
            <div className="chat chat-start font-figtree">
                <div className="chat-bubble bg-[#c7ae32] text-black text-center">from : EXO-L
                <Image className="flex lgw-[20rem]" src="/testi3.png" alt="exo" width={500} height={500}></Image>
                </div>
        </div>
            <div className="chat chat-end font-figtree">
                <div className="chat-bubble bg-[#c7ae32] text-black text-center"> from: Reveluv
                <Image className="flex lgw-[20rem]" src="/testi4.png" alt="redvelvet" width={500} height={500}></Image>
                </div>
                </div>
                </div>

            {/* ========  PART 3 ================ */}

        <div className="flex overflow-hidden flex-col lg:flex-row justify-between items-center p-16 bg-[#d4bf5b]">
            <div className="chat chat-start font-figtree">
            <div className="chat-bubble bg-[#c7ae32] text-black text-center">from : NCTzen
            <Image className="flex lgw-[20rem]" src="/testi1.png" alt="nct" width={500} height={500}></Image>
            </div>
        </div>
        <div className="chat chat-end font-figtree">
        <div className="chat-bubble bg-[#c7ae32] text-black text-center">from : MY
        <Image className="flex lgw-[20rem]" src="/testi2.png" alt="aespa" width={500} height={500}></Image>
        </div>
        </div>
        </div>

        {/* ================= PART 4 ========================= */}
        <footer className="flex justify-between shadow-lg footer p-10 bg-[#ebd8b7] ">
        <aside>
                <div className="justify-between
                bottom-0 left-[40rem] hidden md:flex
                sm:-left-[10rem] ml-[15px] mb-[10px]">
                <Image className="flex transform " src="/main_logo.png" alt="logooo" width={90} height={80}></Image>
                </div>
            
        </aside> 
        <h6 className="footer-title">
            <div className="flex justify-center items-center">
                <p className="pt-[15px] text-[#0a0a0a]"> © SM ENTERTAINMENT <br/>All Rights Reserved.</p>
            </div></h6>
        
            <div className="grid grid-flow-col gap-4 pt-[15px] text-[#0a0a0a]">
                
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
            </div>
        </footer>

                


        








                            
                            
                            
                            
                            
            
            
            <Service/>
            
        </section>
 
    )
}
