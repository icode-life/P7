import { useState } from 'react';

const Collapsible = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    function toggleCollapse() {
        setIsCollapsed(isCollapsed);
    }

    return (
        <div>
        <button onClick={toggleCollapse}>
            {isCollapsed ? "Expand" : "Collapse"}
        </button>

        {isCollapsed ? null : (
            <div>
            <p>This is the collapsible content!</p>
            </div>
        )}
        </div>
    );
}

export default Collapsible;


  

  


