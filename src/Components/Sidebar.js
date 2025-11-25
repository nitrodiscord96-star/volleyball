import { useState } from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [apiReferenceOpen, setApiReferenceOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }
    
    const toggleSection = (section) => {
        if (section === 'apiReference') {
            setApiReferenceOpen(!apiReferenceOpen);
        }
    };
    
    const apiReferenceObjects = [
        { name: 'Payment', link: '/api/payment' },
        { name: 'Users', link: '/api/users' },
        { name: 'Matches', link: '/api/matches' },
    ];

    return (
        <>
            <style>{`
                .sidebar {
                    transition: width 0.3s ease, padding 0.3s ease;
                }

                .sidebar-content {
                    transition: opacity 0.2s ease;
                }

                .sidebar-content.hidden {
                    opacity: 0;
                    pointer-events: none;
                }

                .collapse-content {
                    overflow: hidden;
                }
                
                .sidebar-item {
                    transition: background-color 0.2s ease;
                }
                
                .sidebar-item:hover {
                    background-color: rgba(255, 255, 255, 0.1);
                }
                
                .chevron-icon {
                    transition: transform 0.3s ease;
                }
                
                .chevron-icon.rotated {
                    transform: rotate(180deg);
                }

                .menu-icon-center {
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    padding-top: 1rem;
                }
            `}</style>
            
            <div 
                className="sidebar bg-dark text-white" 
                style={{ 
                    width: sidebarOpen ? '280px' : '60px',
                    position: 'fixed', 
                    left: 0, 
                    top: '56px',
                    bottom: 0,
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    zIndex: 100,
                    padding: sidebarOpen ? '1rem' : '0.5rem'
                }}
            >
                {/* Menu Icon */}
                {sidebarOpen ? (
                    <div className="d-flex justify-content-end mb-3">
                        <Menu 
                            onClick={toggleSidebar} 
                            className="mt-2" 
                            style={{ cursor: 'pointer' }} 
                        />
                    </div>
                ) : (
                    <div className="menu-icon-center">
                        <Menu 
                            onClick={toggleSidebar} 
                            size={24} 
                            style={{ cursor: 'pointer' }} 
                        />
                    </div>
                )}

                {/* Sidebar Content */}
                <div className={`sidebar-content ${!sidebarOpen ? 'hidden' : ''}`}>
                    <div className="mb-3">
                        <div 
                            className="d-flex align-items-center justify-content-between mb-2 p-2 rounded sidebar-item"
                            role="button"
                            onClick={() => toggleSection('apiReference')}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="d-flex align-items-center">
                                <i className="bi bi-gear me-2"></i>
                                <span className="text-uppercase small fw-bold">API REFERENCE</span>
                            </div>
                            <div className={`chevron-icon ${apiReferenceOpen ? 'rotated' : ''}`}>
                                <ChevronDown size={18} />
                            </div>
                        </div>
                        
                        <div 
                            className={`collapse-content ${apiReferenceOpen ? 'open' : 'closed'}`}
                            style={{
                                maxHeight: apiReferenceOpen ? `${apiReferenceObjects.length * 50}px` : '0px',
                                opacity: apiReferenceOpen ? 1 : 0,
                                transition: 'max-height 0.4s ease-in-out, opacity 0.3s ease-in-out'
                            }}
                        >
                            <div className="ms-3">
                                {apiReferenceObjects.map((obj) => (
                                    <div
                                        key={obj.name}
                                        className="d-flex align-items-center justify-content-between text-white p-2 rounded mb-1 sidebar-item"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => window.open(obj.link, '_blank')}
                                    >
                                        <span>{obj.name}</span>
                                        <i className="bi bi-box-arrow-up-right" style={{ fontSize: '0.8rem' }}></i>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;