import React from 'react';
// import image1 from "../../assets/sports_academy_1.jpg";
// import image2 from "../../assets/sports_academy_2.jpg";
// import image3 from "../../assets/sports_academy_3.jpg";
import Slider from "react-slick";

const Testimonials = [
    {
        id: 1,
        // img: image1,
        name: "Simran",
        description: 'High quality coaching and excellent facilities.'
    },
    {
        id: 2,
        // img: image2,
        name: "Ananya",
        description: 'Best training programs and dedicated trainers.'
    },
    {
        id: 3,
        // img: image3,
        name: "Sumedha",
        description: 'Good mentorship and supportive community.'
    },
];

const Testimonial = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='py-10 flex justify-center mt-10 bg-black'>
            <div className='container'>
                {/* Header Section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className='text-green-500 py-1'>What Our Athletes Say</p>
                    <h1 data-aos="fade-up" className="text-2xl sm:text-3xl font-bold text-green-500">Testimonials</h1>
                    <p data-aos="fade-up" className='text-sm text-gray-300 mt-2'>                        Hear from our athletes who have trained at our sports academy and experienced top-notch coaching and support. Their feedback speaks for itself!
                    </p>
                </div>
                {/* Testimonial Card Section */}
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {Testimonials.map((data) => (
                            <div key={data.id} className='p-4'>
                                <div className='flex flex-col gap-4 shadow-lg py-8 px-6 bg-green-800 rounded-xl relative border border-green-600'>
                                    <div className='text-center'>
                                        <p className='text-sm text-gray-200 mb-2'>{data.description}</p>
                                        <h1 className='text-xl font-bold text-green-300'>{data.name}</h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
