import { openDB } from "idb";

const useIndexedDB = (dbName, storeName) => {
  const getDB = async () => {
    return openDB(dbName, 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(storeName)) {
          db.createObjectStore(storeName, { keyPath: "id" });
        }
      },
    });
  };

  const saveData = async (id, data) => {
    const db = await getDB();
    await db.put(storeName, { id, data });
  };

  const getData = async (id) => {
    const db = await getDB();
    return await db.get(storeName, id);
  };

  const getAllData = async () => {
    const db = await getDB();
    const tx = db.transaction(storeName, "readonly");
    return await tx.store.getAll();
  };

  return { saveData, getData, getAllData };
};

export default useIndexedDB;
