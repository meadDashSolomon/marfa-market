import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const ProductOverview = ({description, slogan}) => {
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
        <FacebookIcon />
        <TwitterIcon />
        <PinterestIcon />
      </div>
    </div>
  )
}

export default ProductOverview;