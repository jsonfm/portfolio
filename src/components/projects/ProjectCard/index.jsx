import { LazyLoadImage } from 'react-lazy-load-image-component';
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
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}