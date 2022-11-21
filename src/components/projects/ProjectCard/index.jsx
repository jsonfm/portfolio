import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import "./styles.css";

export const ProjectCard = ({ name, description, image, repository, demo}) => {
    return (
        <div className="w-full md:w-[40%] h-64 md:h-72 bg-white">
            <div className="w-full h-full overflow-hidden relative project-img-container">
                <LazyLoadImage
                    src={image}
                    className="w-full h-full object-cover hover:scale-125 absolute top-0 left-0 z-9"
                />
                <div className="project-description">
                    <p className="mb-4 h-24 overflow-y-auto overscroll-y-auto">{description}</p>
                    <div className="flex flex-col gap-2">
                        {repository && <a href={repository} target="_blank" rel="noopener" className="btn btn-light gap-2"><AiFillGithub size={20}/> Code</a>}
                        {demo && <a href={demo} target="_blank" rel="noopener" className="btn btn-light gap-2"><AiFillEye size={20}/> Demo</a>}
                    </div>
                </div>
                <p className="bg-secondary/80 md:text-xl w-full text-white absolute bottom-0 z-30 px-4">{name}</p>
            </div>
        </div>
    )
}