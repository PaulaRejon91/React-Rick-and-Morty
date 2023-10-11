/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Pagination = ({ prev, next, onPrevious, onNext }) => {

    const handlePrevious = () => {
        onPrevious();

    };

    const handleNext = () => {
        onNext();

    };
    return (
        <nav className="my-5">
            <ul className="pagination justify-content-center">
                { prev? (
                
                <li className="page-item">          
                    <a className="page-link" href="#" onClick={handlePrevious}>
                        Previous
                    </a>
                    </li>
                   ) :
                    null}

                {next?(
               
                <li className="page-item">
                    <a className="page-link" href="#" onClick={handleNext}>
                        Next
                    </a>
                </li>
                ):null}
            </ul>
                
        </nav>
    )
}

export default Pagination
