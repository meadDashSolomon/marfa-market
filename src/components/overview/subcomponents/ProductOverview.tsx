// @ts-ignore
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const ProductOverview = () => {
  return (
    <div className="ProductOverviewContainer">
      <div className="overviewLeft">
        <h6>Slogan</h6>
        <p>Lorem ipsum</p>
      </div>
      <div className="overviewCenter">
        <div className="">
          <img src="" alt="" />
          <p>GMO Free</p>
        </div>
        <div className="">
          <img src="" alt="" />
          <p>All the GMOs</p>
        </div>
        <div className="">
          <img src="" alt="" />
          <p>Made up txt</p>
        </div>
      </div>
      <div className="share">
        <FacebookIcon />
        <TwitterIcon />
        <PinterestIcon />
      </div>
    </div>
  )
}

export default ProductOverview;