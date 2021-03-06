import React, { Component } from 'react';

export default class Recipe extends Component {
    render() {
        const{
            image_url,
            recipe_id, 
            title,
            source_url,
            publisher
        } = this.props.recipe;

        const {handleDetails, handleTitle} = this.props;

        return (
            <React.Fragment>
                <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <div className="card rounded cards">
                    <img src={image_url}
                    className="img-card-top rounded-top"
                    style={{height:"14rem"}}
                    alt="recipe" />

                    <div className="card-body text-capitalize">
                        <h6>{handleTitle(title)}</h6>
                        <h6 className="text-warning text-slanted">{publisher}</h6>
                    </div>

                    <div className="card-footer rounded-bottom">
                        <div className="buttons d-flex justify-content-center">
                            <button 
                                type="button"
                                className="btn btn-primary btndetails text-capitalize"
                                onClick={() => handleDetails(0, recipe_id)}
                            >
                            Details
                            </button>
                            <a
                            href={source_url}
                            className="btn btn-success btnurl mx-2 text-capitalize ml-5"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                Recipe
                            </a>
                        </div>
                        
                    </div>

                </div>
                </div>
            </React.Fragment>
        )
    }
}
