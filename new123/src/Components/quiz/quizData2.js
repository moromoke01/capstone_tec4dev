import React, { useState } from 'react';

const QuizData2 = () => {

    const questions = [
        {
            question: "How would you improve the process of recycling in a way that encourages more people to participate?",
            answers: [
                { option: "Develop a mobile app that rewards users for recycling.", tracks: ["Mobile App Development"] },
                { option: "Redesign recycling bins to make them more visually appealing.", tracks: ["Product Design"] },
                { option: "Create a marketing campaign emphasizing the environmental benefits.", tracks: ["Product Management"] }
            ]
        },
        {
            question: "Describe a unique and creative way to use emerging technologies like blockchain in everyday life.",
            answers: [
                { option: "Implement blockchain in supply chain management for product authenticity.", tracks: ["Blockchain", "Mobile App Development"] },
                { option: "Develop a blockchain-based voting system for secure elections.", tracks: ["Blockchain"] },
                { option: "Create an app for tracking the origin of organic food using blockchain.", tracks: ["Blockchain"] }
            ]
        },
        {
            question: "If you were tasked with creating a 3D animated character for a video game, what unique traits or features would you give this character to make it memorable?",
            answers: [
                { option: "The character can change shape at will, adding an element of surprise." },
                { option: "Give the character a distinctive and expressive facial feature." },
                { option: "Incorporate a captivating backstory that players can explore." }
            ]
        },
        {
            question: "Propose an innovative solution to reduce energy consumption in a smart home.",
            answers: [
                { option: "Develop a mobile app that optimizes smart home device usage." },
                { option: "Create a software program that learns user preferences and adjusts settings accordingly." },
                { option: "Design a product that harvests renewable energy for smart home devices." }
            ]
        },
        {
            question: "Imagine a new way for people to learn a complex subject quickly and effectively. How would you approach it?",
            answers: [
                { option: "Develop a gamified mobile app for interactive learning." },
                { option: "Create an online platform that adapts to each learner's pace and style." },
                { option: "Use data analytics to identify optimal learning paths for individuals." }
            ]
        },
        {
            question: "Suppose you're tasked with designing a new mobile application for enhancing personal cybersecurity. What innovative features would you incorporate to ensure user privacy and data protection?",
            answers: [
                { option: "Implement end-to-end encryption for all communications within the app." },
                { option: "Develop biometric authentication methods for secure user access." },
                { option: "Integrate AI-driven threat detection algorithms for proactive security measures." }
            ]
        },
        {
            question: "How would you reimagine traditional shopping experiences to align with modern consumer preferences and digital trends, focusing on front-end development?",
            answers: [
                { option: "Create interactive and user-friendly interfaces for seamless online shopping experiences." },
                { option: "Implement responsive design principles to ensure compatibility across various devices and screen sizes." },
                { option: "Integrate dynamic content delivery mechanisms for personalized product recommendations and promotions." }
            ]
        },
        {
            question: "Imagine a futuristic smart city where technology plays a central role in improving citizens' lives. What innovative solutions would you propose to address urban challenges, with a focus on data science?",
            answers: [
                { option: "Develop predictive analytics models to anticipate traffic congestion and optimize transportation routes." },
                { option: "Implement machine learning algorithms for energy consumption optimization and resource allocation." },
                { option: "Utilize big data analytics to identify patterns in waste management and optimize recycling initiatives." }
            ]
        },
        {
            question: "If you were to design a revolutionary product for the healthcare industry, what features or capabilities would you prioritize to enhance patient care, with an emphasis on back-end development?",
            answers: [
                { option: "Build a scalable and secure cloud infrastructure for storing and analyzing medical data." },
                { option: "Develop APIs for seamless integration with existing healthcare systems and devices." },
                { option: "Implement robust authentication and access control mechanisms to protect sensitive patient information." }
            ]
        },
        {
            question: "How would you leverage blockchain technology to revolutionize supply chain management, focusing on blockchain development?",
            answers: [
                { option: "Create a decentralized ledger for transparent and immutable tracking of product origins and transactions." },
                { option: "Develop smart contracts to automate payment and fulfillment processes within the supply chain." },
                { option: "Implement cryptographic techniques to ensure data integrity and authenticity throughout the supply chain network." }
            ]
        },
        {
            question: "You're planning a themed party and want to impress your guests with personalized invitations. Which task would you enjoy the most?",
            answers: [
                { option: "Analyzing guest preferences and creating custom playlists for each attendee" },
                { option: "Designing visually stunning invitations with interactive elements" },
                { option: "Building a mobile app to manage RSVPs and event logistics" },
                { option: "Using data to predict party attendance and optimize food and drink quantities" }
            ]
        },
        {
            question: "You're embarking on a solo adventure and want to document your journey through a digital platform. Which aspect of the project excites you the most?",
            answers: [
                { option: "Analyzing and visualizing travel data to share insights and experiences" },
                { option: "Designing a user-friendly interface for accessing travel tips and recommendations" },
                { option: "Developing a mobile app for on-the-go navigation and trip planning" },
                { option: "Exploring blockchain technology for secure and decentralized data storage" }
            ]
        },
        {
            question: "You've decided to pursue a new hobby and are torn between several options. Which activity would you find most intriguing?",
            answers: [
                { option: "Analyzing weather patterns and building predictive models for outdoor adventure" },
                { option: "Designing and creating 3D models for 3D printing and prototyping" },
                { option: "Developing a mobile game inspired by your favorite books or movies" },
                { option: "Exploring data visualization techniques to illustrate historical trends and events" }
            ]
        },
        {
            question: "You're planning a weekend getaway and want to optimize your travel experience. Which task sounds the most enjoyable?",
            answers: [
                { option: "Analyzing flight and hotel data to find the best deals and accommodations" },
                { option: "Designing a travel itinerary with must-see attractions and hidden gems" },
                { option: "Developing a mobile app for real-time updates on local events and activities" },
                { option: "Experimenting with blockchain-based loyalty programs for travel rewards" }
            ]
        },
        {
            question: "You're organizing a charity event and want to maximize donations and engagement. Which role would you be most excited to take on?",
            answers: [
                { option: "Analyzing donor data to identify potential supporters and fundraising opportunities" },
                { option: "Designing promotional materials and social media campaigns to raise awareness" },
                { option: "Developing a mobile app for event registration and donation tracking" },
                { option: "Exploring blockchain solutions for transparent and secure donation processing" }
            ]
        },
        {
            question: "You're interested in starting a new fitness routine and want to track your progress. Which approach appeals to you the most?",
            answers: [
                { option: "Analyzing workout data to optimize training plans and achieve fitness goals" },
                { option: "Designing a personalized exercise program tailored to individual preferences" },
                { option: "Developing a mobile app for tracking workouts, nutrition, and overall wellness" },
                { option: "Exploring blockchain-based health platforms for secure data sharing and incentivization" }
            ]
        },
        {
            question: "You're passionate about cooking and want to share your culinary creations with the world. Which project would you be most eager to tackle?",
            answers: [
                { option: "Analyzing recipe data to discover new flavor combinations and cooking techniques" },
                { option: "Designing a visually stunning cookbook with step-by-step instructions and photos" },
                { option: "Developing a mobile app for meal planning, grocery shopping, and recipe sharing" },
                { option: "Exploring blockchain applications for food traceability and supply chain transparency" }
            ]
        },
        {
            question: "You're planning to redecorate your living space and want to incorporate smart home technology. Which task would you be most interested in?",
            answers: [
                { option: "Analyzing home automation data to optimize energy usage and improve efficiency" },
                { option: "Designing an intuitive smart home interface for controlling lights, appliances, and security systems" },
                { option: "Developing a mobile app for remote monitoring and control of smart home devices" },
                { option: "Exploring blockchain solutions for secure and decentralized home automation" }
            ]
        },
        {
            question: "You're considering adopting a pet and want to ensure a perfect match. Which approach resonates with you the most?",
            answers: [
                { option: "Analyzing pet adoption data to find compatible matches based on lifestyle and preferences" },
                { option: "Designing an interactive platform for connecting pet seekers with shelters and rescue organizations" },
                { option: "Developing a mobile app for pet care tips, training resources, and community support" },
                { option: "Exploring blockchain applications for pet identification and medical records management" }
            ]
        },
        {
            question: "You're fascinated by space exploration and want to contribute to scientific research. Which project would you be most interested in supporting?",
            answers: [
                { option: "Analyzing astronomical data to discover new celestial objects and phenomena" },
                { option: "Designing educational resources and outreach programs to inspire future generations of space enthusiasts" },
                { option: "Developing a mobile app for tracking satellite passes and observing events like meteor showers and eclipses" },
                { option: "Exploring blockchain applications for space-based communication and data transmission" }
            ]
        },
        {
            question: "You're planning a weekend getaway with friends. What role would you prefer to take on?",
            answers: [
                { option: "Organizing the itinerary and ensuring everyone has a memorable experience" },
                { option: "Designing a themed photo album to capture the memories" },
                { option: "Exploring decentralized travel options using blockchain technology" }
            ]
        },
        {
            question: "You're given the task of organizing a team-building activity for your colleagues. What approach would you be most excited about?",
            answers: [
                { option: "Designing and coordinating team games and challenges" },
                { option: "Creating visually appealing team T-shirts or badges" },
                { option: "Exploring blockchain-based solutions for team collaboration and reward systems" }
            ]
        },
        {
            question: "You're attending a tech conference and have the opportunity to participate in a workshop. Which one would you choose?",
            answers: [
                { option: "Effective Project Management Strategies" },
                { option: "Design Thinking for Innovation" },
                { option: "Blockchain Applications in Business" }
            ]
        },
        {
            question: "You're tasked with organizing a charity fundraiser event. What aspect would you focus on the most?",
            answers: [
                { option: "Creating and executing a marketing campaign to raise awareness and attract donors" },
                { option: "Designing engaging and visually appealing event posters and promotional materials" },
                { option: "Exploring blockchain solutions for transparent donation tracking and accountability" }
            ]
        }
    ];
}
export default QuizData2