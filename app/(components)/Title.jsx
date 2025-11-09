import React from 'react'

function Title({ title1, title2, titleStyle, paraStyle }) {
  return (
    <div className={titleStyle}>
      <h2 className={titleStyle}>
        {title1}
        <span className="text-destructive">{title2}</span>
      </h2>
      <p className={paraStyle}>
        Discover the best deals on top-quality products, Crafted <br />
        everyday experience
      </p>
    </div>
  );
}


export default Title;
