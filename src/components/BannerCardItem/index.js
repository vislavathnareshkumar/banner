// Write your code here.

import './index.css'

const BannerItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails

  return (
    <li className={`${className} banner-card`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button type="button" className="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerItem
