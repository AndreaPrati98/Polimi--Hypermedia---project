# Group - New Wave

## Presentation
Welcome to the repository of the Hypermedia application course at Politecnico di Milano.

We are the group _New Wave_. 

The assignemnt:
For the Client implementation we ask you to develop the website for a **one-week summer festival** of live performing arts (e.g., dance, theatre, music, opera...) using NuxtJS.

## Design Document
The design document has been included inside the repository, inside the folder "document design".

## Project's brief
Our project has been built by using plain CSS, not because of the need to show our strenght but to have the opportunity to learn the most from this course, keeping in mind that what guided us during all the implementation has been the concept of **simplicity**.  

We both decided to not use [VUEX](https://vuex.vuejs.org/guide/) because we never felt the necessity, the rare case we had to make two nested components to communicat we used the $emit to rise an event that has been handled by simple JS.  

We tried to respect all the best practice of both Vue and Nuxt.

### Components
The **header** folder groups the two header types that are more frequently used. They both accept as props *title, subtitle and a link to an image*.

Inside the **img-component** folder are grouped the atomic components that use images so the props are used for the main text, the img's url and for the text on the optional buttons.

Inside **medium-components** we find a GridComponent, which is just a big grid of smaller component (cards).

While in **utilities component** we find buttons and the drop-down compoents.

In the end we have the spare compoents that are there because are used not so often.

## Contribution

Destiny Mora:

Document design: 15h<br/>
Backend design: 10h<br/>
Data base design and filling the information: 15h<br/>
Front design: 50h<br/>
SEO optimization: 10h<br/>
Accessibility and usability test: 25h<br/>


Andrea Prati:

Document design: 30h<br/>
Backend design: 10h<br/>
Data base design and filling the information: 5h<br/>
Front design: 40h<br/>
SEO optimization: 10h<br/>
Accessibility and usability test: 30h<br/>

---
