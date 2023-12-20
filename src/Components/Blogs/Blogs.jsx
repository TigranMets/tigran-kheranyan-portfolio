import React from 'react';
import BlogCart from './BlogCard';
import s from './Blogs.module.css';

const Blogs = () => {

    let cards = [
        {
            title: 'Why I am THE BEST?',
            description: '"Iron man | Aspiring Software Developer 👾 | Open Source Contributor 🔥 | Speaker🎙 | Tech Writer ✍️ "',
        },
        {
            title: 'Why I am THE BEST?',
            description: '"Iron man | Aspiring Software Developer 👾 | Open Source Contributor 🔥 | Speaker🎙 | Tech Writer ✍️ "',
        },
    ];

    return (
        <div id='blogs' className={s.body}>
            <span className={s.header}>Blogs</span>
            <br />
            <span className={s.description} >WITH LOVE FOR DEVELOPING COOL STUFF, I LOVE TO WRITE AND TEACH OTHERS WHAT I HAVE LEARNT.</span>
            {cards.map(card => <BlogCart title={card.title}
                description={card.description} />)}
        </div>
    );
}

export default Blogs;