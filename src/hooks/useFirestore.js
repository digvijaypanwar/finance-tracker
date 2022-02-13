import { useEffect, useReducer, useState } from "react";
import { projectFirestore } from "../firebase/config";

let initialState = {
    document: null,
    isPending: false,
    error: null,
    success: null,
};

const firestoreReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
export const useFireStore = (collection) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState);
    const [isCancelled, setIsCancelled] = useState(false);

    //collection ref
    const ref = projectFirestore.collection(collection);

    //add a doc
    const addDocument = (doc) => {};

    //delete a doc
    const deleteDocument = (id) => {};

    useEffect(() => {
        return () => {
            setIsCancelled(true);
        };
    }, []);

    return { addDocument, deleteDocument, response };
};
