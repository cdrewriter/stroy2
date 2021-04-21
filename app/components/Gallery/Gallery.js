import React from 'react';

export const BlogCardDemo = React.memo(function BlogCard({ data }) {
  
  
    
   {/*const {      id,
      name,
      photos,
      items,
      categories,
      description,
      pricevalue,
      isEnabled,
      image,
      netweight,
      engine,
      chassis,
    } = data; */}
    function inHtml() {
      return <div dangerouslySetInnerHTML={{ __html: `${description}` }} />;
    }
    return (
<div>
    <img src={data} />
</div>

    );
  });
  
  export default BlogCardDemo;
  