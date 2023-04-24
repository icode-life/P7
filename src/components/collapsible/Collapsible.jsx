import { useState } from 'react';
import './Collapsible.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


const Collapsible = ({title, content, contentType}) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    function toggleCollapse() {
        setIsCollapsed(!isCollapsed);
    }

    console.log(content);

    return (
        <div onClick={() => toggleCollapse()}>           
        {isCollapsed 
            ? ( contentType === 'text'
                ?   (<div>
                        <div className='collapsibleTitle'>
                            <div>{title}</div>
                            <FontAwesomeIcon icon={faChevronUp} />
                        </div>
                        <div className='collapsibleContent'>{content}</div>
                    </div>)
                :   (<div>
                        <div className='collapsibleTitle'>
                            <div>{title}</div>
                            <FontAwesomeIcon icon={faChevronUp} />
                        </div>
                        <div className='collapsibleContent'>
                            <ul className='wrap'>
                                {content.map((li) => (<li key={li}>{li}</li>))}
                            </ul>
                        </div>
                    </div>

                ) )
            : ( <div>
                    <div className='collapsibleTitle'>
                        <div>{title}</div>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                </div> )
        }
        </div>
    );
}

export default Collapsible;


  

  


