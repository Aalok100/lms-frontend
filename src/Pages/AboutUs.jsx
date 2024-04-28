import aboutMain from "../Assets/Images/aboutMain.png"
import apj from "../Assets/Images/apj.jpg"
import billGates from "../Assets/Images/billGates.jpg"
import einstein from "../Assets/Images/einstein.jpg"
import nelsonmandela from "../Assets/Images/nelsonmandela.jpg"
import steveJobs from "../Assets/Images/steveJobs.jpg"
import HomeLayout from "../Layouts/HomeLayout";


function AboutUs(){
    return(
        <HomeLayout>
             <div className="pl-20 pt-20 flex flex-col text-white">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold">
                            Affordable and qualite education
                        </h1>
                        <p className="text-lg text-gray-200 ">
                            Our goal is to provide the affordable and quality education to the world.
                            We are providing the platform for the aspiring teachers and students to share
                            their skills, creativity and knowledge to each other to empower and contribute 
                            in the growth and wellness of mankind.
                        </p>
                    </section>
                    <div className="w-1/2">
                       <img
                            id="test1"
                            style={{
                                filter:"drop-shadow (0px 10px 10px rgb(0, 0,0));"
                            }}
                            alt="about main image"
                            className="drop-shadow-2xl"
                            src={aboutMain}
                        />
                    </div>
                </div>

                <div className="carousel w-1/2 my-16 m-auto">
                    
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img src={apj} className="w-40 rounded-full border-2 border-gray-400" />
                            <h3 className="text-2xl font-semiold">A. P. J. Abdul Kalam</h3>
                            <p>
                                {"Never stop fighting until you arrive at your destined place - that is, the unique you. Have an aim in life, continuously acquire knowledge, work hard, and have perseverance to realise the great life."}
                            </p>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a> 
                                <a href="#slide2" className="btn btn-circle">❯</a>

                             </div>
                       
                        </div>
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                                <img src={billGates} className="w-40 rounded-full border-2 border-gray-400" />
                                <h3 className="text-2xl font-semiold">Bill Gates</h3>
                            <p>
                                {"Don't compare yourself with anyone in this world ... if you do so, you are insulting yourself."}
                            </p>
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" className="btn btn-circle">❮</a> 
                                    <a href="#slide3" className="btn btn-circle">❯</a>

                                </div>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                                <img src={einstein} className="w-40 rounded-full border-2 border-gray-400" />
                                <h3 className="text-2xl font-semiold">Albert Einstein</h3>
                            <p>
                                {"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle."}
                            </p>
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" className="btn btn-circle">❮</a> 
                                    <a href="#slide4" className="btn btn-circle">❯</a>
                                </div>

                            </div>
                    </div> 
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                                <img src={nelsonmandela} className="w-40 rounded-full border-2 border-gray-400" />
                                <h3 className="text-2xl font-semiold">Nelson Mandela</h3>
                            <p>
                                {"Education is the most powerful tool you can use to change the world."}
                            </p>
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide3" className="btn btn-circle">❮</a> 
                                    <a href="#slide5" className="btn btn-circle">❯</a>
                                </div>

                            </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                                <img src={steveJobs} className="w-40 rounded-full border-2 border-gray-400" />
                                <h3 className="text-2xl font-semiold">Steve Jobs </h3>
                            <p>
                                {"Your time is limited, so don’t waste it living someone else’s life."}
                            </p>
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide5" className="btn btn-circle">❮</a> 
                                    <a href="#slide1" className="btn btn-circle">❯</a>
                                </div>
                        </div>
                    </div>
                    </div>


             </div>
        </HomeLayout>
    )

}
export default AboutUs;