import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
    title:'Home',
    path:"/Home",
    icon:<AiIcons.AiFillHome/>,
    cName: 'nav-text'
    },
    {
    title:'Alunos',
    path:"/Alunos",
    icon:<IoIcons.IoIosPaper />,
    cName: 'nav-text'
    },
    {
    title:'Matricula',
    path:"/Matricula",
    icon:<IoIcons.IoIosPaper />,
    cName:'nav-text'
    },
    {
        title:'Cursos',
        path:"/Cursos",
        icon:<FaIcons.FaCartPlus />,
        cName:'nav-text'
        },
        {
            title:'Horario',
            path:"/Horario",
            icon:<IoIcons.IoIosPaper />,
            cName:'nav-text'
            },
            {
                title:'Turmas',
                path:"/Turmas",
                icon:<IoIcons.IoIosPaper />,
                cName:'nav-text'
                },
                {
                    title:'Professores',
                    path:"/Professores",
                    icon:<IoIcons.IoIosPaper />,
                    cName:'nav-text'
                    }

]

export default SidebarData;
