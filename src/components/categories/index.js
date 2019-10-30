import React, { Fragment, Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Box } from 'rbx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../styles/categories";
import slickSetting from "./slick_settings";

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
          categories: [
            {
              'title': 'japonesa',
              'image_url': 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
            },
            {
              'title': 'arabe',
              'image_url': 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
            },
            {
              'title': 'vegana',
              'image_url': 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
            },
            {
              'title': 'italiana',
              'image_url': 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
            },
            {
              'title': 'peruana',
              'image_url': 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
            },
            {
              'title': 'chinesa',
              'image_url': 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
            }
          ]
        }
      }

    render() {
        return (
            <Fragment>
                <h3 className="title is-size-4">Categorias</h3>
                <Box>
                    <Slider {...slickSetting}>
                        {this.state.categories.map(category => {
                            return (
                                <Link to={`/restaurants?category=${category.title}`}>
                                    <div className="slider-item">
                                        <img src={category.image_url} alt="new" />
                                        <span>{category.title}</span>
                                    </div>
                                </Link>
                            )
                        })}
                    </Slider>
                </Box>
            </Fragment>
        )
    }    
}

export default Categories;