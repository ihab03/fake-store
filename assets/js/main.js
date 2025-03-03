const getcategories =  async() => {
    try {
        
    const {data} =  await axios.get("https://fakestoreapi.com/products/categories");
     
    return data;

    } catch (error) {
     
    return [];

    }

}; //getCategories
    
const displayCategories = async () => {try {
    const categories = await getcategories();

    if (categories.length == 0) {
       alert("something went wrong, please try again later"); 
    } else {
        const result = categories.map (category =>
            `
            <li><a href="./details.html?category=${category}">${category}</a></li>
            `
       ).join(' '); 
       document.querySelector('.categoriesList ').innerHTML = result; 
    }
} catch (error) {

    alert("something went wrong, please try again later");
}finally{
    document.querySelector('.loading').classList.add("d-none"); 

}


}

displayCategories();

window.onscroll = () => {
    const navbarLinks = document.querySelectorAll('.links a');
    const navbar = document.querySelector('.navbar');
   const scroll = document.querySelector('.header');

    if(window.scrollY > scroll.offsetTop){
       navbar.classList.add('navbar-scroll');
       navbarLinks.forEach(link => {
        link.classList.add('navbar-scroll-a'); 
    });
    } else {
        navbar.classList.remove('navbar-scroll');
        
        navbarLinks.forEach(link => {
            link.classList.remove('navbar-scroll-a'); 
        });
    }


}


document.addEventListener("mousemove", (e) => {
    const h1 = document.querySelector(".brand h1");

    

    const x = e.clientX / window.innerWidth - 0.5; 
    const y = e.clientY / window.innerHeight - 0.5;

    h1.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
});


