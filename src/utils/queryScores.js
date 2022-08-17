import db from "./firebaseConfig"
import { addDoc, collection, getDocs } from 'firebase/firestore/lite';


export const getScores = async () => {
    const scoresCollection = collection(db, "Scores")
    const scoresSnapshot = await getDocs(scoresCollection);
    const scoresList = scoresSnapshot.docs.map((doc) => {
        let score = doc.data()
        score.id = doc.id
        return score
    })
    return scoresList
}
export const saveScore = async (newScore) => {
    const orderFirebase = collection(db, "Scores");
    const orderDoc = await addDoc(orderFirebase, newScore)
  }

