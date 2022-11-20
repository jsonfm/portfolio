import { LazyLoadImage } from 'react-lazy-load-image-component';


export const ProjectCard = ({ name, description, image, repository, demo}) => {
    return (
        <div className="w-full md:w-[40%] h-64 md:h-72 bg-white">
            <div className="w-full h-full overflow-hidden">
                <LazyLoadImage
                    src={image}
                    className="w-full h-full object-cover hover:scale-125"
                />
            </div>
        </div>
    )
}