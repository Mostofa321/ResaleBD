import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto my-10'>
            <h1 className='text-center text-4xl mb-7'>Blog</h1>
            <div tabIndex={0} className="collapse collapse-arrow  border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-2xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>
                        Managing state in your React apps isn’t as simple as using useState or useReducer.
                        Not only are there are a lot of different kinds of state, but there often dozens of
                        ways of managing each kind. Which should you choose?
                        In this guide, we will uncover the several kinds of state in your React apps that you
                        might not be aware of, plus how to manage them in the most effective way. <br /><br />
                        <span className='text-xl'>The Four Kinds of React State to Manage</span> <br />
                        When we talk about state in our applications, it’s important to be clear about
                        what types of state actually matter.
                        There are four main types of state you need to properly manage in your React apps: 1.
                        Local state 2. Global state 3. Server state 4. URL state <br />
                        Local (UI) state – Local state is data we manage in one or another component.
                        Local state is most often managed in React using the useState hook.
                        For example, local state would be needed to show or hide a modal component or to track
                        values for a form component, such as form submission, when the form is disabled and
                        the values of a form’s inputs. <br />
                        Global (UI) state – Global state is data we manage across multiple components.
                        Global state is necessary when we want to get and update data anywhere in our app, or
                        in multiple components at least.
                        A common example of global state is authenticated user state. If a user is logged into
                        our app, it is necessary to get and change their data throughout our application.
                        Sometimes state we think should be local might become global.
                        Server state – Data that comes from an external server that must be integrated with our UI state.
                        Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                        There are several pieces of state that must be managed every time you fetch or update data from an
                        external server, including loading and error state.
                        Fortunately there are tools such as SWR and React Query that make managing server state much easier <br />
                        URL state – Data that exists on our URLs, including the pathname and query parameters. <br />
                        URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without
                        being able to fetch a post based off of its slug or id that is located in the URL!
                        There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
                    </p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-2xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in
                        objects. It is a method by which an object can inherit the properties and methods of another
                        object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object
                        . getPrototypeOf and Object.
                    </p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-2xl font-medium">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>
                        The main objective of unit testing is to isolate written code to test and determine if it works
                        as intended. Unit testing is an important step in the development process, because if done
                        correctly, it can help detect early flaws in code which may be more difficult to find in later
                        testing stages.
                    </p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-2xl font-medium">
                    React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p>
                        Vue provides higher customizability and hence is easier to learn than Angular or React. Further,
                        Vue has an overlap with Angular and React with respect to their functionality like the use of
                        components. Hence, the transition to Vue from either of the two is an easy option.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;