// "use client";
import React from 'react'

const ServiceDetails = ({params}) => {
    const {id} = params;
    const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Build responsive and high-performance websites using modern web technologies.",
      icon: "🌐",
      price: "$1500",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "Design user-friendly interfaces with a focus on usability and accessibility.",
      icon: "🎨",
      price: "$1000",
    },
    {
      id: 3,
      title: "SEO Optimization",
      description:
        "Improve your site's ranking on search engines with advanced SEO strategies.",
      icon: "🚀",
      price: "$700",
    },
    {
      id: 4,
      title: "Mobile App Development",
      description:
        "Create scalable mobile apps for iOS and Android using React Native or Flutter.",
      icon: "📱",
      price: "$2000",
    },
  ];
  return (
    <>
    <div>ServiceDetails</div>
    <p className='text-3xl'>Id : {id}</p>
    </>
    
  )
}

export default ServiceDetails;