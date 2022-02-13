import { useEffect, useRef, useState } from "react";
import { projectFirestore } from "../firebase/config";

export const useCollection = (collection, _query) => {
    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);

    //breaking out of loop because of ref based variable
    //_query is an array and is different in every function call
    const query = useRef(_query).current;

    useEffect(() => {
        let ref = projectFirestore.collection(collection);

        if (query) {
            ref = ref.where(...query);
        }
        const unsub = ref.onSnapshot(
            (snapshot) => {
                let results = [];

                snapshot.docs.forEach((doc) => {
                    results.push({ ...doc.data(), id: doc.id });
                });

                setDocuments(results);
                setError(null);
            },
            (err) => {
                console.log(err);
                setError("could not fetch data");
            }
        );
        return () => {
            unsub();
        };
    }, [collection, query]);

    return { documents, error };
};
