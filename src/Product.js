import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Product = (props) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  const { productID } = useParams();

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`/api/airtable?id=${productID}`);
      setProduct(data);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="section section-center">
        <h2>Loading...</h2>
      </section>
    );
  }

  const { name, url, price, description } = product;
  return (
    <section className="section section-center">
      <Link to="/" className="link">
        back home
      </Link>
      <div>
        <div className="title">
          <h2>{name}</h2>
          <div className="title-underline"></div>
        </div>
        <article className="single-product">
          <img class="single-product-img" src={url} alt={name} />
          <div class="product-info">
            <h5>{name}</h5>
            <h5 class="price">£{price}</h5>
            <p class="desc">{description}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

Product.propTypes = {};

export default Product;
