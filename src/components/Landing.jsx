import React, { useState, useEffect } from 'react';

function LandingPage() {
    const [profiles, setProfiles] = useState([
        { id: 1, name: "Mother", color: "bg-emerald-600" },
        { id: 2, name: "Father", color: "bg-green-700" },
        { id: 3, name: "Brother", color: "bg-lime-600" },
        { id: 4, name: "Sister", color: "bg-violet-700" },
        { id: 5, name: "Dog", color: "bg-pink-600" }
    ]);

    const [editingId, setEditingId] = useState(null);
    const [newName, setNewName] = useState("");


    function updateProfile(id, newValues) {
        setProfiles(prev =>
            prev.map(profile =>
                profile.id === id
                    ? { ...profile, ...newValues }
                    : profile
            )
        );
    }

    useEffect(() => {
        updateProfile(3, { name: "Dad", color: "bg-gray-900" });
    }, []);



    return (
        <div className="text-red-600 p-10">
            <div>
                <h1 className="text-5xl text-center">Streamflix</h1>
            </div>

            <div className="flex flex-wrap justify-center gap-6 px-4 mt-20">
                {profiles.map(profile => (
                    <div key={profile.id} className="flex flex-col items-center w-40">
                        <a
                            href="#"
                            onClick={() => {
                                setEditingId(profile.id);
                                setNewName(profile.name);
                            }}
                            className={`w-full h-24 p-12 md:p-16 flex items-center justify-center rounded-lg text-white hover:scale-105 ${profile.color}`}
                        >
                            {profile.name}
                        </a>

                        {editingId === profile.id && (
                            <div className="mt-2 flex flex-col gap-2">
                                <input
                                    type="text"
                                    value={newName}
                                    onChange={e => setNewName(e.target.value)}
                                    className="rounded-md border-none text-black focus:outline-none p-3 w-32"
                                />
                                <button
                                    onClick={() => {
                                        setProfiles(prev =>
                                            prev.map(p =>
                                                p.id === profile.id ? { ...p, name: newName } : p
                                            )
                                        );
                                        setEditingId(null); // close the editor
                                    }}
                                    className="border-2 rounded-md border-gray-600 hover:scale-105 text-white p-3 w-32"
                                >
                                    Save
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}


export default LandingPage;
