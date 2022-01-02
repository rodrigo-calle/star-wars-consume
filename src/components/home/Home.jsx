import React, { useEffect, useState } from 'react';

import './Home.css';
import Card from '../card/Card';
import Loader from '../loader/Loader';
import { usePaginationContext } from '../../context/PaginationContext';

const Home = () => {
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(false);
    const { pagination ,setPagination } = usePaginationContext();
  
    useEffect(()=> {

        setLoading(true);

        fetch(`https://swapi.dev/api/people/?page=${pagination}`)
         .then((res) => res.json())
         .then((data) => setInfo(data.results))
         .catch((error)=> console.log(error))
         .finally(() => setLoading(false));
    }, [pagination])

    if (loading) {
        return <Loader />;
      }

    return(
        <div className="home-body">
          <div className="home-content">
            <img src="/images/swlogo.png" alt="sw"></img>
            <h1>-characters-</h1>
            <div className="cards">

              {info.map((item) => (
                <div className="card-from-home" key={item.name}>
                  <Card info={item} />
                </div>
              ))}

            </div>
          </div>
          <p className="pagination-title">Pagination</p>
    
          <p className="pagination">
            {/* <button 
            className="prev-btn"
            type="button"          
            >
              previus
            </button> */}
                <select onChange={
                    (e)=>{
                      //console.log(e.target.value);
                      setPagination(e.target.value) 
                      document.querySelectorAll('option').forEach((i) => {
                        if(i.index === pagination){
                          
                        }
                      })          
                  }}>
                    <option defaultValue unselectable="true">You are in {pagination} page</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
            {/* <button 
            className="next-btn"
            type="button" >
            onChange={setPagination(pagination+1)}
              next
            </button> */}
          </p>    
            <p className="about">Made by <a className="author" target="_blank" href='https://github.com/rodrigo-calle' rel="noreferrer">Rodrigo Calle</a></p>
        </div>

    );
}

export default Home;