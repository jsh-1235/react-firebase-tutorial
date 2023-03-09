import "./App.css";

import { useState, useEffect } from "react";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtKiJR4uiP-b_EBpEZ57e3ksYyNnPY11o",
  authDomain: "react-firebase-tutorial-c25dc.firebaseapp.com",
  projectId: "react-firebase-tutorial-c25dc",
  storageBucket: "react-firebase-tutorial-c25dc.appspot.com",
  messagingSenderId: "419671723562",
  appId: "1:419671723562:web:cbbd29b44fa5e7c216fd53",
  measurementId: "G-7Z01VLVLBM",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const fireStore = getFirestore(app);

function App() {
  const [topics, setTopics] = useState([]);

  const read = async () => {
    const querySnapshot = await getDocs(collection(fireStore, "topics"));

    const items = [];

    querySnapshot.forEach((document) => {
      console.log(`${document.id} => ${document.data()}`);

      items.push({ id: document.id, ...document.data() });
    });

    // console.log(items);

    setTopics(items);
  };

  const add = async () => {
    try {
      const docRef = await addDoc(collection(fireStore, "topics"), {
        title: "css",
        description: "css is ...",
      });

      console.log(docRef.id);
    } catch (e) {
      console.error(e);
    }
  };

  const handleAdd = (e) => {
    console.log(e.target);

    add();

    read();
  };

  useEffect(() => {
    console.log(fireStore);

    read();
  }, []);

  useEffect(() => {
    // console.table(topics);

    console.log(topics);
  }, [topics]);

  return (
    <div className="App">
      <button onClick={handleAdd}>add</button>
      <ul>
        {topics.map((topic) => {
          return (
            <li key={topic.id}>
              <div>{topic.id}</div>
              <div>{topic.title}</div>
              <div>{topic.description}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
