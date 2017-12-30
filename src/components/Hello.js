import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="center">
    <h1>Hello!</h1>
    <span>Look this awesome image or go </span>
    <Link to="/">back</Link>
    <img src="../../assets/img/big_img.jpeg" alt=""/>
  </div>
);
