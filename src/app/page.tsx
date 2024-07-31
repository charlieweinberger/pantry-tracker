"use client";

// Imports

import { useState, useEffect } from "react";
import { Box, Stack, Typography, Button } from "@mui/material"

import { firestore } from "@/firebase";
import { collection, query, doc, getDoc, setDoc, deleteDoc, getDocs } from "firebase/firestore"; // functions
import { DocumentSnapshot, DocumentReference, QueryDocumentSnapshot, Query, QuerySnapshot } from "firebase/firestore"; // types

import AddItems from "../components/addItems";
import PantryList from "../components/pantryList";

// useState helper functions

function getPantryList(docs: QuerySnapshot) {
  const pantryList: any = [];
  docs.forEach((doc: QueryDocumentSnapshot) => {
    pantryList.push({
      name: doc.id,
      ...doc.data()
    })
  });
  return pantryList;
}

async function addItemFunc(docSnap: DocumentSnapshot, docRef: DocumentReference) {
  
  if(!docSnap.exists()) {
    await setDoc(docRef, { quantity: 1 });
    return;
  }

  const { quantity } = docSnap.data();
  await setDoc(docRef, { quantity: quantity + 1 });

}

async function removeItemFunc(docSnap: DocumentSnapshot, docRef: DocumentReference) {
  
  if(!docSnap.exists()) return;
  
  const { quantity } = docSnap.data();

  if (quantity === 1) {
    await deleteDoc(docRef);
    return;
  }

  await setDoc(docRef, { quantity: quantity - 1 });

}

// Main JSX element to return

export default function Home() {
  
  const [ pantry, setPantry ] = useState([]);
  const [ open, setOpen ] = useState(true);
  const [ itemName, setItemName ] = useState("");

  // React

  const updatePantry = async () => {
    const snapshot: Query = query(collection(firestore, "pantry"));
    const docs: QuerySnapshot = await getDocs(snapshot);
    const pantryList: any = getPantryList(docs);
    setPantry(pantryList);
  }

  const addItem = async (itemName: string) => {
    const docRef: DocumentReference = doc(collection(firestore, "pantry"), itemName);
    const docSnap: DocumentSnapshot = await getDoc(docRef);
    addItemFunc(docSnap, docRef);
    await updatePantry();
  };

  const removeItem = async (itemName: string) => {
    const docRef: DocumentReference = doc(collection(firestore, "pantry"), itemName);
    const docSnap: DocumentSnapshot = await getDoc(docRef);
    removeItemFunc(docSnap, docRef);
    await updatePantry();
  };

  useEffect(() => { updatePantry(); }, []);
  const handleOpen: () => void = () => setOpen(true);
  const handleClose: () => void = () => setOpen(false);

  // JSX

  return (
    <Box width="100vw" height="100vh" className="flex" flexDirection="column" gap={2}>

      {/* "Add items" modal */}
      <AddItems open={open} addItem={addItem} handleClose={handleClose} itemName={itemName} setItemName={setItemName} />

      {/* Button to show "add items" modal */}
      <Button variant="contained" onClick={ () => handleOpen() }>Add New Item</Button>

      {/* Pantry list */}
      <Box border="1px solid #333">

        <Box width="800px" height="100px" bgcolor="#ADD8E6" className="flex" flexDirection="column">
          <Typography variant="h2" color="#333" className="flex" flexDirection="column">Pantry Items</Typography>
        </Box>
        
        <PantryList pantry={pantry} addItem={addItem} removeItem={removeItem} />

      </Box>
      
    </Box>
  );

}