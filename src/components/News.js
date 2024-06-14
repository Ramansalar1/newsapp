import React, { Component } from 'react'
import Newsitem from './Newsitem' 
import Spiner from './Spiner'
import PropTypes from 'prop-types'

import InfiniteScroll from "react-infinite-scroll-component";
export class news extends Component {
  
static defaultProps={
  size:20,
  country:"in",
  category:"general"
}
static propTypes={
  size:PropTypes.number,
  country:PropTypes.string,
  category:PropTypes.string

}
  constructor(props){
    super(props);
    
    this.state={
      articles:[],
      loading:true,
      page:1,
      totalResults:0
      
    }
    document.title=`${this.props.category}-Newsholic`;
  }
  async updatenews(){
    this.props.setProgress(0);
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3e7ec9f0b6e24d2c975792a63963db40&page=${this.state.page}&pagesize=${this.props.size}`;
    // this.setState({loading:true})
    let data= await fetch(url);
    this.props.setProgress(30);
    let parsedData= await data.json();
    this.props.setProgress(70);
    // this.setState({loading:false})
    // console.log(parsedData);
    this.setState({
      articles:parsedData.articles,
       totalResults:parsedData.totalResults,
       loading:false
      })
      this.props.setProgress(100);
  }
  async componentDidMount(){
    
    this.updatenews();
  }
  // handleprev= async ()=>{
  
  // this.setState({page:this.state.page-1});
  // this.updatenews();
  // }
  //  handlenext= async ()=>{
    
  //   this.setState({page:this.state.page+1});
  //   this.updatenews();
  //  }
   fetchMoreData = async () => {
    this.setState({page:this.state.page+1})
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3e7ec9f0b6e24d2c975792a63963db40&page=${this.state.page}&pagesize=${this.props.size}`;
    // this.setState({loading:true})
    let data = await fetch(url);
    let parsedData= await data.json()
    // console.log(parsedData);
    this.setState({
       articles: this.state.articles.concat(parsedData.articles),
       totalResults:parsedData.totalResults,
       loading:false
      })
  };

  render() {
    return (
      <>
        <h1 className='text-center'>Newsholic-top {this.props.category} headlines</h1>
        <h1 className='text-center'>Newsholic-top {this.props.category} headlines</h1>
        
        {this.state.loading && <Spiner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spiner/>}
        >
          <div className="container">
        <div className='row'>
          { this.state.articles.map((element)=>{
            return <div className='col-md-4' key={element.url}>
            <Newsitem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} newsurl={element.url} author={element.author } date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
           
            
        </div>
        </div>
        </InfiniteScroll>

        {/* <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprev}>&larr; previous</button>
        <button disabled={(this.state.page+1>=Math.ceil(this.state.totalResults/this.props.size)) } type="button" className="btn btn-dark" onClick={this.handlenext}>next page &rarr;</button>
        </div> */}
      </>
    )
  }
}

export default news

// import React, { useEffect, useState } from 'react';
// import Newsitem from './Newsitem';
// import Spiner from './Spiner';
// import PropTypes from 'prop-types';
// import InfiniteScroll from 'react-infinite-scroll-component';

// const News=(props)=> {
//   const { size = 20, country = 'in', category = 'general', setProgress } = props;

//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [totalResults, setTotalResults] = useState(0);

//   useEffect(() => {
//     document.title = `${category}-Newsholic`;
//     updatenews();
//   }, [category, size, country]);

//   const updatenews=async ()=> {
//     setProgress(0);
//     let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=3e7ec9f0b6e24d2c975792a63963db40&page=${page}&pagesize=${size}`;
//     setLoading(true);
//     let data = await fetch(url);
//     setProgress(30);
//     let parsedData = await data.json();
//     setProgress(70);
//     setArticles(parsedData.articles);
//     setTotalResults(parsedData.totalResults);
//     setLoading(false);
//     setProgress(100);
//   }

//   // function handleprev() {
//   //   setPage(page - 1);
//   //   updatenews();
//   // }

//   // function handlenext() {
//   //   setPage(page + 1);
//   //   updatenews();
//   // }

//   function fetchMoreData() {
//     setPage(page + 1);
//     let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=3e7ec9f0b6e24d2c975792a63963db40&page=${page+1}&pagesize=${size}`;
//     let data = fetch(url).then((response) => response.json());
//     data.then((parsedData) => {
//       setArticles((prevArticles) => prevArticles.concat(parsedData.articles));
//       setTotalResults(parsedData.totalResults);
//     });
//   }

//   return (
//     <>
//       <h1 className='text-center'>Newsholic-top {category} headlines</h1>
//       <InfiniteScroll
//         dataLength={articles.length}
//         next={fetchMoreData}
//         hasMore={articles.length !== totalResults}
//         loader={<Spiner />}
//       >
//         <div className='container'>
//           <div className='row'>
//             {articles.map((element) => (
//               <div className='col-md-4' key={element.url}>
//                 <Newsitem
//                   title={element.title ? element.title.slice(0, 45) : ''}
//                   description={element.description ? element.description.slice(0, 88) : ''}
//                   imageurl={element.urlToImage}
//                   newsurl={element.url}
//                   author={element.author}
//                   date={element.publishedAt}
//                   source={element.source.name}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </InfiniteScroll>
//     </>
//   );
// }

// News.defaultProps = {
//   size: 20,
//   country: 'in',
//   category: 'general',
// };

// News.propTypes = {
//   size: PropTypes.number,
//   country: PropTypes.string,
//   category: PropTypes.string,
// };

// export default News;