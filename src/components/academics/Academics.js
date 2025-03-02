import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Style from './Academics.module.scss';
import AcademicsImage from './academics.png';
import HeaderImage from './header.png';
import SocialIcon from '../home/SocialIcon'; 
import { info } from "../../info/Info";

export default function Academics() {
    const courses = [
        {
            title: "CS 18000 - Problem Solving & OOP",
            details: [
                "Fundamentals of programming using Java",
                "Object-oriented principles: classes, inheritance, polymorphism",
                "Data structures: arrays, lists, and maps",
                "Algorithms: searching and sorting",
                "GUI development and file handling"
            ]
        },
        {
            title: "CS 18200 - Foundations of CS",
            details: [
                "Logic and proofs, set theory, functions, relations",
                "Recursion, algorithm analysis, graph theory",
                "Automata theory: finite state machines, pushdown automata, computability"
            ]
        },
        {
            title: "CS 24000 - Programming in C",
            details: [
                "C programming fundamentals and memory management",
                "Pointers, dynamic memory allocation, and data structures",
                "Unix system calls, low-level file I/O, concurrency"
            ]
        },
        {
            title: "CS 25000 - Computer Architecture",
            details: [
                "Digital logic, transistors, combinational and sequential circuits",
                "CPU architecture: instruction sets, pipelining, RISC vs. CISC",
                "Memory hierarchy: virtual memory, caching, DMA, interrupts",
                "Assembly programming and performance optimizations"
            ]
        },
        {
            title: "CS 25100 - Data Structures & Algorithms",
            details: [
                "Algorithm complexity analysis (Big-O, Omega, Theta)",
                "Trees, heaps, hash tables, graphs",
                "Graph algorithms: BFS, DFS, shortest path, spanning trees",
                "Advanced sorting algorithms and search techniques"
            ]
        },
        {
            title: "CS 25200 - Systems Programming ",
            details: [
                "Unix systems programming: shell scripting, file handling, system calls",
                "Memory management and data representation in C",
                "Concurrent execution: threads, processes, synchronization",
                "Low-level programming, debugging, and tools like `make`"
            ]
        },
        {
            title: "CS 30700 - Software Engineering",
            details: [
                "Software development lifecycle (SDLC)",
                "Agile methodologies and team collaboration",
                "Software testing, version control, design patterns",
                "Project management tools and best practices"
            ]
        },
        {
            title: "CS 35400 - Operating Systems",
            details: [
                "Process management: scheduling, synchronization, deadlocks",
                "Virtual memory, paging, segmentation",
                "File systems, I/O management, system security",
                "Kernel design and implementation"
            ]
        },
        {
            title: "CS 38100 - Algorithms ",
            details: [
                "Algorithm design techniques: divide and conquer, dynamic programming, greedy algorithms",
                "Graph algorithms, NP-completeness, approximation algorithms",
                "Time-space trade-offs and problem intractability"
            ]
        },
        {
            title: "CS 40800 - Software Testing",
            details: [
                "Software testing fundamentals: unit, integration, regression testing",
                "Control flow, data flow, and mutation-based testing",
                "Test automation, debugging, verification, and validation"
            ]
        },
        {
            title: "CS 34800 - Information Systems ",
            details: [
                "Database design, relational model, SQL, and NoSQL databases",
                "Indexing, normalization, and transaction management",
                "Distributed databases, middleware, and data mining"
            ]
        }
    ];

    return (
        
        <Box className={Style.academicsContainer}>
            {/* Title
            <Typography variant="h4" className={Style.heading}>My Academics</Typography> */}
            <img
                src={HeaderImage}
                alt="header"
                className={Style.HeaderImage}
            />
            {/*git text*/}
            <Typography variant="h6" className={Style.heading}>This git repository contains all my Course Work, Assignments and Projects I have worked on in Purdue.</Typography>

            {/* GitHub Icon */}
            <Box className={Style.githubIcon}>
                <SocialIcon 
                    link="https://github.com/shivliagrawal/CourseWork"
                    icon="fa fa-github"
                    label="GitHub"
                />
            </Box>

            {/* Coursework */}
            <Box className={Style.coursework}>
                <Typography variant="h4" className={Style.subheading}>Coursework</Typography>
                <Typography variant="body1" className={Style.text} marginBottom={"25px"}>
                    A summary of the courses I have done so far-
                </Typography>

                <Grid container spacing={3} className={Style.courseGrid}>
                    {courses.map((course, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <Box className={Style.courseItem}>
                                <Typography variant="h6">{course.title}</Typography>
                                <ul>
                                    {course.details.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Teaching Experience at the Bottom */}
            <Box className={Style.teachingExperience}>
                <Typography variant="h4" className={Style.subheading}>Teaching Experience</Typography>
                <Typography variant="body1" className={Style.text}>
                As an Undergraduate Teaching Assistant for Object-Oriented Programming with Java at Purdue University, I have guided over 80 students across seven terms. I lead lab sessions, debug assignments, provide detailed feedback, and track student performance to enhance their understanding of OOP concepts.
                
                </Typography>
                {/* Image */}
            <img
                src={AcademicsImage}
                alt="Academics"
                className={Style.AcademicsImage}
            />
            </Box>
        </Box>
    );
}
