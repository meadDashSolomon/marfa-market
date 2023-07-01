import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { useState } from 'react';

const ProductOverview = ({description, slogan}) => {
  const [showFbModal, setShowFbModal] = useState(false);
  const [showTwitterModal, setShowTwitterModal] = useState(false);
  const [showPinterestModal, setShowPinterestModal] = useState(false);

const toggleFbModal = () => {
  setShowFbModal(!showFbModal);
};

const toggleTwitterModal = () => {
  setShowTwitterModal(!showTwitterModal);
};

const togglePinterestModal = () => {
  setShowPinterestModal(!showPinterestModal);
};

const ShareFbModal = () => {
  return (
    <div className="fbModal">
      <div className="fbModal-content">
        <h2>Share this product</h2>
        {/* blank attribute opens link in new tab */}
        <a href="https://www.facebook.com/sharer/sharer.php?u=example.org" target="_blank">Share on Facebook</a>
        <button onClick={toggleFbModal}>Close</button>
      </div>
    </div>
  );
};


const ShareTwitterModal = () => {
  return (
    <div className="twitterModal">
      <div className="twitterModal-content">
        <h2>Share this product</h2>
        <a href="https://twitter.com/share?url=example.org&text=Check%20this%20out!" target="_blank">Share on Twitter</a>
        <button onClick={toggleTwitterModal}>Close</button>
      </div>
    </div>
  );
};

const SharePinterestModal = () => {
  return (
    <div className="pinterestModal">
      <div className="pinterestModal-content">
        <h2>Share this product</h2>
        <a href="http://pinterest.com/pin/create/button/?url=example.org" target="_blank">Share on Pinterest</a>
        <button onClick={togglePinterestModal}>Close</button>
      </div>
    </div>
  );
};

  return (
    <div className="productOverviewContainer">
      <div className="overviewLeft">
        <h6>{slogan}</h6>
        <p>{description}</p>
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
        <div className="icon" onClick={toggleFbModal}>
          <FacebookIcon />
        </div>
        <div className="icon" onClick={toggleTwitterModal}>
          <TwitterIcon />
        </div>
        <div className="icon" onClick={togglePinterestModal}>
          <PinterestIcon />
        </div>
      </div>
      {showFbModal && <ShareFbModal />}
      {showTwitterModal && <ShareTwitterModal />}
      {showPinterestModal && <SharePinterestModal />}
    </div>
  )
}

export default ProductOverview;