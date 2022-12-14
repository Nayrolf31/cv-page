import './Skills.css';
import '../Card.css'

import { FaStar, FaRegStar } from 'react-icons/fa';

const Skills = () => {
    return (
        <div className='Card' id='Skills'>
            <h1 className='Card_title'>Skills</h1>
            <p className='Card_Description'>
                <ul>
                    <li>HTML
                        <div className='Rating'>
                        <FaStar className="icon-reviews" />
                        <FaStar className="icon-reviews" />
                        <FaStar className="icon-reviews" />
                        <FaStar className="icon-reviews" />
                        <FaRegStar className="icon-reviews" />
                        </div>
                    </li>
                    <li>CSS
                    <div className='Rating'>
                        <FaStar className="icon-reviews" />
                        <FaStar className="icon-reviews" />
                        <FaStar className="icon-reviews" />
                        <FaStar className="icon-reviews" />
                        <FaRegStar className="icon-reviews" />
                        </div>
                    </li>
                    <li>Javascript
                    <div className='Rating'>
                        <FaStar className="icon-reviews" />
                        <FaStar className="icon-reviews" />
                        <FaStar className="icon-reviews" />
                        <FaRegStar className="icon-reviews" />
                        <FaRegStar className="icon-reviews" />
                        </div>
                    </li>
                    <li>React
                    <div className='Rating'>
                        <FaStar className="icon-reviews" />
                        <FaStar className="icon-reviews" />
                        <FaStar className="icon-reviews" />
                        <FaRegStar className="icon-reviews" />
                        <FaRegStar className="icon-reviews" />
                        </div>
                    </li>
                    <li>Nodejs
                    <div className='Rating'>
                        <FaStar className="icon-reviews" />
                        <FaStar className="icon-reviews" />
                        <FaStar className="icon-reviews" />
                        <FaRegStar className="icon-reviews" />
                        <FaRegStar className="icon-reviews" />
                        </div>
                    </li>
                    <li>Procreate
                    <div className='Rating'>
                        <FaStar className="icon-reviews" />
                        <FaStar className="icon-reviews" />
                        <FaStar className="icon-reviews" />
                        <FaStar className="icon-reviews" />
                        <FaRegStar className="icon-reviews" />
                        </div>
                    </li>
                </ul>
            </p>
        </div>

    )
}

export default Skills