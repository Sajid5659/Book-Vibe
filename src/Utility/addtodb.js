const getStoredBook =()=>{
    const storedBookStr = localStorage.getItem("readList");
    if(storedBookStr){
        const storeBookData = JSON.parse(storedBookStr);
        return storeBookData;
    }
    else{
        return [];
    }

}

const addToStoredDb = (id)=>{
    const storeBookData = getStoredBook();

    if(storeBookData.includes(id)){
        alert("already exists");
    }
    else{
        storeBookData.push(id);
        const data = JSON.stringify(storeBookData);
        localStorage.setItem("readList",data);
    }
}

export {addToStoredDb};