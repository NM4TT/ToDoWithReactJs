import React from "react";

function useLocalStorage(itemName, initialValue){

    const [item, setItem] = React.useState(initialValue);
    
    //Estados de carga y error
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
  
    React.useEffect(() => {
        
        setTimeout(()=>{
            try {
                const localStorageItem  = localStorage.getItem(itemName);
                let parsedItem;
                //if null, if empty, any falsy JS value
                if (!localStorageItem) {
                    parsedItem = initialValue;
                    localStorage
                        .setItem(itemName, JSON.stringify(initialValue));
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }
    
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
                console.log(error);
            }},
            2000
        );

    }, []);
  
    function saveItem(newItem) {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }
    return {item,saveItem, loading, error};
}

export {useLocalStorage};