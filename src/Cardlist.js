import Card from './Card';
import Carousel from 'react-bootstrap/Carousel';

const Cardlist = () => {
    const courses = [
        {
            "src": "https://gigacourse.com/wp-content/uploads/2019/10/1243546534.jpg",
            "text": "Learn Python: The Complete Python Programming Course",
            "creator": "Avinash Jain, The Codex",
            "price": "$84.99"
        },
        {
            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIHYM44p36euODJMOiGZcukW2H3OfwxM0rw&usqp=CAU",
            "text": "Learning Python for Data Analysis ans Visualisation",
            "creator": "Jose Portilla",
            "price": "$84.99"
        },
        {
            "src": "https://downloadfreecourse.com/uploads/images/2020/webp/image_750x_5ec23304b1a48.webp",
            "text": "Python for Beginners - Learn Programming from scratch",
            "creator": "Edwin Diaz, Coding Faculty Solutions",
            "price": "$84.99"
        },
        {
            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBAqvBomYzOuUy37LZZZvNe0hh1MIdraldrg&usqp=CAU",
            "text": "Learn Python: Python for Beginners",
            "creator": "Abrar Hussain",
            "price": "$29.99"
        },
        {
            "src": "https://downloadfreecourse.com/uploads/images/2020/webp/image_750x_5ec233f983dc8.webp",
            "text": "Python Beyond the Basics - Object-Oriented Programming",
            "creator": "Infinite Skills",
            "price": "$49.99"
        }
    ];
    let num = courses.length;
    return (
        <div className='container'>
            <h3 className='text-start'>Expand your career opportunities with Python</h3>
            <p className='text-start'>Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful
                language.
                Its
                simple syntax and readability makes Python perfect for Flask, Django, data science, and machine
                learning.
                You’ll learn how to build everything from games to sites to apps. Choose from a range of courses
                that
                will
                appeal to both beginners and advanced developers alike.</p>

            <Carousel>
                <Carousel.Item>
                    <div className="row">
                        {(() => {
                            let td = [];
                            for (let i = 0; i < 3; i++) {
                                td.push(<Card courseName={courses[i]}></Card>);
                            }
                            return td;
                        })()}
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row">
                        {(() => {
                            let td = [];
                            for (let i = 2; i < num; i++) {
                                td.push(<Card courseName={courses[i]}></Card>);
                            }
                            return td;
                        })()}
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Cardlist;