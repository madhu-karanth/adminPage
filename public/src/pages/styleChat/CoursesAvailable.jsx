import React from "react";
import '../styleChat/styles/style.css';
import '../styleChat/styles/style1.css';

function CoursesAvailable({ getTranslatedText }) {
    return (
        <>
            <section className="about-text my-5 position-relative">
                <div className="about-box-out position-absolute w-100">
                    <div className="container">
                        <div className="row py-3">
                            <div className="col-md-4">
                                <div className="group-hover:max-w-sm bg-white border border-gray-200 rounded-lg shadow transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                    <a href="#">
                                        <img className="rounded-t-lg" src="/images/algo.jpeg" alt="" />
                                    </a>
                                    <div className="p-5">
                                        
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Introduction to Algorithms</h5>
                                        
                                        <p className="mb-3 font-normal text-gray-700">Learn about fundamental algorithms and data structures, including sorting, searching, and graph algorithms. Gain insights into algorithm design principles and optimization techniques.</p>
                                        <a href="https://en.wikipedia.org/wiki/Introduction_to_Algorithms" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:text-white dark:focus:ring-blue-800">
                                        Read More
                                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="group-hover:max-w-sm bg-white border border-gray-200 rounded-lg shadow transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                    <a href="#">
                                        <img className="rounded-t-lg" src="/images/webdev.jpeg" alt="" />
                                    </a>
                                    <div className="p-5">
                                        
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Web Development with React</h5>
                                        
                                        <p className="mb-3 font-normal text-gray-700">Master the concepts of modern web development using React.js. Build interactive user interfaces and applications with the latest front-end development tools and techniques.</p>
                                        <a href="https://react.dev/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:text-white dark:focus:ring-blue-800">
                                        Read More
                                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </a>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="group-hover:max-w-sm bg-white border border-gray-200 rounded-lg shadow transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                    <a href="#">
                                        <img className="rounded-t-lg" src="/images/ml.jpeg" alt="" />
                                    </a>
                                    <div className="p-5">
                                        
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Machine Learning Foundations</h5>
                                        
                                        <p className="mb-3 font-normal text-gray-700">Gain a solid understanding of machine learning fundamentals, including supervised and unsupervised learning, neural networks, and deep learning techniques. </p>
                                        <a href="https://www.geeksforgeeks.org/introduction-machine-learning/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:text-white dark:focus:ring-blue-800">
                                        Read More
                                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CoursesAvailable;