import React from "react";
import fondoIlustrado from "../../assets/BG 31.png";
import imgHero from "../../assets/3d-practicantes.png";
import arrow from "../../assets/flechas-a-la-derecha.png";


function HeroPowerAuth() {
    return (
        <section className="pt-24 flex flex-wrap font-dmsans md:px-12 bg-gray-900">
            <div className="flex flex-wrap justify-center">
                <div className="w-full md:w-1/2 flex flex-col justify-center md:items-start items-center gap-6 px-4 text-center md:text-left ">
                    <h1 className="text-5xl md:text-5xl font-bold text-white">Hay miles de trabajos esperándote en Perú</h1>
                    
                    <form className="flex flex-col gap-5 w-full md:w-auto">
                        <div className="flex justify-center md:justify-start w-full">
                            <input
                                type="text"
                                placeholder="Puesto, empresa o palabra clave"
                                className="w-full md:w-80 px-3 h-10 rounded-lg border-2 border-amber-400 focus:outline-none focus:border-sky-500"
                            />
                        </div>
                        
                        <div className="flex justify-center md:justify-start w-full ">
                            <select
                                id="pricingType"
                                name="pricingType"
                                className="w-full md:w-80 h-10 border-2 border-amber-400 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider "
                            >
                                <option value="All" selected>Todo el país</option>
                                <option value="Freemium">Freemium</option>
                                <option value="Free">Free</option>
                                <option value="Paid">Paid</option>
                            </select>
                        </div>
                    </form>
                    
                    <a
                        href=""
                        className="bg-amber-400 p-2 text-black font-semibold rounded-lg w-80 h-12 text-lg flex items-center justify-center hover:text-gray-800 hover:border-2 hover:border-amber-400 hover:bg-white"
                    >
                        Buscar Trabajo
                    </a>
                </div>
                <div
                    className="w-full md:w-1/3 flex justify-center bg-contain mt-12 md:mt-0 items-center mx-auto"
                >
                    <img className="" src={imgHero} alt="" />
                </div>
            </div>
        </section>
    );
}

export default HeroPowerAuth;