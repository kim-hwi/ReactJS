import React from "react";
import PropTypes from "prop-types";//PropTypes 모듈을 이용하여 변수형이 다를경우 콘솔에 에러메시지 할당 but 예제 실행시 작동이 안되는것 같다.
import axios from "axios";//fatch의 상위레이어개념
import Movie from "./Movies"//동일폴더에 존재하는 파일 import
import './index.css';

  class App extends React.Component{//componet를 extend한 class App생성
    state = {
      isLoading: true ,
      movies:[]//movies 미리 선언, 값이 할당되지 않음.
    };
  
    getMovies = async () => {//어싱크로노스로 실행하여 데이터를 모두 받기전 렌더되지 않도록힘
      const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
      //axios를 이용하여 proxy server에 있는 데이터를 movies에 할당. es 최신버전의 함수 활용
      //await를 이용하여 axios가 모든 data를 가져올 수 있도록 기다림.
     this.setState({movies, isLoading : false});//setState를 이용하여야 정보를 전달할 수 있음
    } 
    componentDidMount() {//componet가 mount가 되며 실행되는 함수이며 getMovies();를 실행하도록 하였음.
      this.getMovies();
    }
  

  

  render(){//렌더가 반복 실행되며 변경되는 컴포넌트에 대해서만 변경을 해주는 것이 리액트의 가장 큰 특징이며, 같은 홈페이지에서 새로고침 없이 
        const {isLoading, movies} = this.state;
        return (
          <section className = "container">
            {isLoading 
              ? ( <div className="loader">
                  <span className="loader__text">Loading...</span>
              </div>) : (
                <div className="movies">
                  {movies.map(movie => (<Movie//map함수를 이용하여 server에서 받아온 movies에 접근하여 모든 변수들에 동시에 Movies.js에서 정의된 moive함수에 파라미터로 전달하여 npx를 활용하여 화면에 출력한다.
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                  />))}
                  </div>
              // ))
        )}
          </section>
      );
   }
}
export default App;