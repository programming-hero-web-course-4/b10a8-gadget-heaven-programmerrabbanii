const getStoreReadList = () => {
    const storeListsr = localStorage.getItem('read-list');
    if (storeListsr) {
        return JSON.parse(storeListsr);
    } else {
        return [];
    }
}

const addTostoreReadList = (item) => {
    const storedList = getStoreReadList();
    const existingItem = storedList.find(storedItem => storedItem.product_id === item.product_id);

    if (existingItem) {
        console.log(item.product_id, 'already exists in the read list');
    } else {
        storedList.push(item);
        localStorage.setItem('read-list', JSON.stringify(storedList)); 
    }
}

export { addTostoreReadList, getStoreReadList };
