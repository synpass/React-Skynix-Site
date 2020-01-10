import React, { Component } from 'react';
import { array, number, string, oneOfType } from "prop-types";
import Pagination from '../Pagination';
import ProjectThumb from './ProjectThumb';

class ProjectsList extends Component  {

    render () {
        const { projects, page, totals } = this.props;
    
        return (
            <div className="projects">
                <main className="projects__thumbs">
                    {projects.map((item, key) => {
                        return <ProjectThumb {...item} key={key} />
                    })}
                    {/* <Pagination 
                    current={page}
                    total={totals}
                    navLink='/portfolio'
                    /> 
                    
                    Pagination is temporarily disabled.

                    */}
                </main>
            </div>
        );
    }
}

ProjectsList.propTypes = {
    projects: array,
    page: oneOfType([string, number]),
    totals: oneOfType([string, number])
}

ProjectsList.defaultProps = {
    projects: [],
    page: 1,
    totals: 1
}



export default ProjectsList;
