import React from 'react';
import { array, number, string, oneOfType } from "prop-types";
import Pagination from '../Pagination';
import {Link} from '../../routes'

function ProjectsList (props)  {
    const { projects } = props;

    return (
        <div className="projects">
            {projects.map((item, key) => {
                const imageSrc = item.preview_image ? item.preview_image.guid : "";
                const title = item.title ? item.title_1 : "";
                return <div className="project" key={key}>
                            <Link route='project' params={{slug: item.slug}}>
                                <a className="project__link">
                                    <div className="project__thumb"
                                        style={{"backgroundImage": `url(${imageSrc})`}}
                                        />
                                    <h3 className="project__title" dangerouslySetInnerHTML={{__html:title}}></h3>
                                </a>
                            </Link>
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
