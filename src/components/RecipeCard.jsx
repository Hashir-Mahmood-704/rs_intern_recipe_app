import {Link} from 'react-router-dom';

const RecipeCard = (props) => {
    const {image, id, name, cuisine, servings} = props
    return <Link to={`/details/${id}`} className="border pb-[15px] shadow-box rounded-[10px]">
        <img src={image} alt="image" className="w-[320px] h-[300px]"/>
        <div className="mt-[20px] px-[15px]">
            <p className="font-semibold text-[20px]">{name}</p>
            <div className="mt-[10px] w-full flex justify-between">
                <span className="font-bold text-[18px] text-orange-500">{cuisine}</span>
                <span className="font-semibold text-[18px]">Servings: {servings}</span>
            </div>
        </div>
    </Link>
}

export default RecipeCard