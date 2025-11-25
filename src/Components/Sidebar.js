import { useState } from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [historyOpen, setHistoryOpen] = useState(false);
    const [basicsOpen, setBasicsOpen] = useState(false);
    const [championshipsOpen, setChampionshipsOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }
    
    const toggleSection = (section) => {
        if (section === 'history') {
            setHistoryOpen(!historyOpen);
        } else if (section === 'basics') {
            setBasicsOpen(!basicsOpen);
        } else if (section === 'championships') {
            setChampionshipsOpen(!championshipsOpen);
        }
    };
    
    const historyObjects = [
        { name: 'Payment', link: '/api/payment' },
        { name: 'Users', link: '/api/users' },
        { name: 'Matches', link: '/api/matches' },
    ];
    const basicsObjects = [
        { name: 'Payment', link: '/api/payment' },
        { name: 'Users', link: '/api/users' },
        { name: 'Matches', link: '/api/matches' },
    ];
    const championshipsObjects = [
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
                            onClick={() => toggleSection('history')}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="d-flex align-items-center">
                                <span className="text-uppercase small fw-bold">HISTORY</span>
                            </div>
                            <div className={`chevron-icon ${historyOpen ? 'rotated' : ''}`}>
                                <ChevronDown size={18} />
                            </div>
                        </div>
                        
                        <div 
                            className={`collapse-content ${historyOpen ? 'open' : 'closed'}`}
                            style={{
                                maxHeight: historyOpen ? `${historyObjects.length * 50}px` : '0px',
                                opacity: historyOpen ? 1 : 0,
                                transition: 'max-height 0.4s ease-in-out, opacity 0.3s ease-in-out'
                            }}
                        >
                            <div className="ms-3">
                                {historyObjects.map((obj) => (
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

                        <div 
                            className="d-flex align-items-center justify-content-between mb-2 p-2 rounded sidebar-item"
                            role="button"
                            onClick={() => toggleSection('basics')}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="d-flex align-items-center">
                                <span className="text-uppercase small fw-bold">BASICS</span>
                            </div>
                            <div className={`chevron-icon ${basicsOpen ? 'rotated' : ''}`}>
                                <ChevronDown size={18} />
                            </div>
                        </div>
                        
                        <div 
                            className={`collapse-content ${basicsOpen ? 'open' : 'closed'}`}
                            style={{
                                maxHeight: basicsOpen ? `${basicsObjects.length * 50}px` : '0px',
                                opacity: basicsOpen ? 1 : 0,
                                transition: 'max-height 0.4s ease-in-out, opacity 0.3s ease-in-out'
                            }}
                        >
                            <div className="ms-3">
                                {basicsObjects.map((obj) => (
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
                        <div 
                            className="d-flex align-items-center justify-content-between mb-2 p-2 rounded sidebar-item"
                            role="button"
                            onClick={() => toggleSection('championships')}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="d-flex align-items-center">
                                <span className="text-uppercase small fw-bold">CHAMPIONSHIPS</span>
                            </div>
                            <div className={`chevron-icon ${championshipsOpen ? 'rotated' : ''}`}>
                                <ChevronDown size={18} />
                            </div>
                        </div>
                        
                        <div 
                            className={`collapse-content ${championshipsOpen ? 'open' : 'closed'}`}
                            style={{
                                maxHeight: championshipsOpen ? `${championshipsObjects.length * 50}px` : '0px',
                                opacity: championshipsOpen ? 1 : 0,
                                transition: 'max-height 0.4s ease-in-out, opacity 0.3s ease-in-out'
                            }}
                        >
                            <div className="ms-3">
                                {championshipsObjects.map((obj) => (
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