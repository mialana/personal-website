import one from '../assets/jpg/projects1.jpg'
import two from '../assets/png/projects2.png'
import three from '../assets/png/projects3.png'
import four from '../assets/png/projects4.png'
import five from '../assets/png/projects5.png'


export const projectsData = [
    {
        id: 3,
        projectName: 'Spotify Composite',
        projectDesc: "A personal project that utilizes the Spotify Developer's API \
        to replicate the algorithmic behavior of Spotify Blend.",
        tags: ['React', 'Typescript'],
        code: '',
        demo: ['https://condescending-leakey-e54614.netlify.app/', 
               'https://www.youtube.com/watch?v=6VYXeNswZCE'],
        image: three
    },

    {
        id: 4,
        projectName: 'Penn Courses',
        projectDesc: "A suite of open-source web applications used by all students at the University of \
        Pennsylvania.",
        tags: ['React', 'Typescript', 'Django', 'Redux'],
        code: '',
        demo: ['https://penncoursereview.com/',
                'https://penncourseplan.com/'],
        image: four
    },
    {
        id: 5,
        projectName: 'MoBi-LE',
        projectDesc: "An intelligent robot product designed and developed during a \
        summer internship.",
        tags: ['ROS', '*NLP', '*eye-tracking', 'Typescript', 'C++'],
        code: '',
        demo: ['https://drive.google.com/file/d/1luBF1vx___x2TJF4QIiMHwsI-r4yo3pY/view?usp=sharing'],
        image: five
    },
    {
        id: 1,
        projectName: 'Synthetic Face Database',
        projectDesc: 'A summer internship project that automatically generates 3D human faces \
        using a Python algorithm.',
        tags: ['Python, SideFX Houdini, Autodesk Maya'],
        code: '',
        demo: ['https://drive.google.com/file/d/1lQJ6QTFYg9N_OCaRwzmVofKIbQ9CIwmx/view?usp=sharing'],
        image: one
    },
    {
        id: 2,
        projectName: 'Mini Minecraft',
        projectDesc: 'A collaborative project to create an interactive 3D world exploration and \
        alteration program in the style of the computer game Minecraft.',
        tags: ['GLSL / OpenGL', 'C++', '*pathfinding', '*ray-tracing'],
        code: 'https://github.com/mialana/mini-minecraft',
        demo: ['https://youtu.be/uaXJtYumZVE?si=N0NM2tBLTn9BfpwY&t=159'],
        image: two
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/