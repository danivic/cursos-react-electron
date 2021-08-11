import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
//import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
    title:'Home',
    path:"/",
    icon:<AiIcons.AiOutlineHome/>,
    cName: 'nav-text'
    },
    {
    title:'Alunos',
    path:"/alunos",
    icon:<AiIcons.AiOutlineTeam />,
    cName: 'nav-text'
    },
    {
    title:'Matrícula',
    path:"/matricula",
    icon:<AiIcons.AiOutlineSolution />,
    cName:'nav-text'
    },
    {
        title:'Cursos de Química',
        path:"/cursos",
        icon:<AiIcons.AiOutlineExperiment />,
        cName:'nav-text'
        },
        {
            title:'Horário',
            path:"/horario",
            icon:<AiIcons.AiOutlineClockCircle />,
            cName:'nav-text'
            },
            {
                title:'Turmas',
                path:"/turmas",
                icon:<AiIcons.AiOutlineCluster />,
                cName:'nav-text'
                },
                {
                    title:'Professores',
                    path:"/professores",
                    icon:<FaIcons.FaChalkboardTeacher />,
                    cName:'nav-text'
                    }                    

]

export default SidebarData;
