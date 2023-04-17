import { useState } from 'react';

const Collapsible = ([title, content]) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    function toggleCollapse() {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <div onClick={toggleCollapse}>           
        {isCollapsed ? (
            <div>
                <div className='collapsibleTitle'>{title}</div>
                <div className='collapsibleContent'>{content}</div>
            </div>
        ) : (
            <div>
                <div className='collapsibleTitle'>{title}</div>
            </div>
        )}
        </div>
    );
}

export default Collapsible;


  

  


