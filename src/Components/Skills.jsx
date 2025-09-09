import React from 'react'
import html from '/html.jpg'
import icon_react from '/icon_react.png'
import js from '/js.png'
import css from '/css.jpg'
import imghero from '/imghero.png'



const skillsData=[
    
        {id:1, image:html, title:'html 5',description:"Proficient in writing semantic, accessible HTML5 for responsive and well-structured web interfaces. "},
           { id:2, image:icon_react, title:'react',description:"Skilled in crafting responsive, visually engaging layouts using modern CSS3 and utility-first frameworks like Tailwind CSS."},
            {    id:3, image:js, title:'javascript',description:"Proficient in modern JavaScript (ES6+), with expertise in DOM manipulation, array methods, and clean, modular code."},
                  {  id:4, image:css, title:'css',description:"Experienced in building dynamic UIs with React.js, leveraging state management, props, and component-based architecture."},
    
];

const SkillsBox = ({ image, title, description }) => (
  <article className='bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-purple-800 transition-all duration-300'>
    <figure className='flex justify-center mb-4'>
      <img src={image} alt={title} className='w-16 h-16 sm:h-20' />
    </figure>
    <header>
      <h3 className='text-gray-400 text-sm sm:text-base'>{title}</h3>
    </header>
    <p className='text-gray-400 text-sm sm:text-base'>{description}</p>
  </article>
);

export default function Skills() {
  return (
<section id='skills' className='relative min-h-screen scroll-mt-20 overflow-hidden flex-col item-center justify-center text-white px-4 py-10'>


        <div className='absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top 10 sm:top-28
        left-1/2 transform -translate-x-1/2'></div>
        <img src={imghero} alt="left picture" className='absoluten z-10 left-2 top-2 sm:left-16 sm:top-32 transform -rotate-12 w-24 h-auto sm:w-32 opacity-70' />
        <div data-aos='fade-up' data-aos-delay='300' className='relative z-20 text-center space-y-6 sm:space-y-10'>
            <header>
                <h1 className='text-3xl sm:text-4xl font-bold'>
                    My Experience <br /> and <span className='text-purple-400'>Skills</span>
                </h1>
                <p className='text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base'>Creative and detail-oriented frontend developer with hands-on experience in building responsive, accessible web applications. Proficient in HTML5, CSS3, JavaScript (ES6+), and React.js, with a strong grasp of Tailwind CSS for modern UI design and Framer Motion for smooth animations. Skilled in crafting clean code, managing state, and delivering engaging user experiences.</p>
            </header>
            <section data-aos='fade-up'data-aos-delay='500' className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4'>
          {skillsData.map((skill) => (
    <SkillsBox
      key={skill.id}
      image={skill.image}
      title={skill.title}
      description={skill.description}
    />
  ))}
            </section>
        </div>
        <img src={imghero} alt="Right picture" className='absolute z-10 right-2 top-2 sm:right-16 sm:top-32 transform rotate-12 w-24 h-auto sm:32 opacity-70'/>
    </section>
  );
}


