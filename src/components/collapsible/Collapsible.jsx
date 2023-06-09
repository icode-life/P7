import { useState } from 'react';
import './Collapsible.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


const Collapsible = ({title, content, contentType, collapsibleType}) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    function toggleCollapse() {
        setIsCollapsed(!isCollapsed);
    }
    
    return (
        <div onClick={() => toggleCollapse()} className='sizeMgmt'>           
        {isCollapsed 
            ? ( contentType === 'text'
                ?   (<div>
                        <div className={ collapsibleType === 'medium' ? 'collapsibleTitle' : 'collapsibleTitleBig'}>
                            <div>{title}</div>
                            <FontAwesomeIcon icon={faChevronUp} />
                        </div>
                        <div className={ collapsibleType === 'medium' ? 'collapsibleContent' : 'collapsibleContentBig'}>{content}</div>
                    </div>)
                :   (<div>
                        <div className={ collapsibleType === 'medium' ? 'collapsibleTitle' : 'collapsibleTitleBig'}>
                            <div>{title}</div>
                            <FontAwesomeIcon icon={faChevronUp} />
                        </div>
                        <div className={ collapsibleType === 'medium' ? 'collapsibleContent' : 'collapsibleContentBig'}>
                            <ul className='wrap'>
                                {content.map((li) => (<li key={li}>{li}</li>))}
                            </ul>
                        </div>
                    </div>

                ) )
            : ( <div>
                    <div className={ collapsibleType === 'medium' ? 'collapsibleTitle' : 'collapsibleTitleBig'}>
                        <div>{title}</div>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                </div> )
        }
        </div>
    );
}

export default Collapsible;


  

  


