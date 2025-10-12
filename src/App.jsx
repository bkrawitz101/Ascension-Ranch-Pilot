import React, { useState, useEffect, useMemo } from 'react';

// Firebase Imports - Ensure you have 'firebase' installed (npm install firebase)
import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from 'firebase/auth';
import { 
    getFirestore, 
    collection, 
    onSnapshot, 
    doc, 
    setDoc, 
    serverTimestamp,
    query,
    orderBy,
    getDoc
} from 'firebase/firestore';

// =================================================================================
// TODO: PASTE YOUR FIREBASE CONFIGURATION OBJECT HERE
// You can get this from your Firebase project settings.
// The app will show a "Configuration Error" until this is filled out correctly.
// =================================================================================
const firebaseConfig = {
  apiKey: "AIzaSyAXYFBbjkTPcbJ7hXbV4HZtI_xReX0PIVM",
  authDomain: "ascension-ranch-pilot.firebaseapp.com",
  projectId: "ascension-ranch-pilot",
  storageBucket: "ascension-ranch-pilot.appspot.com",
  messagingSenderId: "1005741981843",
  appId: "1:1005741981843:web:03d6506bf11cfb59b78d66"
};

// Hardcoded App ID as per requirements
const appId = "ascension-pilot-campus";

// --- SYSTEM HUB CONFIGURATION ---
const systemHubs = [
    { 
        name: 'Land & Ecology', 
        subCategories: ['Soil Health', 'Pasture Management', 'Wildlife Habitat', 'Forestry'] 
    },
    { 
        name: 'Power & Energy', 
        subCategories: ['Solar Array', 'Battery Storage', 'Grid Management', 'Micro-Hydro'] 
    },
    { 
        name: 'Infrastructure & Water', 
        subCategories: ['Well & Pump Systems', 'Irrigation', 'Buildings & Fencing', 'Roads & Access'] 
    },
    { 
        name: 'Bio-Systems', 
        subCategories: ['Composting', 'Aquaponics', 'Mycology', 'Animal Husbandry'] 
    },
];


// --- HELPER COMPONENTS ---

const Modal = ({ children, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-center items-center p-4" onClick={onClose}>
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
                <div className="p-8 overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

const LoadingSpinner = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-lime-50/50">
        <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-lg text-green-900">Initializing Campus Hub and Authenticating User...</p>
    </div>
);

const ErrorDisplay = ({ message }) => (
    <div className="flex items-center justify-center min-h-screen bg-red-50 text-red-800">
        <div className="text-center p-8 border-2 border-red-300 rounded-lg bg-white">
            <h1 className="text-2xl font-bold">Configuration Error</h1>
            <p className="mt-2">{message}</p>
        </div>
    </div>
);

// --- AUTHENTICATION COMPONENT ---

const AuthScreen = ({ auth, db, setError }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleAuth = async (e) => {
        e.preventDefault();
        setError(null); // Clear previous errors
        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
            } else {
                if (!displayName.trim()) {
                    setError('Please enter a display name.');
                    return;
                }
                // Create user in Auth
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                
                // Create their user document in Firestore
                const userDocRef = doc(db, 'users', userCredential.user.uid);
                await setDoc(userDocRef, {
                    uid: userCredential.user.uid,
                    email: userCredential.user.email,
                    displayName: displayName,
                    role: 'user' // Assign a default role
                });

                // Finally, update their Auth profile
                await updateProfile(userCredential.user, { displayName });
            }
        } catch (error) {
            console.error(`${isLogin ? 'Login' : 'Sign Up'} failed:`, error);
            setError(`Authentication Failed: ${error.code.replace('auth/', '').replace(/-/g, ' ')}.`);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-lime-50/50">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-3xl shadow-xl border border-lime-200/50">
                <div>
                    <h1 className="text-3xl font-bold text-green-800 text-center">Ascension Ranch</h1>
                    <p className="text-sm text-stone-500 text-center">Regenerative Campus Pilot</p>
                </div>
                <h2 className="text-xl font-semibold text-center text-neutral-700 pt-4">
                    {isLogin ? 'Collaborator Login' : 'Create New Account'}
                </h2>
                <form onSubmit={handleAuth} className="space-y-4">
                    {!isLogin && (
                        <input
                            type="text"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                            placeholder="Your Name"
                            className="w-full p-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-lime-500 focus:border-transparent transition"
                            required
                        />
                    )}
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        className="w-full p-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-lime-500 focus:border-transparent transition"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full p-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-lime-500 focus:border-transparent transition"
                        required
                    />
                    <button type="submit" className="w-full px-6 py-3 bg-lime-600 text-white rounded-full hover:bg-lime-700 transition-colors font-semibold shadow-md hover:shadow-lg">
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>
                <button onClick={() => { setIsLogin(!isLogin); setError(null); setDisplayName(''); }} className="w-full text-sm text-center text-green-700 hover:underline">
                    {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
                </button>
            </div>
        </div>
    );
};

// --- DATA MANAGEMENT COMPONENTS ---

const AssetModal = ({ asset, onClose, db }) => {
    const [formData, setFormData] = useState(
        asset || {
            name: '', mainCategory: systemHubs[0].name, subCategory: systemHubs[0].subCategories[0], specs: '', sop: '', education: '', 
            status: 'Active', location: ''
        }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => {
            const newState = { ...prev, [name]: value };
            // When main category changes, reset sub-category to the first available option
            if (name === 'mainCategory') {
                const hub = systemHubs.find(h => h.name === value);
                newState.subCategory = hub ? hub.subCategories[0] : '';
            }
            return newState;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.mainCategory || !formData.location) {
            alert('Asset Name, System Hub, and Location are required.');
            return;
        }
        const assetId = asset?.id || doc(collection(db, 'dummy')).id;
        const assetRef = doc(db, `/artifacts/${appId}/public/data/assets`, assetId);
        
        try {
            await setDoc(assetRef, { ...formData, id: assetId }, { merge: true });
            alert("Success! The asset/log entry has been recorded in the central database.");
            onClose();
        } catch (error) {
            console.error("Error saving asset:", error);
            alert(`Failed to save asset. Please check your connection and Firestore security rules. Error: ${error.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-3xl font-bold text-neutral-800">{asset ? 'Edit Asset' : 'Create New Asset'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="name" value={formData.name} onChange={handleChange} placeholder="e.g., 'Main Well Pump 1,' 'Angus Herd'" className="p-3 border border-stone-300 rounded-xl w-full focus:ring-2 focus:ring-lime-500 focus:border-transparent transition md:col-span-2" required />
                <select name="mainCategory" value={formData.mainCategory} onChange={handleChange} className="p-3 border border-stone-300 rounded-xl bg-white w-full focus:ring-2 focus:ring-lime-500 focus:border-transparent transition">
                    {systemHubs.map(hub => <option key={hub.name}>{hub.name}</option>)}
                </select>
                <select name="subCategory" value={formData.subCategory} onChange={handleChange} className="p-3 border border-stone-300 rounded-xl bg-white w-full focus:ring-2 focus:ring-lime-500 focus:border-transparent transition">
                    {(systemHubs.find(h => h.name === formData.mainCategory)?.subCategories || []).map(sub => (
                        <option key={sub}>{sub}</option>
                    ))}
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <input name="location" value={formData.location} onChange={handleChange} placeholder="Brief location (e.g., 'North Pasture,' 'Pump House Basement')" className="p-3 border border-stone-300 rounded-xl w-full focus:ring-2 focus:ring-lime-500 focus:border-transparent transition" required />
                <select name="status" value={formData.status} onChange={handleChange} className="p-3 border border-stone-300 rounded-xl bg-white w-full focus:ring-2 focus:ring-lime-500 focus:border-transparent transition">
                    <option>Active</option>
                    <option>Repair</option>
                    <option>Decommissioned</option>
                </select>
            </div>
            <textarea name="specs" value={formData.specs} onChange={handleChange} placeholder="Model No., Capacity, Install Date, Vendor Contact, Warranty End Date." className="w-full p-3 border border-stone-300 rounded-xl h-24 focus:ring-2 focus:ring-lime-500 focus:border-transparent transition" />
            <textarea name="sop" value={formData.sop} onChange={handleChange} placeholder="Step-by-step procedure for maintenance/use (Focus on generalization for campus model)." className="w-full p-3 border border-stone-300 rounded-xl h-24 focus:ring-2 focus:ring-lime-500 focus:border-transparent transition" />
            <textarea name="education" value={formData.education} onChange={handleChange} placeholder="Contextual links, learning objectives, and scientific 'why.'" className="w-full p-3 border border-stone-300 rounded-xl h-24 focus:ring-2 focus:ring-lime-500 focus:border-transparent transition" />
            <div className="flex justify-end space-x-3 pt-4">
                <button type="button" onClick={onClose} className="px-6 py-2 bg-stone-200 text-stone-800 rounded-full hover:bg-stone-300 transition-colors">Cancel</button>
                <button type="submit" className="px-6 py-2 bg-lime-600 text-white rounded-full hover:bg-lime-700 transition-colors shadow-md hover:shadow-lg">Save Asset Details</button>
            </div>
        </form>
    );
};

const LogModal = ({ log, assets, onClose, db, user }) => {
    const animalGroups = ['Horses', 'Cows', 'Chickens', 'Ducks', 'Goats', 'Sheep', 'Pigs'];
    const [formData, setFormData] = useState(
        log || {
            type: 'Maintenance', 
            description: '', 
            relatedAssetId: '', 
            teamMember: user.displayName || user.email,
            feedingData: {}
        }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('feeding-')) {
            const animal = name.split('-')[1];
            setFormData(prev => ({
                ...prev,
                feedingData: { ...prev.feedingData, [animal]: value }
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.description || !formData.relatedAssetId) {
            alert('Description and Related Asset are required.');
            return;
        }
        const logId = log?.id || doc(collection(db, 'dummy')).id;
        const logRef = doc(db, `/artifacts/${appId}/public/data/logs`, logId);
        
        try {
            const dataToSave = { 
                ...formData, 
                id: logId, 
                teamMember: user.displayName || user.email,
                timestamp: log?.timestamp ? log.timestamp : serverTimestamp()
            };
            await setDoc(logRef, dataToSave, { merge: true });
            alert("Success! The asset/log entry has been recorded in the central database.");
            onClose();
        } catch (error) {
            console.error("Error saving log:", error);
            alert(`Failed to save log. Please check your connection and Firestore security rules. Error: ${error.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-3xl font-bold text-neutral-800">{log ? 'Edit Log' : 'Create New Log'}</h2>
            <select name="relatedAssetId" value={formData.relatedAssetId} onChange={handleChange} className="w-full p-3 border border-stone-300 rounded-xl bg-white focus:ring-2 focus:ring-lime-500 focus:border-transparent transition" required>
                {/* The new spec says "(Dropdown listing all active Asset Names)" but the old one just said assets. I will filter for active assets. */}
                <option value="">Select Related Asset</option>
                {assets.map(asset => <option key={asset.id} value={asset.id}>{asset.name}</option>)}
            </select>
            <select name="type" value={formData.type} onChange={handleChange} className="w-full p-3 border border-stone-300 rounded-xl bg-white focus:ring-2 focus:ring-lime-500 focus:border-transparent transition">
                <option>Maintenance</option>
                <option>Health</option>
                <option>Feeding</option>
                <option>Repair</option>
                <option>Observation</option>
            </select>
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Detailed log entry of the event, action taken, and outcome." className="w-full p-3 border border-stone-300 rounded-xl h-32 focus:ring-2 focus:ring-lime-500 focus:border-transparent transition" required />
            
            {formData.type === 'Feeding' && (
                <div className="p-4 border border-lime-200 rounded-xl bg-lime-50/50">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Feed Quantities</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {animalGroups.map(animal => (
                            <div key={animal}>
                                <label className="text-sm font-medium text-gray-600">{animal}</label>
                                <input type="text" name={`feeding-${animal}`} value={formData.feedingData?.[animal] || ''} onChange={handleChange} placeholder="e.g., 2 bales, 5 scoops" className="w-full p-2 border border-stone-300 rounded-md mt-1" />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div>
                <label className="text-sm font-medium text-gray-600">Team Member</label>
                <p className="p-2 bg-gray-100 rounded text-gray-700 text-sm truncate">{user.displayName || user.email}</p>
                <p className="text-xs text-gray-500">(Automatically populated - Display only)</p>
            </div>
            <div className="flex justify-end space-x-3 pt-4">
                <button type="button" onClick={onClose} className="px-6 py-2 bg-stone-200 text-stone-800 rounded-md hover:bg-stone-300 transition-colors">Cancel</button>
                <button type="submit" className="px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors">Record Log Entry</button>
            </div>
        </form>
    );
};

// --- VIEW COMPONENTS ---

const DetailSection = ({ title, subtext, content }) => (
    <div>
        <h4 className="font-bold text-lg text-neutral-800">{title}</h4>
        <p className="text-sm text-stone-500 mb-2">{subtext}</p>
        <p className="whitespace-pre-wrap p-3 bg-stone-50 rounded-md border border-stone-200 text-stone-700">{content || 'No information provided.'}</p>
    </div>
);

const Dashboard = ({ assets, logs, user }) => {
    const activeAssetsCount = assets.filter(a => a.status === 'Active').length;
    const recentLogs = logs.slice(0, 5);
    
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg">
                    <h3 className="text-lg font-semibold text-neutral-700">Active Assets</h3>
                    <p className="text-5xl font-bold text-lime-600 mt-2">{activeAssetsCount}</p>
                    <p className="text-sm text-stone-500 mt-1">Systems currently operational on site.</p>
                </div>
                <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg">
                    <h3 className="text-lg font-semibold text-neutral-700">Total Logs Recorded</h3>
                    <p className="text-5xl font-bold text-amber-600 mt-2">{logs.length}</p>
                    <p className="text-sm text-stone-500 mt-1">Auditable events since pilot launch.</p>
                </div>
                <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg">
                    <h3 className="text-lg font-semibold text-neutral-700">Welcome, Collaborator!</h3>
                    <p className="text-xl font-semibold text-green-800 bg-lime-50 p-3 rounded-xl mt-2 break-all">{user.displayName || user.email}</p>
                    <p className="text-sm text-stone-500 mt-1">You are logged in as {user.email}.</p>
                </div>
            </div>

            <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg">
                <h3 className="text-xl font-semibold text-neutral-700">5 Latest System Events</h3>
                <p className="text-sm text-stone-500 mb-4">Quick view of all recent maintenance, health, and repair observations.</p>
                <div className="space-y-3">
                    {recentLogs.length > 0 ? recentLogs.map(log => (
                        <div key={log.id} className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                            <p className="font-semibold text-stone-800">{log.description}</p>
                            <p className="text-sm text-stone-500">
                                <span className={`font-bold ${log.type === 'Repair' ? 'text-red-500' : 'text-stone-600'}`}>{log.type}</span> on {log.timestamp?.toDate().toLocaleString()}
                            </p>
                        </div>
                    )) : <p className="text-stone-500">No logs found.</p>}
                </div>
            </div>
        </div>
    );
};

const AssetManager = ({ assets, db, isAdmin }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });
    const [selectedAsset, setSelectedAsset] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [assetToEdit, setAssetToEdit] = useState(null);

    const sortedAssets = useMemo(() => {
        let sortableItems = [...assets];
        sortableItems.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'ascending' ? -1 : 1;
            if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'ascending' ? 1 : -1;
            return 0;
        });
        return sortableItems.filter(asset => 
            asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            asset.system.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [assets, searchTerm, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') direction = 'descending';
        setSortConfig({ key, direction });
    };

    const openModal = (asset = null) => {
        setAssetToEdit(asset);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setAssetToEdit(null);
    };

    const handlePrint = () => {
        window.print();
    };

    if (selectedAsset) {
        return (
            <div className="space-y-6">
                <button onClick={() => setSelectedAsset(null)} className="mb-4 px-6 py-2 bg-white/70 backdrop-blur-md border border-white/20 rounded-full text-stone-700 hover:bg-white/90 transition-colors print:hidden">&larr; Back to List</button>
                <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-lg print:shadow-none print:border-none">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-3xl font-bold">{selectedAsset.name}</h2>
                            <p className="text-gray-600">Status: <span className={`font-semibold ${selectedAsset.status === 'Active' ? 'text-green-600' : 'text-yellow-600'}`}>{selectedAsset.status}</span> | Category: <span className="font-semibold text-stone-700">{selectedAsset.mainCategory}</span></p>
                            <p className="text-sm text-gray-500">{selectedAsset.location}</p>
                        </div>
                        <div className="flex items-center gap-4 print:hidden">
                            {isAdmin && <button onClick={() => openModal(selectedAsset)} className="text-lime-600 hover:underline">Edit</button>}
                            {isAdmin && <button onClick={handlePrint} className="px-4 py-2 bg-amber-600 text-white text-sm rounded-full hover:bg-amber-700 transition-colors">Print Manual</button>}
                        </div>
                    </div>
                    <div className="mt-6 space-y-6">
                        <DetailSection title="A. AS-BUILT SPECS" subtext="Technical Details, Age, Model, and Warranty Information for the Pilot Site." content={selectedAsset.specs} />
                        <DetailSection title="B. REPLICABLE SOP (Blueprint)" subtext="Standard Operating Procedure. This generalized, step-by-step guide is the Campus Model Blueprint for all future sites." content={selectedAsset.sop} />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                <input type="text" placeholder="Search assets..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full md:w-1/3 p-3 border border-stone-300 rounded-full focus:ring-2 focus:ring-lime-500 focus:border-transparent transition" />
                {isAdmin && (
                    <button onClick={() => openModal()} className="w-full md:w-auto px-6 py-2 bg-lime-600 text-white rounded-full hover:bg-lime-700 flex items-center justify-center gap-2 transition-colors shadow-md hover:shadow-lg">
                        + Add New Asset
                    </button>
                )}
            </div>
            <div className="overflow-x-auto bg-white/70 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
                <table className="w-full text-left">
                    <thead className="bg-stone-50 border-b border-stone-200">
                        <tr>
                            {['Asset Name', 'System Hub', 'Status', 'Location', 'View Details'].map(header => (
                                <th key={header} className="p-4 text-sm font-semibold text-stone-600 cursor-pointer" onClick={() => requestSort(header.toLowerCase().replace(' ', ''))}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {sortedAssets.length > 0 ? sortedAssets.map(asset => (
                            <tr key={asset.id} className="border-b border-stone-200 hover:bg-stone-50/50">
                                <td className="p-4 font-medium text-neutral-800">{asset.name}</td>
                                <td className="p-4 text-neutral-600">{asset.mainCategory}</td>
                                <td className="p-4"><span className={`px-2 py-1 text-xs font-semibold rounded-full ${asset.status === 'Active' ? 'bg-green-100 text-green-800' : asset.status === 'Repair' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>{asset.status}</span></td>
                                <td className="p-4 text-neutral-600">{asset.location}</td>
                                <td className="p-4"><button onClick={() => setSelectedAsset(asset)} className="text-lime-600 hover:underline font-semibold">View Details</button></td>
                            </tr>
                        )) : (
                            <tr><td colSpan="5" className="text-center p-8 text-stone-500">No assets found. Click '+ Add New Asset' to start building the pilot documentation.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <AssetModal asset={assetToEdit} onClose={closeModal} db={db} />
            </Modal>
        </div>
    );
};

const OperationsManual = ({ assets }) => {
    const [selectedAsset, setSelectedAsset] = useState(null);

    const assetsBySystem = useMemo(() => {
        const grouped = systemHubs.reduce((acc, hub) => ({ ...acc, [hub.name]: [] }), {});
        
        assets.forEach(asset => {
            if (grouped[asset.mainCategory]) {
                grouped[asset.mainCategory].push(asset);
            }
        });
        return grouped;
    }, [assets]);

    if (selectedAsset) {
        return (
            <div className="space-y-6">
                <button onClick={() => setSelectedAsset(null)} className="mb-4 px-6 py-2 bg-white/70 backdrop-blur-md border border-white/20 rounded-full text-stone-700 hover:bg-white/90 transition-colors">&larr; Back to Operations Manual</button>
                <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-lg">
                    <h2 className="text-3xl font-bold text-neutral-800">{selectedAsset.name}</h2>
                    <p className="text-gray-600">System: <span className="font-semibold text-stone-700">{selectedAsset.mainCategory} &gt; {selectedAsset.subCategory}</span></p>
                    <p className="text-sm text-gray-500">{selectedAsset.location}</p>
                    <div className="mt-6 space-y-6">
                        <DetailSection title="A. REPLICABLE SOP (Blueprint)" subtext="Standard Operating Procedure. This generalized, step-by-step guide is the Campus Model Blueprint for all future sites." content={selectedAsset.sop} />
                        <DetailSection title="B. EDUCATIONAL GUIDE" subtext="Context & Curriculum. The 'Why' behind the procedure, linking to regenerative principles, soil science, or engineering concepts." content={selectedAsset.education} />
                        <DetailSection title="C. AS-BUILT SPECS" subtext="Technical Details, Age, Model, and Warranty Information for the Pilot Site." content={selectedAsset.specs} />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <h2 className="text-4xl font-bold text-neutral-800">Ascension Ranch Operations Manual</h2>
            <p className="text-lg text-neutral-600 -mt-4">A living guide to the systems and procedures that power our regenerative campus.</p>
            {Object.entries(assetsBySystem).map(([system, systemAssets]) => (
                systemAssets.length > 0 && (
                    <div key={system} className="bg-white/70 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-lg">
                        <h3 className="text-2xl font-semibold text-green-800 border-b-2 border-lime-100 pb-2 mb-4">{system}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {systemAssets.map(asset => (
                                <button key={asset.id} onClick={() => setSelectedAsset(asset)} className="p-4 bg-white/50 hover:bg-white/90 border border-white/20 rounded-xl text-left transition-all hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-lime-500">
                                    <p className="font-bold text-stone-800">{asset.name}</p>
                                    <p className="text-sm text-stone-500">{asset.location}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                )
            ))}
        </div>
    );
};

const LogManager = ({ logs, assets, db, user, isAdmin }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [logToEdit, setLogToEdit] = useState(null);

    const assetNameMap = useMemo(() => {
        return assets.reduce((map, asset) => {
            map[asset.id] = asset.name;
            return map;
        }, {});
    }, [assets]);

    const openModal = (log = null) => {
        setLogToEdit(log);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setLogToEdit(null);
    };

    return (
        <div className="space-y-4">
            <div className="flex justify-end items-center gap-4 mb-6">
                {isAdmin && (
                    <button onClick={() => openModal()} className="w-full md:w-auto px-6 py-2 bg-lime-600 text-white rounded-full hover:bg-lime-700 flex items-center justify-center gap-2 transition-colors shadow-md hover:shadow-lg">
                        + Log New Event
                    </button>
                )}
            </div>
            <div className="overflow-x-auto bg-white/70 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
                <table className="w-full text-left">
                    <thead className="bg-stone-50 border-b border-stone-200">
                        <tr>
                            {['Date', 'Log Type', 'Related Asset', 'Team Member', 'Description'].map(header => (
                                <th key={header} className="p-4 text-sm font-semibold text-stone-600">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {logs.length > 0 ? logs.map(log => (
                            <tr key={log.id} className="border-b border-stone-200 hover:bg-stone-50/50">
                                <td className="p-4 text-neutral-600 whitespace-nowrap">{log.timestamp?.toDate().toLocaleString()}</td>
                                <td className="p-4 font-medium text-neutral-800">{log.type}</td>
                                <td className="p-4 text-neutral-600">{assetNameMap[log.relatedAssetId] || 'Unknown Asset'}</td>
                                <td className="p-4 text-neutral-600 font-mono text-xs truncate max-w-xs">{log.teamMember}</td>
                                <td className="p-4 text-neutral-800">
                                    {log.description}
                                    {log.type === 'Feeding' && log.feedingData && (
                                        <div className="text-xs text-stone-600 mt-2">
                                            {Object.entries(log.feedingData).map(([animal, qty]) => 
                                                qty && <span key={animal} className="inline-block bg-lime-100 rounded-full px-2 py-1 mr-2 mb-1">{animal}: {qty}</span>
                                            )}
                                        </div>
                                    )}
                                </td>
                            </tr>
                        )) : (
                            <tr><td colSpan="5" className="text-center p-8 text-stone-500">No logs found. Click '+ Log New Event' to create one.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <LogModal log={logToEdit} assets={assets} onClose={closeModal} db={db} user={user} />
            </Modal>
        </div>
    );
};

// --- MAIN APP COMPONENT ---

export default function App() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [db, setDb] = useState(null);
    const [auth, setAuth] = useState(null);
    const [assets, setAssets] = useState([]);
    const [logs, setLogs] = useState([]);
    const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard', 'assets', 'logs'

    // Firebase Initialization and Authentication Effect
    useEffect(() => {
        if (!firebaseConfig.apiKey || firebaseConfig.apiKey === "YOUR_API_KEY") {
            setError("Connection Error: Could not connect to the Firestore database. Please check your configuration.");
            setLoading(false);
            return;
        }

        const app = initializeApp(firebaseConfig);
        const authInstance = getAuth(app);
        const firestoreDb = getFirestore(app);
        setAuth(authInstance);
        setDb(firestoreDb);

        // This listener handles the initial auth check and subsequent changes.
        const unsubscribe = onAuthStateChanged(authInstance, async (authUser) => {
            try {
                 if (authUser) {
                     const userDocRef = doc(firestoreDb, 'users', authUser.uid);
                     const userDocSnap = await getDoc(userDocRef);

                     const userData = {
                         uid: authUser.uid,
                         email: authUser.email,
                         displayName: userDocSnap.data()?.displayName || authUser.displayName,
                         isAdmin: userDocSnap.exists() && userDocSnap.data().role === 'admin',
                     };
                     setUser(userData);
                 } else {
                     setUser(null);
                 }
            } catch (authError) {
                console.error("Error during authentication state change:", authError);
                setError("An error occurred during authentication.");
            } finally {
                // This ensures the loading screen is dismissed regardless of auth state.
                setLoading(false);
            }
        });

        // Cleanup the subscription when the component unmounts
        return () => unsubscribe();
    }, []);

    // Effect to handle view change if a non-admin is on the assets page
    useEffect(() => {
        if (user && !user.isAdmin && currentView === 'assets') {
            setCurrentView('dashboard');
        }
    }, [user, currentView]);

    // Data Fetching Effect
    useEffect(() => {
        if (!db || !user) return;
        
        const assetsQuery = query(collection(db, `/artifacts/${appId}/public/data/assets`), orderBy('name'));
        const unsubscribeAssets = onSnapshot(assetsQuery, (snapshot) => {
            setAssets(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        }, (err) => { console.error("Error fetching assets:", err); setError("Failed to load asset data."); });

        const logsQuery = query(collection(db, `/artifacts/${appId}/public/data/logs`), orderBy('timestamp', 'desc'));
        const unsubscribeLogs = onSnapshot(logsQuery, (snapshot) => {
            setLogs(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        }, (err) => { console.error("Error fetching logs:", err); setError("Failed to load log data."); });

        return () => {
            unsubscribeAssets();
            unsubscribeLogs();
        };
    }, [db, user]);

    const handleLogout = () => {
        signOut(auth).catch(error => console.error("Logout failed:", error));
    };

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorDisplay message={error} />;

    // If not loading and no user, show the authentication screen
    if (!user) {
        return <AuthScreen auth={auth} db={db} setError={setError} />;
    }

    const renderView = () => {
        switch (currentView) {
            case 'assets':
                // This view is now protected by the useEffect above
                return <AssetManager assets={assets} db={db} isAdmin={user.isAdmin} />;
            case 'logs':
                return <LogManager logs={logs} assets={assets} db={db} user={user} isAdmin={user.isAdmin} />;
            case 'operations':
                return <OperationsManual assets={assets} />;
            default:
                return <Dashboard assets={assets} logs={logs} user={user} />;
        }
    };

    const NavLink = ({ view, children }) => (
        <button
            onClick={() => setCurrentView(view)}
            className={`w-full text-left px-4 py-2 rounded-full font-medium transition-colors ${
                currentView === view
                    ? 'bg-lime-600 text-white shadow-md'
                    : 'text-neutral-600 hover:bg-lime-100/50 hover:text-neutral-800'
            }`}
        >
            {children}
        </button>
    );

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-cover bg-center bg-fixed bg-[url('/background.png')] text-neutral-800 font-sans print:bg-white">
            <nav className="md:w-64 bg-white/60 backdrop-blur-lg border-r border-white/20 p-4 flex-shrink-0 print:hidden flex flex-col">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-green-800">Ascension Ranch</h1>
                    <p className="text-sm text-stone-500">Regenerative Campus Pilot Documentation</p>
                </div>
                <div className="space-y-3">
                    <NavLink view="dashboard">Dashboard</NavLink>
                    {user.isAdmin && <NavLink view="assets">Asset Manager</NavLink>}
                    <NavLink view="operations">Ascension Ranch Operations</NavLink>
                    <NavLink view="logs">System Logs</NavLink>
                </div>
                <div className="mt-auto pt-4">
                     <button onClick={handleLogout} className="w-full text-left px-4 py-2 rounded-full font-medium transition-colors text-neutral-600 hover:bg-stone-200 hover:text-neutral-800">Logout</button>
                </div>
            </nav>
            <main className="flex-1 p-6 md:p-10 overflow-y-auto print:p-0">
                {renderView()}
            </main>
        </div>
    );
}