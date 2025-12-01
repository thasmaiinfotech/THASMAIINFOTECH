import React from 'react';

const Placeholder = ({ title, id }) => (
    <section id={id} className="py-20 border-b border-gray-100">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-500">Coming Soon...</p>
        </div>
    </section>
);

export default Placeholder;
