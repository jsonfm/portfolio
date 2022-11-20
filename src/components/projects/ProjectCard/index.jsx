export const ProjectCard = ({ name, description, image, repository, demo}) => {
    return (
        <div className="border w-full md:w-[40%] h-64 md:h-72 rounded bg-white">
            <h4 className="text-primary">{name}</h4>
            <img 
                src={image}
                className="w-full h-52 object-contain"
            />
        </div>
    )
}