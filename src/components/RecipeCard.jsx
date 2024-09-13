import {Link} from 'react-router-dom';

const RecipeCard = (props) => {
    const {image, id, name, cuisine, servings} = props
    return <Link to={`/details/${id}`} className="border pb-[5px] sm:pb-[15px] shadow-box rounded-[10px] w-[160px] sm:w-[320px]">
        <img src={image} alt="image" className="w-full h-[200px] object-cover"/>
        <div className="mt-[5px] sm:mt-[20px] px-[10px] sm:px-[15px]">
            <p className="font-semibold text-[14px] sm:text-[20px]">{name}</p>
            <div className="mt-[5px] sm:mt-[10px] w-full flex flex-col sm:flex-row justify-between">
                <span className="font-bold text-[14px] sm:text-[18px] text-orange-500">{cuisine}</span>
                <span className="font-semibold text-[14px] sm:text-[18px]">Servings: {servings}</span>
            </div>
        </div>
    </Link>
}

export default RecipeCard