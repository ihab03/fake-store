const getProducts = async (page) => {
try{
    const skip = (page - 1) * 10; 
    const {data} = await axios.get(`https://dummyjson.com/products?limit=10&skip=${skip}`);
   
   console.log(data);
   return data;
    }
    catch(error) {
        
        return [];
    }
};




const renderProducts = async (page=1) => {

    const data = await getProducts(page);
    const product =  data.products;
    const numOfPages =Math.ceil(data.total / 10) ;
       
    try {
       
        const result = product.map ( product =>{
            return`
            <div class="product">
                 <img src="${product.thumbnail}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p>${product.price}</p>
            </div>
            `
        }).join(' ');
        
        document.querySelector('.allProducts .row').innerHTML = result;
    } catch (error) {
        alert("something went wrong, please try again later");
    }

 let pagenationLink =  ``;

 if(page > 1){
    pagenationLink += `<li><a class="page-link" onclick=renderProducts(${page-1}) href="#">&lt;</a></li>`;
 }else{
    pagenationLink += `<li class="disabled"><a class="page-link" href="#">&lt;</a></li>`;
 }


   
    for(let i=1; i<=numOfPages; i++){
        pagenationLink += `<li><a href="#" onclick=renderProducts(${i})>${i}</a></li>`;
    }
    
    if(page < numOfPages){
        pagenationLink += `<li><a class="page-link" onclick=renderProducts(${parseInt(page)+1}) href="#">&gt;</a></li>`;
    }else{
        pagenationLink += `<li class="disabled"><a class="page-link" href="#">&gt;</a></li>`;
    }
    
    document.querySelector('.pagination').innerHTML = pagenationLink;
   
};

renderProducts();

