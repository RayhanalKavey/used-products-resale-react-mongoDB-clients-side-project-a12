import React from "react";
import SecondaryHeading from "../../components/SecondaryHeading/SecondaryHeading";
import useTitle from "../../hooks/useTitle/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div>
      {/* 1 */}
      <div className="card  bg-base-100 rounded h-full shadow-lg   my-12 ">
        <div className="card-body ">
          <div>
            <SecondaryHeading>
              Q. What are the different ways to manage a state in a React
              application?
            </SecondaryHeading>
            {/* divider */}
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider"></div>
            </div>
            {/* divider */}
            <div className="flex justify-between flex-col sm:flex-row mt-5">
              <div>
                {" "}
                <h3 className="font-semibold mb-2">Communication State:</h3>
                <p className="mb-5">
                  Communication plays a crucial role in storing information in
                  different states. It covers essential aspects of an
                  application such as loading spinners, error messages, pop-ups,
                  and many others which showcases that a communication link has
                  been formed. Communication state is the “loading phase” of the
                  transactions between different states.{" "}
                </p>
                <h3 className="font-semibold mb-2">Data State:</h3>
                <p className="mb-5">
                  Data state covers information that your React application
                  stores temporarily for various business functions. Supposedly,
                  you are building a project management app. The information
                  stored in the data state will include the following things –
                  project names, contacts, details about the clients, etc. The
                  Data state will receive all the information from the outer
                  world. But how will it identify which information is what and
                  whether it needs to be stored in the data state or not?
                </p>
                <h3 className="font-semibold mb-2">Control State:</h3>
                <p className="mb-5">
                  Contrary to the state mentioned above in a React app, the
                  control state does not represent the application’s
                  environment. Instead, it refers to the state which the user
                  has input into the app. For example, form inputs, selected
                  items, etc. Control state is known to be more diverse and
                  versatile when it comes to storing information.
                </p>
                <h3 className="font-semibold mb-2">Session State:</h3>
                <p className="mb-5">
                  Session state contains information about the user of the
                  application such as user id, permissions, passwords, etc. It
                  may also include information on how the application should
                  work according to a particular user’s preferences. While
                  Session state can store similar patterned components like
                  Control state, there is a thick difference between both the
                  information stored. For example, you may have a part of a
                  Control state information that represents parts of a tree
                  view, you can find kind of similar data in the Session state,
                  but it will definitely be different from the Control state.
                  Session states can only be read when a component is mounted,
                  which means that you store a copy of the information already
                  present in the Control state. It stores personal preferences
                  based on the user’s choices to depict the data.
                </p>
                <h3 className="font-semibold mb-2">Location State:</h3>
                <p>
                  Location state is the UTF-8 display that appears in your URL
                  bar. In fact, the L in URL stands for Locator! One of the most
                  interesting facts about Location state is that you can give
                  directions to a user to parts of the application that do not
                  have unique URLs associated with them. Also, the HTML5 History
                  API allows you to store states separately from the specific
                  URL.
                </p>
              </div>
            </div>

            {/* /// */}
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="card  bg-base-100 rounded h-full  shadow-lg  my-12 ">
        <div className="card-body ">
          <div>
            <SecondaryHeading>
              Q. How does prototypical inheritance work?
            </SecondaryHeading>
            {/* divider */}
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider"></div>
            </div>
            {/* divider */}
            <div className="flex justify-between flex-col sm:flex-row mt-5">
              <p>
                The Prototypal Inheritance is a feature in javascript used to
                add methods and properties in objects. It is a method by which
                an object can inherit the properties and methods of another
                object. Traditionally, in order to get and set the [[Prototype]]
                of an object, we use Object. getPrototypeOf and Object.
                <br />
                <br />
                In programming, we often want to take something and extend it.
                <br />
                <br />
                For instance, we have a user object with its properties and
                methods, and want to make admin and guest as slightly modified
                variants of it. We’d like to reuse what we have in user, not
                copy/reimplement its methods, just build a new object on top of
                it.
                <br />
                <br />
                Prototypal inheritance is a language feature that helps in that.
              </p>
            </div>

            {/* /// */}
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="card  bg-base-100 rounded h-full  shadow-lg  my-12 ">
        <div className="card-body ">
          <div>
            <SecondaryHeading>
              Q. What is a unit text? Why should we write unit tests?
            </SecondaryHeading>
            {/* divider */}
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider"></div>
            </div>
            {/* divider */}
            <div className="flex justify-between flex-col sm:flex-row mt-5">
              <p>
                A unit test is a way of testing a unit - the smallest piece of
                code that can be logically isolated in a system. In most
                programming languages, that is a function, a subroutine, a
                method or property. The isolated part of the definition is
                important.
                <br />
                <br />
                They enable you to catch bugs early in the development process.
                Automated unit tests help a great deal with regression testing.
                They detect code smells in your codebase. For example, if you're
                having a hard time writing unit tests for a piece of code, it
                might be a sign that your function is too complex.
              </p>
            </div>

            {/* /// */}
          </div>
        </div>
      </div>
      {/* 4 */}
      <div className="card  bg-base-100 rounded h-full  shadow-lg  my-12 ">
        <div className="card-body ">
          <div>
            <SecondaryHeading>Q. React vs Angular vs View?</SecondaryHeading>
            {/* divider */}
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider"></div>
            </div>
            {/* divider */}
            <div className="flex justify-between flex-col sm:flex-row mt-5">
              <div>
                <h3 className="font-semibold mb-2">React</h3>
                <p className="mb-5">
                  React can be used as a UI library to render elements, without
                  enforcing a specific project structure, and that’s why it’s
                  not strictly a framework.
                  <br />
                  <br />
                  React Elements are the smallest building blocks of React apps.
                  They are more powerful than DOM elements because the React DOM
                  makes sure to update them efficiently whenever something
                  changes.
                  <br />
                  <br />
                  Components are larger building blocks that define independent
                  and reusable pieces to be used throughout the application.
                  They accept inputs called props and produce elements that are
                  then displayed to the user.
                </p>
                <h3 className="font-semibold mb-2">Angular</h3>
                <p className="mb-5">
                  AngularJS, the original framework, is an MVC
                  (Model-View-Controller)) framework. But in Angular 2, there’s
                  no strict association with MV*-patterns as it is also
                  component-based.
                  <br />
                  <br />
                  Projects in Angular are structured into Modules, Components,
                  and Services. Each Angular application has at least one root
                  component and one root module.
                  <br />
                  <br />
                  Each component in Angular contains a Template, a Class that
                  defines the application logic, and MetaData (Decorators). The
                  metadata for a component tells Angular where to find the
                  building blocks that it needs to create and present its view.
                </p>
                <h3 className="font-semibold mb-2">Vue</h3>
                <p className="mb-5">
                  The Vue.js core library focuses on the View layer only. It’s
                  called a progressive framework because you can extend its
                  functionality with official and third-party packages, such as
                  Vue Router or Vuex, to turn it into an actual framework.
                  <br />
                  <br />
                  Although Vue is not strictly associated with the MVVM
                  (Model-View-ViewModel) pattern, its design was partly inspired
                  by it. With Vue, you’ll be working mostly on the ViewModel
                  layer, to make sure that the application data is processed in
                  a way that allows the framework to render an up-to-date View.
                  <br />
                  <br />
                  Vue’s templating syntax lets you create View components, and
                  it combines familiar HTML with special directives and
                  features. This templating syntax is preferred, even though raw
                  JavaScript and JSX are also supported.
                </p>
              </div>
            </div>

            {/* /// */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
