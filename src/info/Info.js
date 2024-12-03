import self from "../img/self.png"
import mock1 from "../img/project1/mock1.png"
import mock2 from "../img/project2/mock2.png"
import mock22 from "../img/project2/mock22.png"
import mock23 from "../img/project2/mock23.png"
import mock24 from "../img/project2/mock24.png"
import mock25 from "../img/project2/mock25.png"
import mock26 from "../img/project2/mock26.png"
import mock31 from "../img/project3/mock31.png"
import mock32 from "../img/project3/mock32.png"
import mock33 from "../img/project3/mock33.png"
import mock34 from "../img/project3/mock34.png"
import mock4 from "../img/project4/mock4.png"
// import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Shivli",
    lastName: "Agrawal",
    initials: "SA", // the example uses first and last, but feel free to use three or more if you like.
    position: "Software Dev / Full stack / Frontend Design / Product & Solutions",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        
        {
            emoji: '🌎',
            text: 'based in the US'
        },
        {
            emoji: "💼",
            text: "Undergraduate Teaching Assistant at Purdue"
        },
        {
            emoji: "📧",
            text: "agraw185@purdue.edu"
        }
    ],
    socials: [
        // {
        //     link: "https://facebook.com",
        //     icon: 'fa fa-facebook',
        //     label: 'facebook'
        // },
        // {
        //     link: "https://instagram.com",
        //     icon: 'fa fa-instagram',
        //     label: 'instagram'
        // },
        // {
        //     link: "https://github.com/shivliagrawal?tab=repositories",
        //     icon: "fa fa-github",
        //     label: 'github'
        // },
        {
            link: "https://www.linkedin.com/in/shivli-agrawal1407/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        // {
        //     link: "https://twitter.com",
        //     icon: "fa fa-twitter",
        //     label: 'twitter'
        // }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Shivli. I'm a Computer Science Senior at Purdue specializing in Software Engineering. Check out my resume!",
    skills:
    {
        proficientWith: [
            'JavaScript', 'React.js', 'Node.js', 'Git', 'Python', 
            'Java', 'C', 'C++', 'MySQL', 'MongoDB', 'Express.js', 
            'Linux', 'Figma', 'Pandas', 'Object-Oriented Programming', 
            'Data Structures and Algorithms', 'Agile methodology', 
            'Machine Learning', 'Deep Learning', 'Software Engineering and Design', 
            'Systems Programming', 'Software Testing', 'Computer Architecture' ,'Shell Scripting'
        ],
        exposedTo: [
            'High-Performance Computing (HPC)', 'DevOps', 'R', 'PyTorch', 'Natural Language Processing', 
            'Figma', 'Deep Learning', 'Adobe Illustrator'
        ]
    }
    
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'dancing',
            emoji: '💃🏻'
        },
        {
            label: 'gym',
            emoji: '🏋🏻‍♀️'
        },
        {
            label: 'hosting',
            emoji: '🍽️'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    
    portfolio: [ // This is where your portfolio projects will be detailed

        {
            title: "System Monitor (Nov 2024)",
            images: [
                mock1,
                //"/img/project1/image2.png",
            ],
            // source: "https://github.com/shivliagrawal/System-Monitor",
        },
        {
            title: "BoilerTutors (Sept-Nov 2024)",
            images: [
                mock2,
                mock22,
                mock23,
                mock24,
                mock25,
                mock26,
            ],
            // source: "https://github.com/shivliagrawal/BoilerTutors",
        },
        {
            title: "Database Learning Management System (Mar 2022)",
            images: [
                mock31,
                mock32,
                mock33,
                mock34,
               // "/img/project2/image2.png",
            ],
            // source: "https://github.com/shivliagrawal/database-management-system",
        },{
            title: "E-Commerce Web Application (Jun 2023)",
            images: [
                mock4,
               // "/img/project2/image2.png",
            ],
            // source: "https://github.com/shivliagrawal?tab=repositories",
        },
    
    ]
}