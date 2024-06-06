import Navbar from "./Navbar";

function About() {
    return(
        <div className="rounded-lg w-full overflow-y-scroll bg-white">
            <Navbar />
            <div className="py-5 w-11/12 mx-auto">
                <p className="text-center mb-5 bg-[#006837] w-[20%] text-2xl font-bold text-white mx-auto py-2 rounded-full">ABOUT</p>
                <p className="mb-5 bg-[#9CB076] text-white py-5 px-8 rounded-lg shadow-lg">Hey there! Software engineer here with a knack for developing innovative solutions to complex problems. Skilled in full-stack development and always excited to tackle new challenges. Ready to bring creative solutions to your projects!</p>
                <div className="flex flex-col items-center mb-10">
                    <p className="text-center text-2xl font-semibold text-[#006837] mb-5">Primary Focus</p>
                    <div className="flex flex-wrap gap-5">
                        <div className="flex items-center w-[45%] text-white rounded-lg shadow-lg gap-5 bg-[#9CB076] py-5 px-8 mx-auto">
                            <i class="text-3xl text-[#006837] fa-solid fa-globe"></i>
                            <div>
                                <p className="text-lg font-semibold">Web Design & Development</p>
                                <p>Creating attractive, easy-to-use websites that work well for businesses and individuals online.</p>
                            </div>
                        </div>
                        <div className="flex items-center w-[45%] text-white rounded-lg shadow-lg gap-5 bg-[#9CB076] py-5 px-8 mx-auto">
                            <i class="text-3xl text-[#006837] fa-solid fa-book"></i>
                            <div>
                                <p className="text-lg font-semibold">Full-Stack Solutions</p>
                                <p>Developing scalable web applications using JavaScript Frameworks, SQL Databases, PHP and Python.</p>
                            </div>
                        </div>
                        <div className="flex items-center w-[45%] text-white rounded-lg shadow-lg gap-5 bg-[#9CB076] py-5 px-8 mx-auto">
                            <i class="text-3xl text-[#006837] fa-solid fa-mobile-screen-button"></i>
                            <div>
                                <p className="text-lg font-semibold">Mobile Apps & Games</p>
                                <p>Creating and developing engaging mobile apps and games for iOS and Android devices.</p>
                            </div>
                        </div>
                        <div className="flex items-center w-[45%] text-white rounded-lg shadow-lg gap-5 bg-[#9CB076] py-5 px-8 mx-auto">
                            <i class="text-3xl text-[#006837] fa-solid fa-chart-line"></i>
                            <div>
                                <p className="text-lg font-semibold">Marketing & SEO</p>
                                <p>Using SEO and marketing strategies to boost online visibility and promote products or services.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center mb-10">
                    <p className="text-center text-2xl font-semibold text-[#006837] mb-5">Exploring Creativity</p>
                    <div className="flex flex-wrap gap-5">
                        <div className="flex items-center w-[45%] text-white rounded-lg shadow-lg gap-5 bg-[#9CB076] py-5 px-8 mx-auto">
                            <i class="text-3xl text-[#006837] fa-solid fa-camera"></i>
                            <div>
                                <p className="text-lg font-semibold">Visual Storytelling</p>
                                <p>Taking and editing photos or videos that tell engaging stories, bringing concepts and ideas to life visually.</p>
                            </div>
                        </div>
                        <div className="flex items-center w-[45%] text-white rounded-lg shadow-lg gap-5 bg-[#9CB076] py-5 px-8 mx-auto">
                            <i class="text-3xl text-[#006837] fa-solid fa-cube"></i>
                            <div>
                                <p className="text-lg font-semibold">Digital Content Creation</p>
                                <p>Creating digital elements, such as 3D models, graphics, animations, videos and AI-generated content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full gap-5 mt-10">
                    <div className="w-1/2 mx-auto bg-[#9CB076] rounded-lg shadow-lg text-white p-5 flex flex-col gap-4">
                        <p className="text-center font-bold text-[#006837] text-xl">Coding Languages</p>
                        <div>
                            <p>JavaScript 90%</p>
                            <div className="bg-[#B2C594] h-[1rem] rounded-full mt-1 shadow-md">
                                <div className="bg-[#006837] w-[90%] h-[1rem] rounded-full"></div>
                            </div>
                        </div>
                        <div>
                            <p>HTML 100%</p>
                            <div className="bg-[#B2C594] h-[1rem] rounded-full mt-1 shadow-md">
                                <div className="bg-[#006837] h-[1rem] rounded-full"></div>
                            </div>
                        </div>
                        <div>
                            <p>CSS 100%</p>
                            <div className="bg-[#B2C594] h-[1rem] rounded-full mt-1 shadow-md">
                                <div className="bg-[#006837] h-[1rem] rounded-full"></div>
                            </div>
                        </div>
                        <div>
                            <p>Python 25%</p>
                            <div className="bg-[#B2C594] h-[1rem] rounded-full mt-1 shadow-md">
                                <div className="bg-[#006837] w-[25%] h-[1rem] rounded-full"></div>
                            </div>
                        </div>
                        <div>
                            <p>C 20%</p>
                            <div className="bg-[#B2C594] h-[1rem] rounded-full mt-1 shadow-md">
                                <div className="bg-[#006837] w-[20%] h-[1rem] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 mx-auto bg-[#9CB076] rounded-lg shadow-lg text-white p-5 flex flex-col gap-4">
                        <p className="text-center font-bold text-[#006837] text-xl">Human Languages</p>
                        <div>
                            <p>English 100%</p>
                            <div className="bg-[#B2C594] h-[1rem] rounded-full mt-1 shadow-md">
                                <div className="bg-[#006837] h-[1rem] rounded-full"></div>
                            </div>
                        </div>
                        <div>
                            <p>Hindi 100%</p>
                            <div className="bg-[#B2C594] h-[1rem] rounded-full mt-1 shadow-md">
                                <div className="bg-[#006837] h-[1rem] rounded-full"></div>
                            </div>
                        </div>
                        <div>
                            <p>Nepali 100%</p>
                            <div className="bg-[#B2C594] h-[1rem] rounded-full mt-1 shadow-md">
                                <div className="bg-[#006837] h-[1rem] rounded-full"></div>
                            </div>
                        </div>
                        <div>
                            <p>Spanish 25%</p>
                            <div className="bg-[#B2C594] h-[1rem] rounded-full mt-1 shadow-md">
                                <div className="bg-[#006837] w-[25%] h-[1rem] rounded-full"></div>
                            </div>
                        </div>
                        <div>
                            <p>French 20%</p>
                            <div className="bg-[#B2C594] h-[1rem] rounded-full mt-1 shadow-md">
                                <div className="bg-[#006837] w-[20%] h-[1rem] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <p className="text-center font-semibold text-[#006837] text-2xl">Development Skills</p>
                    <div className="flex gap-5 overflow-x-scroll mt-5 bg-[#9CB076] p-5 rounded-lg shadow-lg" role="marquee">
                        <img className="w-[20%]" src="https://oktayshakirov.com/assets/images/html.png" alt="" />
                        <img className="w-[20%]" src="https://oktayshakirov.com/assets/images/css.png" alt="" />
                        <img className="w-[20%]" src="https://oktayshakirov.com/assets/images/java-script.png" alt="" />
                        <img className="w-[20%]" src="https://oktayshakirov.com/assets/images/react.png" alt="" />
                        <img className="w-[20%]" src="https://oktayshakirov.com/assets/images/next.png" alt="" />
                        <img className="w-[20%]" src="https://oktayshakirov.com/assets/images/node.png" alt="" />
                        <img className="w-[20%]" src="https://oktayshakirov.com/assets/images/typescript.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
