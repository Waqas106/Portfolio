export default function Skills(){
    const skills=[
        { name:'React.js', prof:'Advanced', width:'w-4/5'},
        { name:'Next.js', prof:'Proficient', width:'w-3/4'},
        { name:'Tailwind Css', prof:'Advanced', width:'w-5/6'},
        { name:'JavaScript (ES6+)', prof:'Proficient', width:'w-3/4'},
        { name:'Node.js', prof:'Intermediate', width:'w-2/3'},
        { name:'Express.js', prof:'Intermediate', width:'w-2/3'},
        { name:'MongoDB', prof:'Intermediate', width:'w-2/3'},
        { name:'RESTful APIs', prof:'Proficient', width:'w-3/4'},
        { name:'Git & GitHub', prof:'Intermediate', width:'w-2/3'},
        { name:'Firebase', prof:'Intermediate', width:'w-2/3'},
        { name:'Deployment(Vercel)', prof:'Intermediate', width:'w-2/3'},
    ];

    const techs=[
        {name:'React.js'},
        {name:'Next.js'},
        {name:'Node.js'},
        {name:'Express.js'},
        {name:'MongoDB'},
    ];

    return(
        <section id="skills" className="px-8 md:px-12 py-14">
            <div className=" py-2  text-center">
               <h2 className="text-3xl font-bold pb-3">Skills & Expertise</h2>
               <div className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 mx-auto"/>
               <p className="pt-6 text-md">Technologies and tools I work with to create exceptional digital experiences</p>
            </div>
            <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {skills.map((skill,index)=>(
                <div key={index} className="group px-6 py-4 bg-white shadow-md rounded-md">
                    <div className="flex justify-between py-2">
                        <h4>{skill.name}</h4>
                        <span className="text-gray-400">{skill.prof}</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                        <div className={`h-2 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 ${skill.width}`}/>
                    </div>
                </div>
                ))}
            </div>
            {/* <div className="py-8 px-8 ">
                <div className="flex ">
                    {techs.map((tech, idx)=>(
                        <div key={idx}>
                            <p className="px-4 py-2 bg-white shadow-md m-3">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div> */}
        </section>
    )
}