import React from "react";
import Typewriter from "typewriter-effect";
export default function Goals () {

    return (
        <><><Typewriter className="bg-black text-orange-500 text-4xl text-left font-serif font-bold "
            options={{
                strings: ["OUR VISION"],
                autoStart: true,
                loop: true,
            }} /><div>
                <span className=" font-normal text-white text-center font-sans  text-2xl mt-5 ml-6 transition-2s ">Setting the global standard in online, blended, and digital learning.
                </span>
            </div>
        </><><Typewriter className=" bg-black  text-orange-500 text-4xl font-bold text-left"
            options={{
                strings: ["OUR MISSION"],
                autoStart: true,
                loop: true,
            }} /><div>
                    <span className="font-normal text-white text-center font-sans  text-2xl mt-5 ml-6 transition-2s">creating community and knowledge around quality online, blended, and digital learning
                        while driving innovation.

                    </span>

                </div>
            </></>



    )
}
