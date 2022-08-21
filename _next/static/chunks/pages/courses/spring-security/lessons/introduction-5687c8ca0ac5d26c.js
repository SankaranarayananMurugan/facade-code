(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{7896:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/courses/spring-security/lessons/introduction",function(){return c(702)}])},4621:function(c,a,b){"use strict";var d=b(5893);a.Z=function(a){var c=a.src,b=a.title;return(0,d.jsxs)("div",{className:"p-3",children:[(0,d.jsx)("div",{className:"mb-3 text-secondary text-center",children:(0,d.jsx)("em",{children:b})}),(0,d.jsx)("img",{className:"img-fluid rounded border shadow",src:c,alt:b})]})}},702:function(f,b,a){"use strict";a.r(b);var g=a(5893),h=a(9963),i=a(130),j=a(7291);a(476);var k=a(4621),c=a(9827),d=a(9927),e=a(358);b.default=(0,c.default)(function(a){return a.githubPath,(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("section",{children:[(0,g.jsx)(h.nL,{children:"Introduction"}),(0,g.jsx)(i.Z,{children:"Application security boils down to two more or less independent problems: Authentication (Who are you?) and Authorization (What are you allowed to do?). Spring Security is a framework that provides authentication, authorization and protection against common attacks, and it is the de-facto standard for securing Spring-based applications."})]}),(0,g.jsxs)("section",{children:[(0,g.jsx)(h.aC,{children:"About Course"}),(0,g.jsx)(i.Z,{children:"This course offers a step-by-step guide in securing the REST APIs by introducing some of the most commonly used concepts in Spring Security. This course assumes you have basic knowledge of Spring Boot and REST APIs."})]}),(0,g.jsxs)("section",{children:[(0,g.jsx)(h.aC,{children:"Course Management System"}),(0,g.jsx)(i.Z,{children:"The course management system is a Spring Boot application having a collection of REST APIs to manage courses, students and instructors. The actors who can interact with these APIs are"}),(0,g.jsxs)("ul",{className:"ms-3",children:[(0,g.jsx)("li",{children:"Student"}),(0,g.jsx)("li",{children:"Instructor"}),(0,g.jsx)("li",{children:"Admin"})]}),(0,g.jsx)(i.Z,{}),(0,g.jsx)(i.Z,{children:"It uses Spring Data JPA to persist data in MySQL database. Below is the simple Entity-Relationship diagram of the application."}),(0,g.jsx)(k.Z,{src:"/assets/images/spring-security/lesson01-01.png",title:"Entity-Relationship Diagram"})]}),(0,g.jsxs)("section",{children:[(0,g.jsx)(h.aC,{children:"Objective"}),(0,g.jsx)(i.Z,{children:"At the moment, all the REST APIs are accessible to everyone. Our objective is to secure each of them from unauthorized users, as expected below."}),(0,g.jsxs)("table",{className:"table table-striped",children:[(0,g.jsx)("thead",{children:(0,g.jsxs)("tr",{children:[(0,g.jsx)("th",{children:"API"}),(0,g.jsx)("th",{children:"Objective"})]})}),(0,g.jsxs)("tbody",{children:[(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{children:"List Courses"}),(0,g.jsx)("td",{children:"Any user can browse through the list of available courses"})]}),(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{children:"Get Course"}),(0,g.jsx)("td",{children:"Any user can view the details of a course"})]}),(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{children:"Create Course"}),(0,g.jsx)("td",{children:"Instructors can only create a new course"})]}),(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{children:"Update Course"}),(0,g.jsx)("td",{children:"Instructor who created the course can only update it"})]}),(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{children:"Play Course"}),(0,g.jsxs)("td",{children:["Instructor who created the course can only play it.",(0,g.jsx)("br",{}),"Students who are enrolled on the course can only play it."]})]}),(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{children:"List Students"}),(0,g.jsx)("td",{children:"Admin can only view the list of students"})]}),(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{children:"List Instructors"}),(0,g.jsx)("td",{children:"Admin can only view the list of instructors"})]}),(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{children:"View User Profile"}),(0,g.jsxs)("td",{children:["Users can only view their profile.",(0,g.jsx)("br",{}),"Any user can view an Instructor's profile."]})]})]})]})]}),(0,g.jsxs)("section",{children:[(0,g.jsx)(h.aC,{children:"Guidelines"}),(0,g.jsxs)("ol",{className:"ms-3",children:[(0,g.jsx)("li",{children:"Checkout the code from GitHub."}),(0,g.jsxs)("li",{children:["Edit your database details in ",(0,g.jsx)(j.Z,{children:"src/main/resources/application.properties."})]}),(0,g.jsx)("li",{children:"Build and Run the application in IDE of your choice."}),(0,g.jsxs)("li",{children:["Running the application will automatically create (or update) the database entities. It will also add few sample records using ",(0,g.jsx)(j.Z,{children:"AppDataInitialiser"}),"."]}),(0,g.jsx)("li",{children:"Understanding the business logic of each REST API is not required."}),(0,g.jsx)("li",{children:"Make yourself familiar with the below users and their roles created by default in order to test the security implementation."})]}),(0,g.jsxs)("table",{className:"table table-striped",children:[(0,g.jsx)("thead",{children:(0,g.jsxs)("tr",{children:[(0,g.jsx)("th",{children:"Roles"}),(0,g.jsx)("th",{children:"Users"})]})}),(0,g.jsxs)("tbody",{children:[(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{children:"Student"}),(0,g.jsx)("td",{children:"Bob, Kevin, Stuart"})]}),(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{children:"Instructor"}),(0,g.jsx)("td",{children:"Gru, Lucy"})]}),(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{children:"Admin"}),(0,g.jsx)("td",{children:"Admin"})]})]})]})]})]})},(0,e.s)(d.Z,"introduction"))}},function(a){a.O(0,[116,891,637,462,774,888,179],function(){var b;return a(a.s=7896)}),_N_E=a.O()}])