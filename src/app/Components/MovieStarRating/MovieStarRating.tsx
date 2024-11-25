import React, {FC} from 'react';

type MovieStarRatingProps = {
    rating: number;
    maxRating: number;
};

const MovieStarRating: FC<MovieStarRatingProps> = ({rating, maxRating}) => {
    const stars = [];
    for (let i = 0; i < maxRating; i++) {
        stars.push(
            <span
                key={i}
                style={{
                    color: i < rating ? 'rgba(218,14,33,0.69)' : '#dcdcdc',
                    fontSize: '30px',
                }}
            >
        ★
      </span>
        );
    }
    return <div>{stars}</div>;
};

export default MovieStarRating;