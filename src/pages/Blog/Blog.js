import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='my-4'>
                <h1 className='font-bold text-3xl'>Difference between SQL and NoSQL</h1>
                <p>
                    Remember that SQL dialects share many properties though they interface with distinct databases. Flavors of NoSQL vary far more across their attendant systems, so comparison can be more useful between multiple non-relational technologies vs. SQL generally.

                    Perhaps the most recognizable SQL dialect is MySQL, an open source and free RDBMS (though available through proprietary licenses as well). Its use is widespread in web applications, and it is known for compatibility, support, and good performance in the average case. MySQL has also made concessions to NoSQL practitioners with features like a JSON data type, the “Document Store,” and support for sharding (horizontal scaling).

                    On the non-relational side, MongoDB is primarily a document store containing JSON-like structures and a JavaScript interface. It’s known for being user-friendly (less administration overhead), performant for simple queries, and flexible thanks to its NoSQL underpinnings. Great for hierarchical data storage, it also supports familiar relational concepts from indexing, to aggregation, to some measure of ACID compliance. Like MySQL, it is compatible with many platforms and programming environments, despite relative recency.
                </p>
            </div>
            <div className='my-4'>
                <h1 className='font-bold text-3xl'>What is JWT, and how does it work?</h1>
                <p>
                JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.

                JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                </p>
            </div>
            <div className='my-4'>
                <h1 className='font-bold text-3xl'>What is the difference between javascript and NodeJS?</h1>
                <p>
                JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language
                </p>
            </div>
            <div className='my-4'>
                <h1 className='font-bold text-3xl'>How does NodeJS handle multiple requests at the same time?</h1>
                <p>
                NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them
                </p>
            </div>
        </div>
    );
};

export default Blog;