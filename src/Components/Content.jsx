import React from 'react'
import { useAppContext } from '../Context';

const Content = () => {

    const { items, formatDateRange } = useAppContext();

    const retreatsData = items

    return (

        <section className="my-4 mx-auto px-4 max-w-screen-xl md:px-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {
                    retreatsData.map((items, idx) => (
                        <article className="w-full sm:max-w-md  mt-4 shadow-lg pb-4 border-none hover:border rounded-md duration-300 brightness-90 hover:brightness-100 hover:shadow-sm cursor-pointer" key={idx}
                            data-aos="zoom-in"
                            data-aos-easing="ease-in-sine"
                            data-aos-offset="0"
                            data-aos-delay={idx * 200}
                        >
                            <img src={items.image} loading="lazy" alt={items.title} className="w-full h-48 rounded-t-md" />

                            <div className="pt-3 ml-4 mr-2 mb-3">
                                <h3 className="text-lg text-gray-900">
                                    {items.title}
                                </h3>
                                <p className="text-gray-400 text-sm mt-1">{items.description}</p>
                            </div>

                            <div className="ml-3">
                                <span className="block text-gray-400 text-sm tracking-wide">Date: {formatDateRange(items.date, items.duration)}</span>
                                <span className="block text-gray-400 text-sm tracking-wide">Location: {items.location}</span>
                                <span className="block text-gray-400 text-sm tracking-wide">Price: &#36;{items.price}</span>
                            </div>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}
export default Content