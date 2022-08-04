import StarRatings from "react-star-ratings";


export default function StarsRating({vote}) {
    return(
       <div>
           <StarRatings
               rating={vote}
               numberOfStars = {10}
               starDimension="15px"
               starSpacing="15px"
           />
       </div>
   )
}