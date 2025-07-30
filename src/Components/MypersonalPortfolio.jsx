import React from 'react';
import { motion } from 'framer-motion';
import project1 from '/project1.png';
import project2 from '/project2.png';
import project3 from '/project3.png';

const ProjectCard = ({ image, title, description, link }) => (
  <motion.article
    className='relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group hover:shadow-purple-500/40 transition-shadow duration-300'
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className='absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl -top-10 -left-10 opacity-30'></div>
    <div className="relative z-10">
      <figure className='relative'>
        <img
          src={image}
          alt={`${title} preview`}
          className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 rounded-t'
        />
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='absolute inset-0 flex items-center justify-center bg-purple-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
        >
          <button className='bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5]'>
            Live Preview
          </button>
        </a>
      </figure>
      <div className="px-6 py-4">
        <header>
          <h3 className='text-white text-lg font-bold mb-2'>{title}</h3>
          <p className='text-gray-300 text-sm'>{description}</p>
        </header>
      </div>
    </div>
  </motion.article>
);

const listProjects = [
  {
    image: project1,
    title: 'Portfolio Website 1',
    description: 'A modern portfolio built with React and Tailwind CSS.',
    link: '#',
  },
  {
    image: project2,
    title: 'Portfolio Website 2',
    description: 'A sleek design showcasing frontend skills.',
    link: '#',
  },
  {
    image: project3,
    title: 'Portfolio Website 3',
    description: 'Responsive layout with animations and interactivity.',
    link: '#',
  },
  {
    image: project1,
    title: 'Portfolio Website 4',
    description: 'Creative use of gradients and hover effects.',
    link: '#',
  },
  {
    image: project2,
    title: 'Portfolio Website 5',
    description: 'Clean UI with reusable components.',
    link: '#',
  },
  {
    image: project3,
    title: 'Portfolio Website 6',
    description: 'Built for performance and accessibility.',
    link: '#',
  },
];

export default function Projects() {
  return (
    <main className='p-4 md:px-12 lg:px-24'>
      <section data-aos='fade-up' data-aos-delay='300' className='text-center'>
        <h1 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
          My <span className='text-purple-400'>Projects</span>
        </h1>
        <p className='text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base max-w-xl mx-auto'>
          Explore some of the projects I've built using modern frontend technologies like React, Tailwind CSS, and more.
        </p>
      </section>

      <section
        id="projects"
        data-aos='fade-up'
        data-aos-delay='500'
        className='flex flex-wrap gap-6 justify-center mt-8 scroll-mt-20'
      >
        {listProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </section>
    </main>
  );
}
