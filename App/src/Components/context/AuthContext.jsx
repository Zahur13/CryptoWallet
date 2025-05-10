import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../../firebase.jsx";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const userData = JSON.parse(localStorage.getItem("currentUser"));
  const [user, setUser] = useState(userData || {});

  const databaseUrl = "https://cryptowallet-3af9a-default-rtdb.firebaseio.com/";

  const fetchTransactions = async (userName) => {
    const path = `users/${userName}.json`;
    let perviousDetails = {};
    await fetch(`${databaseUrl}${path}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        perviousDetails = data;
        return data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    return perviousDetails;
  };

  const updateTransaction = async ({ balance, transaction, userName }) => {
    let allPreviousTransaction = await fetchTransactions(userName);

    console.log(allPreviousTransaction, transaction);

    const dataToPush = {
      userName: userName,
      balance: balance,
      transactions: allPreviousTransaction?.userName
        ? [...allPreviousTransaction.transactions, ...transaction]
        : transaction,
    };

    const path = `users/${userName}.json`;

    fetch(`${databaseUrl}${path}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToPush),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Error pushing data:", error);
      });
  };

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  function googleSignIn() {
    return signInWithPopup(auth, googleProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signUp,
        logIn,
        logOut,
        googleSignIn,
        updateTransaction,
        fetchTransactions,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
