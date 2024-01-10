import { useState } from "react"

export function Container({title, children}) {
    const [collapsed, setCollapsed] = useState(false)

    function handleToggleCollapse(){
        setCollapsed((t) => !t)
    }
    return <div className="app">
        <button className="title" onClick={handleToggleCollapse}>{title}</button>
        {!collapsed && <div className="appContent">{children}</div>}
    </div>
    
    
}