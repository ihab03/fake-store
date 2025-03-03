const getdetails = async () => { 
    try {
        const urlParams = new URLSearchParams(window.location.search); 
        const category = urlParams.get('category'); 
        const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`); 
      
        return data; 
    } catch (error) {
        return [];
    }
  
};

const renderProducts = async () => { try {
    const products = await getdetails(); 
    


if (products.length == 0) {
    document.querySelector(".row").innerHTML = `<h2 class="empty">No products found in this category :(</h2>`;
    return;  // exit the function if no products found
 
}else{
    const result = products.map((product) => { 
        return ` 
        <div class="product"> 
            <img src="${product.image}" alt="${product.title}"> 
            <h2>${product.title}</h2> 
            <p>$${product.price}</p> 
        </div>`; 
    }).join(''); 

    document.querySelector(".row").innerHTML = result;

}



  
} catch (error) {
    alert("something went wrong, please try again later");
}finally{
    document.querySelector('.loading').classList.add("d-none"); 

}
   
     
};     



renderProducts();



