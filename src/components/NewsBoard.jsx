import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

function NewsBoard({category}) {
  const [articles,setArticles] = useState([])

  useEffect(()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`

   fetch(url).then(res=>res.json()).then(data=>setArticles(data.articles))
    
  },[category])

  return (
    <div>
      <h2 className='text-center'>Latest <span className='badge bg-danger text-light my-3'>News</span></h2>
      {
        articles.map((news,index)=>{
          if(news.urlToImage != null){
         
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
          }
          
        })
      }
    </div>
  )
}

export default NewsBoard