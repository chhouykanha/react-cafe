import { useState } from "react"
import TabEat from "../components/TabEat"
import TabDrink from "../components/TabDrink"

function Home() {
  const [tab, setTab] = useState(0)
  return (
    <div>

            <div className="bg-primary text-white flex justify-between px-1 py-1">
                    <a href="" className="w-full text-center hover:bg-gray-300 hover:text-primary py-2">Home</a>
                    <a href="" className="w-full text-center hover:bg-gray-300 hover:text-primary py-2">About</a>
                    <a href="" className="w-full text-center hover:bg-gray-300 hover:text-primary py-2">Menu</a>
                    <a href="" className="w-full text-center hover:bg-gray-300 hover:text-primary py-2">Where</a>
            </div>
            <div className="relative h-[700px] bg-[url('https://www.w3schools.com/w3images/coffeehouse.jpg')] bg-cover bg-center flex items-center justify-center grayscale-50">
                    <h1 className="text-white text-9xl font-bold">
                        The <br /> Coffee
                    </h1>
                    <div className="absolute bottom-4 left-0 w-full flex items-center justify-between">
                        <p className="ml-8 bg-black text-white p-1">Opening from 7AM to 6PM </p>
                        <p className="mr-8 text-white">15, Ad Street 5015</p>
                    </div>
            </div>

            <div className="w-[90%] lg:w-5xl mx-auto mt-8 text-lg">
                    <h1 className="bg-primary text-white w-fit mx-auto text-2xl px-2 py-1 uppercase tracking-widest mb-12">
                        About The Cafe
                    </h1>         

                    <p className="text-lg my-4">
                            The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="text-lg my-4">
                          In addition to our full espresso and brew bar menu, we serve fresh made-to-order breakfast and lunch sandwiches, as well as a selection of sides and salads and other good stuff.
                    </p>
                    <p className="text-lg my-4 bg-blue-50 py-2 px-1">   
                        "Use products from nature for what it's worth - but never too early, nor too late." Fresh is the new sweet.

                        Chef, Coffeeist and Owner: Liam Brown
                    </p>

                    <img className="my-4 grayscale-50 w-full" src="https://www.w3schools.com/w3images/coffeeshop.jpg" alt="" />
                    <p> <span className="font-bold">Opening hours</span> : everyday from 6am to 5pm.</p>
                    <p> <span className="font-bold">Address</span>: 15 Adr street, 5015, NY</p>
            </div>

            <div className="w-[90%] lg:w-5xl  mx-auto my-8 text-lg">
                    <h1 className="bg-primary text-white w-fit mx-auto text-2xl px-2 py-1 uppercase tracking-widest mb-12">
                        The Menu {tab}
                    </h1>    
                    <div className="w-full shadow p-4 flex items-center justify-between gap-4">
                            <button 
                                onClick={ () =>  setTab(0) }
                                className={`${tab == 0 ? 'bg-gray-300' : ''} w-full py-1  cursor-pointer`}
                            >
                               
                                Eat
                            </button>
                            <button 
                                onClick={ () =>  setTab(1) }
                                 className={`${tab == 1 ? 'bg-gray-300' : ''} w-full py-1  cursor-pointer`}
                            >
                                Drink
                            </button>
                    </div>
                    <div className="w-full shadow p-4">
                         { tab == 0 && <TabEat/>}
                         { tab == 1 && <TabDrink/>}
                    </div>
            </div>

             <div className="w-[90%] lg:w-5xl  mx-auto my-8 text-lg">
                    <h1 className="bg-primary text-white w-fit mx-auto text-2xl px-2 py-1 uppercase tracking-widest mb-12">
                        Conact Us
                    </h1> 
                    <form className="mt-8 space-y-4">
                            <input 
                                className="rounded-xl ring ring-gray-300 w-full p-4 focus:outline-0 focus:ring-2 focus:ring-black transition-all duration-300"
                                type="text" 
                                placeholder="Name" />
                            <input 
                                className="ring ring-gray-300 w-full p-4 focus:outline-0 focus:ring-2 focus:ring-black transition-all duration-300"
                                type="number" 
                                placeholder="0" />
                            <input 
                                className="ring ring-gray-300 w-full p-4 focus:outline-0 focus:ring-2 focus:ring-black transition-all duration-300"
                                type="datetime-local" 
                                placeholder="Name" />
                            <input 
                                className="ring ring-gray-300 w-full p-4 focus:outline-0 focus:ring-2 focus:ring-black transition-all duration-300"
                                type="text" 
                                placeholder="Requirements" />
                            <button className="bg-black text-white px-8 py-2 cursor-pointer hover:bg-gray-300 hover:text-black">Send Message</button>
                    </form>
            </div>
    </div>
  )
}

export default Home