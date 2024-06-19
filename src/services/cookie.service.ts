function setCookie(name:any, value:any, hours:any) {
    const expires = new Date(Date.now() + hours * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
}
  
  function getCookie(name:any) {
    const cookieName = `${name}=`;
    const cookies = document.cookie.split(";");
    
    for (const cookie of cookies) {
      const trimmedCookie = cookie.trim();
    
      if (trimmedCookie.startsWith(cookieName)) {
        return trimmedCookie.substring(cookieName.length);
      }
    }
  
    return null; 
  }
  
  function deleteCookie(name: any) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
  
  function logout(name: any) {
    deleteCookie(name);
  }
  
  function storeDataInLocalStorage(key: any, data: any) {
    try {
      // Convert data to a JSON string before storing
      const dataString = JSON.stringify(data);
      localStorage.setItem(key, dataString);
    } catch (error) {
      return false;
    }
  }
  
  // Function to retrieve data from localStorage
  function getDataFromLocalStorage(key: any) {
    try {
      // Retrieve the data as a JSON string
      const dataString = localStorage.getItem(key);
  
      // Parse the JSON string to get the actual data
      const data = JSON.parse(dataString as string);
      return data;
    } catch (error) {
      // console.error('Error retrieving data from localStorage:', error);
      return null;
    }
  }
  
  // Function to delete data from localStorage
  function deleteDataFromLocalStorage(key: any) {
    try {
      localStorage.removeItem(key);
      console.log(`Data with key "${key}" deleted from localStorage.`);
    } catch (error) {
      console.error('Error deleting data from localStorage:', error);
    }
  }


  export { 
    setCookie,
    getCookie,
    deleteCookie,
    logout,
    storeDataInLocalStorage,
    getDataFromLocalStorage,
    deleteDataFromLocalStorage
  }