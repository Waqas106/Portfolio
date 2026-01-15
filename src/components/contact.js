import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export default function Contact(){
    const contact=[
        {
            icon:Mail,
            title:'Email',
            value:"m.waqasbashir33@gmail.com"
        },
        {
            icon:Phone,
            title:"Phone",
            value:"0302-5237694",
        },
        {
            icon:MapPin,
            title:"Location",
            value:"Islamabad, Pakistan"
        }
    ]
    return(
        <section id="contact" className="px-6 md:px-12 py-10 bg-gray-100">
            <div className=" py-2  text-center">
               <h2 className="text-3xl font-bold pb-2">Get in Touch</h2>
               <div className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 mx-auto"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 pt-12 gap-6">
                <div>
                    <h3 className="text-xl font-bold pb-3">Let’s Connect</h3>
                    <p className="text-md text-gray-600 pb-2">Whether you’re looking to build something new, collaborate, or discuss opportunities. I’d love to hear from you. Feel free to reach out.</p>
                    <p className="text-md text-gray-600 pb-2">I’m always open to discussing new ideas, creative projects, or potential collaborations.</p>
                    <div className="space-y-4 pt-4">
                        {contact.map((cnt, idx)=>(
                            <div key={idx} className=" flex items-center gap-4 px-3 sm:px-6 py-4 bg-white shadow-md rounded-xl hover:scale-102 transform duration-300">
                                <cnt.icon size={40} className=" text-white p-2 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 rounded-md"/>
                                <div >
                                    <h4 className="font-bold">{cnt.title}</h4>
                                    <p className="text-gray-600 ">{cnt.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="pt-6">
                        <h3 className="text-lg font-bold">Connect With Me</h3>
                        <div className="flex gap-4 pt-3">
                            <Link href="https://www.linkedin.com/in/muhammad-waqas-bashir/" 
                            className="w-10 h-10 p-2 bg-blue-600/20 rounded-full hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300">
                            <Linkedin size={24} />
                            </Link>

                            <Link href="https://github.com/Waqas106" 
                            className="w-10 h-10 p-2 bg-blue-600/20 rounded-full hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300">
                            <Github size={24} />
                            </Link>

                            <Link href="mailto:m.waqasbashir33@gmail.com" 
                            className="w-10 h-10 p-2 bg-blue-600/20 rounded-full hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300">
                            <Mail size={24} />
                            </Link>
                            
                        </div>
                    </div>
                </div>
                <div >
                    <form className="flex flex-col gap-4 bg-white px-8 py-6 rounded-xl shadow-md">
                        <div>
                          <label className="block text-gray-900 text-sm font-medium font-semibold mb-2">Name</label>
                         <input type="text" placeholder="Your Name" required className="bg-none px-4 py-2 w-full border-2 border-gray-300 rounded-lg outline-none"/>
                        </div>

                        <div>
                          <label className="block text-gray-900 text-sm font-medium font-semibold mb-2">Email</label>
                         <input type="email" placeholder="Your Email" required className="bg-none px-4 py-2 w-full border-2 border-gray-300 rounded-lg outline-none"/>
                        </div>
                        
                        <div>
                          <label className="block text-gray-900 text-sm font-medium font-semibold mb-2">Message</label>
                          <textarea name="message" rows={6} placeholder="Enter Your Message" className="bg-none px-4 py-2 w-full border-2 border-gray-300 rounded-lg outline-none"/>
                        </div>

                        <div>
                            <button className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 font-semibold rounded-lg py-2 text-white mt-2 cursor-pointer">Send Message</button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}