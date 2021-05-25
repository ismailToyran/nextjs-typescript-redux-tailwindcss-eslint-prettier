import ProjectCard from '@components/cards/project';
import { IProjectFields } from '@components/contentful/types/contentful';
import Section from '@components/section';
import React from 'react';

type ProjectsProps = {
  data: IProjectFields[];
};

const Projects = ({ data }: ProjectsProps) => (
  <Section id="projects" index={2}>
    {data.map((project, index) => (
      <ProjectCard data={project} index={index} key={project.title} />
    ))}
  </Section>
);

export default Projects;
