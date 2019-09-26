import React from 'react';
import { array, number, string, oneOfType } from "prop-types";
import Pagination from '../Pagination';

function ProjectsList (props)  {
    const { projects } = props;

    return (
        <div className="projects">
            {projects.map((item, key) => {
                const imageSrc = item.preview_image ? item.preview_image.guid : "";
                const title = item.title ? item.title.rendered : "";
                const link = item.link
                return <div className="project" key={key}>
                            <a href={link} className="project__link">
                                <div className="project__thumb"
                                     style={{"backgroundImage": `url(${imageSrc})`}}
                                     />
                                <h3 className="project__title"> {title} </h3>
                            </a>
                        </div>
            })}
            <Pagination 
                current={props.page}
                total={props.totals}
                navLink='/portfolio'
            />
        </div>
    );
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
