import { collection, doc, getDocs, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { Info, Project } from "../types";

export const getInfo = async (): Promise<Info | null> => {
    const docRef = doc(db, "info", "information");
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
        return docSnap.data() as Info;
    } else {
        return null;
    }
};

export const getProjects = async (): Promise<Project[]> => {
    const colRef = collection(db, "projects");
    const snapShot = await getDocs(colRef);
    return snapShot.docs.map((doc)=> doc.data() as Project);
}