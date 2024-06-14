import React from 'react'

const Newsitem =(props)=> {
  
 
    let {title,description,imageurl,newsurl,author,date,source}=props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{
            display:"flex",
            justifyContent:"center",
            position:"absolute",
            right:"0"

          }}>
            <span className='badge rounded-pill bg-danger'>{source}</span>
            </div>
          <img className="card-img-top " src={!imageurl?"https://c8.alamy.com/comp/PR1RFW/news-logo-illustration-PR1RFW.jpg":imageurl} alt=".."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              
              <p className="card-text">{description}</p>
              <p class="card-text"><small class="text-muted">by {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
              <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-primary btn-dark">Read more</a>
            </div>
        </div>

      </div>
    )
  
}

export default Newsitem
