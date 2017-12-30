import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="center">
    <h1>Bye!</h1>
    <span>Look this! or go </span>
    <Link to="/">back</Link>
    <img src="../../assets/img/small_img.jpeg" alt=""/>
  </div>
);
