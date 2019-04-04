import React, { Component } from 'react';
import {getProduct} from '../services/productService'

class ProductDetail extends Component {
  state={product:{
      title: " ",
  description: "",
  thumbnailUrl: "",
  images: [
  
  ],
  price: 0,
  colors: [
  
  ],
  category: 0
          }
        }
    async componentDidMount() {
        try {
            const productId = this.props.match.params.id;
            const  {data:product}  = await getProduct(productId);
          
            this.setState({ product });
        } catch (ex) {
            if (ex.response && ex.response.status === 404)
              return this.props.history.replace("/not-found");
        }
    }
    render() { 
        const {product} = this.state;
        console.log(this.state.product);
        
        return (
            <div className="row">
                <div className="col-md-4">
                <img className="img-thumbnail" src={product.thumbnailUrl}  alt={product.title} />
                {product.colors.map((color,index)=>(
                <span key ={index} className="badge" >{color}</span>
                )

                )}
                </div>    
                <div className="col-md-8">
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                </div>    
            </div>
        );
    }
}
 
export default ProductDetail;