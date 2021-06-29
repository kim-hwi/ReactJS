import React from "react";
import PropTypes from "prop-types";

function Movie({year, title, summary, poster,genres}){
    return (
    <div className="movie">
        <img src ={poster} alt={title} title={title} />
        <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="genres">{genres.map((genre , index) => <li key={index} className="genres__genre">{genre}</li>)}</ul>

                <p className="movie__summary">{summary.slice(0,150)+"..."}</p>
                {/* slice함수를 이용하여 150글자에서 마감 + "..." 으로 대체 */}
                
        </div>
    </div>)
    ;
}//App.js에서 call할 Movie 함수 생성

Movie.propTypes = {
    id : PropTypes.number.isRequired,//변수형에 맞추어 할당.
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired//변수형에 스트링형어레이일 경우
    //영화id,발행년도,타이틀,줄거리,포스터,장르..
}

export default Movie;