import React,{useState,useEffect} from 'react'

const Select=[
    {
        index:0,
        id:"the-times-of-india",
    },
    {
        index:1,
        id:"the-irish-times",
    },
    {
        index:2,
        id:"australian-financial-review",
    },
    {
        index:3,
        id:"reuters",
    },
    {
        index:4,
        id:"bloomberg",
    },
    {
        index:5,
        id:"business-insider",
    },
    {
        index:6,
        id:"independent",
    },
    {
        index:7,
        id:"newsweek",
    },
    {
        index:8,
        id:"techcrunch",
    },
    {
        index:9,
        id:"politico",
    },
    {
        index:10,
        id:"the-washington-post",
    },
    {
        index:11,
        id:"fortune",
    },
    {
        index:13,
        id:"engadget",
    },
] 





const NewsCard = () => {

    const[userselect,setuserselect]=useState("");
    const[userdata,setuserdata]=useState([]);
    // let source = "Choose a News Option";
    const apiKey = "d093053d72bc40248998159804e0e67d";
    const url=`https://newsapi.org/v2/top-headlines?sources=${userselect}&apiKey=${apiKey}`;
    const addselect= (e)=>{
        const output=Select[e.target.selectedIndex-1].id;
        console.log(output);
        if(output!=="" && output!=="Choose a News Option")
        {
            setuserselect(output);
            newsfetch();
        }
        
    }
    
    const newsfetch=async ()=>{
        try{
                const res=await fetch(url);
                const data=await res.json();
                console.log(data);
                if(data.status==="ok")
                {
                    setuserdata(data.articles);
                }
                
        }
        catch(error)
        {
            console.log(error);
        }
    }

useEffect(() => {
     newsfetch();
}, [userselect]);
  return (
    <>
        <div className="newshead border border-info border-2 m-4" id="getnews">
        <h2 className=" text-center newsheadh ">LATEST NEWS</h2>
        <div className="input_div text-center">
            <label htmlFor="news" id="labelh">Choose a News Source:</label>
            <select name="news" id="news" onClick={addselect} className="selectcss" style={{"backgroundColor":"orange"}}>
                <option value="">Choose a News Option </option>
                <option value="the-times-of-india" onClick={addselect}>the-times-of-india </option>       
                <option value="the-irish-times">the-irish-times </option>
                <option value="australian-financial-review">C]australian-financial-review</option>
                <option value="reuters">reuters</option>
                <option value="bloomberg">bloomberg </option>
                <option value="business-insider">business-insider </option>
                <option value="independent">independent </option>
                <option value="newsweek">newsweek </option>
                <option value="techcrunch">techcrunch</option>
            </select>         
        </div>
        <div className="container border border-1 border-info" id="contain">
        {userdata.map((val,index)=>{
            return(
                <div className="card" key={index}>
            <h2 className="headline">{val.source.name} </h2>
            <h4 className="title"> Title : {val.title} </h4>
            <div className="imgdes d-flex">
                <figure  className="image">
                    <img className="image" src={val.urlToImage} alt="image1" />
                </figure>
                <div className="desc border border-2 border-warning">
                    {val.description}
                </div>
            </div>
            <div className="authpub d-flex flex-column">
                <h3 className="author">Author : {val.author} </h3>
                <h2 className="publish"> Published At : {val.publishedAt} </h2>
            </div>
            <div className="read"><a className="reada" href={val.url}>Read More</a></div>
        </div>
            
            )
        })}
        </div>
    </div>
    </>
  )
}

export default NewsCard