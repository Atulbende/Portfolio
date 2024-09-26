import { profile } from "console";

export const links=[
    {
        link:'Home',
        hash:'#home'
    },
    {
        link:'Education',
        hash:'#education'
    },
    {
        link:'Skill',
        hash:'#skill'
    },
    {
        link:'Career',
        hash:'#career'
    }

] as const;

export const data={
    skills:['C','C++','VB.Net',"HTML5",'CSS','SCSS','JavaScript(ES6)','TypeScript','Bootsrap','JQuery','antd','GIT','Github','Tailwind','ReactJs','NextJs','NodeJs','Redux-toolkit','MYSQL','MS-SQL','Framer Motion'],
    education:[
        {class:'12th',date:'2011',place:'Chhindwara',location:'Saraswati Shishu Mandir Chhindwara(M.P.)',bgColor:'radial-gradient(78.57% 78.57% at 50.65% 0.84%,#e9d5ff 0%,#8383fd 0%,rgba(135, 160, 219, 0) 100%);!important',Color:'#fff'},
        {class:'BCA',date:'2014',place:'S.V.S Collage Chhindwara',location:'MakhanLal Chaturvedi Univercity Bhopal(M.P.)',bgColor:'radial-gradient(78.57% 78.57% at 50.65% 0.84%,#e9d5ff 0%,#8383fd 0%,rgba(135, 160, 219, 0) 100%);!important',Color:'#fff'},
        {class:'MSC IT',date:'2016',place:'S.V.S Collage Chhindwara',location:'MakhanLal Chaturvedi Univercity Bhopal(M.P.)',bgColor:'radial-gradient(78.57% 78.57% at 50.65% 0.84%,#e9d5ff 0%,#8383fd 0%,rgba(135, 160, 219, 0) 100%);!important',Color:'#fff'}
],
career:[
    {company:'Freelance Project',date:'07/2016 - 12/2019',position:'Full Stack Developer',place:'I have completed 30+ projects as Freelance Online and Desktop Applications in Chhindwara(M.P.) ',bgColor:'radial-gradient(78.57% 78.57% at 50.65% 0.84%,#e9d5ff 0%,#8383fd 0%,rgba(135, 160, 219, 0) 100%)!important;',Color:'#fff'},
    {company:'W3bytes',date:'02/12/2019 – 04/07/2023',position:'Consultant',place:'Amar Plaza, 17/1, IT Park Rd, Gayatri Nagar, Pratap Nagar, Nagpur, Maharashtra 440022 (Closed )',bgColor:'radial-gradient(78.57% 78.57% at 50.65% 0.84%,#e9d5ff 0%,#8383fd 0%,rgba(135, 160, 219, 0) 100%)!important;',Color:'#fff'},
    {company:'Kfintech',date:'10/07/2023 – 02-08-2024',position:'Senior Software Engineer',place:'Selenium Building, Tower – B, Plot No 31 & 32, Financial District Nanakramguda, Serilingampalle (M), Hyderabad, Telangana 500032',bgColor:'radial-gradient(78.57% 78.57% at 50.65% 0.84%,#e9d5ff 0%,#8383fd 0%,rgba(135, 160, 219, 0) 100%)!important;',Color:'#fff'}
      ],
      profile:{
                name:`Atul`,
                introduction:`I'm a Software Engineer with 5 year of experience. i enjoy building customize application in different domains my focus is in React(Nextjs + AI) for good user experince`,
                aboutus:`Experienced software professional with <b>5 years </b> of expertise in software coding, analysis, design, and planning. Skilled in developing user-friendly UI and proficient in
                    <b>&nbsp;ReactJs(4.5 year)</b>, NodeJs(2.5 year), JavaScript(5 year), HTML5, CSS3, and Bootstrap4, git, github. Strong track record of customer interaction involving technical
                    consulting,solution design, planning, development, and deployment. Proficient in Object-Oriented Languages like C++. Collaborates closely with teams to support projects
                    throughout all phases of delivery, while also conducting testing to identify and document bugs and technical issues.`,
                intrust:` when i'm not coding, i enjoy <b>gyming</b>, playing Cricket, watching Movies, and play with animal(cow,dog). i also enjoy learning new things. new business idea. and when i have a lot of time then i love to go solo traveling.
                    i'm playing guiter in free time`
               
                },
              
}


