import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



export default function CitiesCard() {
    const [cities, setCities] = useState([])

    console.log(cities)
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(process.env.BACKEND_URL + "/api/cities");
            const data = await res.json();
            setCities(data);
        }
        fetchData();
    }, []);



    return (
      <div className="d-flex col-10 overflow-auto mt-5 mx-auto" >            
            
            {cities.length ? cities.map((city, index) => (
                <div className="card col-1" style={{ width: "30rem" }}>
                    {console.log(city.name, "HERE")}
                    <img src={city.photo} style={{height: "15rem"}} className="card-img-top" />
                    <div className="card-body d-flex justify-content-between">
                        <div className="card-body-left">
                        <h5 
                         className="card-title">
                            {city.name}
                        </h5>
                        <h5 
                         className="card-title">
                            {city.nation}
                        </h5>
                        </div>
                        <div className="cardBottom">
                        <Link
                                to={`/cities_description/` + city.id}
                                className="btn btn-outline-primary btn-outline-starwars-1"
                            >
                                Learn More!
                            </Link>
                            {/* <button
              onClick={(e) => handleClick(e)}
              className={activeFav ? "fas fa-heart" : "far fa-heart"}
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
              }}
            ></button> */}
                        </div>
                    </div>
                </div>
            )) : null}
        </div>
    )
  }