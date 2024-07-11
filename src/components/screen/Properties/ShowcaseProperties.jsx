import React, { useState } from 'react';
import latestProperty from '../../../lib/LatestProperteData';
import { IoMdArrowForward } from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";
import PropertiesFilter from '../../PropertiesFilter/PropertiesFilter';
import PropertieListStyleCard from '../../PropertiListStyleCard/PropertieListStyleCard';
import LatestPropertiesCard from '../../LatestPropertieCard/LatestPropertiesCard';

const ShowcaseProperties = () => {
    const [showPost, setShowPost] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const entriesPerPage = 9; // Number of posts per page
    const totalPosts = latestProperty.length; // Total number of posts

    // Calculate the total number of pages
    const totalPages = Math.ceil(totalPosts / entriesPerPage);

    // Slice the data to display only the posts for the current page
    const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = Math.min(startIndex + entriesPerPage, totalPosts);
    const paginatedData = latestProperty.slice(startIndex, endIndex);

    // Generate an array of page numbers
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    const handleShowGrid = () => {
        setShowPost(true);
    }

    const handleShowList = () => {
        setShowPost(false);
    }
    return (
        <section className='pt-[100px]'>
            <div className="container_fluid border-b">
                <PropertiesFilter handleShowGrid={handleShowGrid} handleShowList={handleShowList} />
                <div className="mt-10">
                    {
                        showPost ?

                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                                {
                                    paginatedData.map((property, index) =>
                                        <LatestPropertiesCard key={index} item={property} />

                                    )
                                }
                            </div> :
                            <div className="flex gap-16 flex-wrap">
                                {
                                    paginatedData.map((property, index) =>
                                        <PropertieListStyleCard key={index} index={index} item={property} />

                                    )}
                            </div>
                    }
                </div>
                <div className="">
                    {/* Pagination */}
                    <div className="flex justify-center px-[1.875rem] py-[2rem]">
                        <div className='flex items-center gap-3'>
                            <button onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))} disabled={currentPage === 1} className="px-3 py-2  bg-primary  text-white rounded-md disabled:opacity-50 disabled:text-black"><IoArrowBackSharp /></button>

                            {pageNumbers.map(number => (
                                <button key={number} onClick={() => setCurrentPage(number)} className={`mx-1 px-3 py-1 rounded-md ${currentPage === number ? 'bg-primary text-white' : 'bg-primary/30 text-primary'}`}>
                                    {number}
                                </button>
                            ))}
                            <button onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))} disabled={currentPage === totalPages} className="px-3 py-2 bg-primary  text-white rounded-md disabled:opacity-50 disabled:text-black"><IoMdArrowForward /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ShowcaseProperties;
