import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // For routing
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap for styling
import Contacts from "./Contacts"; // Import Contacts component
import AddContact from "./AddContacts.js"; // Import AddContact component

//------------------------------------------------- App --------------------------------------------------------------//
function App() {
    const [contacts, setContacts] = useState([]); // State to hold contacts data

    return (
        <Router>
            <div className="d-flex">
                <div className="flex-grow-1 p-3">
                    <h1 className="text-center">Phone Contacts App</h1>
                    <Routes>
                        {/* Route for the home page */}
                        <Route path="/" element={<div>Welcome to the Contacts App!</div>} />

                        {/* Route for displaying the contacts list */}
                        <Route
                            path="/contacts"
                            element={<Contacts contacts={contacts} setContacts={setContacts} />}
                        />

                        {/* Route for adding a new contact */}
                        <Route
                            path="/add-contact"
                            element={<AddContact contacts={contacts} setContacts={setContacts} />}
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
