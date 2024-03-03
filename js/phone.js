const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones);
}


const displayPhones = (phones) => {
    // console.log(phones);
    const phoneContainer = document.getElementById('phone-container');
    console.log(phones.length);

    phoneContainer.textContent = '';
    // display show all button if there are more then 10 result found
    const showAllContainer = document.getElementById('show-all-container');
    if (phones.length > 12 ) {
        showAllContainer.classList.remove('hidden');
    } else {
        showAllContainer.classList.add('hidden');

    }

    // display only first ten phones --

    phones = phones.slice(0, 12);


    phones.forEach(phone => {
        console.log(phone);

        // 1 create a div 
        const phoneCard = document.createElement('div');

        phoneCard.classList = `card bg-gray-100 shadow-xl`;
        phoneCard.innerHTML = `
    <figure><img src="${phone.image}" alt="phones" /></figure>
    <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
        </div>
    </div>
    </div>
    `;
        // step 4 
        phoneContainer.appendChild(phoneCard);
    });
    toggleLoadingSpiner(false)
};

// handle search button 
const handleSearch = () => {
    toggleLoadingSpiner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhone(searchText)
    // console.log(searchText);

};
// handle search button recap

// const handleSearch2 = () => {
//     toggleLoadingSpiner(true);
//     const searchField = document.getElementById('search-field2');
//     const searchText = searchField.value;
//     loadPhone(searchText);
// };


const toggleLoadingSpiner = (isLoading) => {
const loadingSpiner = document.getElementById('loading-spiner');
if(isLoading){
    loadingSpiner.classList.remove('hidden');

}else{
    loadingSpiner.classList.add('hidden');
 
}
};

const handleShowAll = ()=>{
    console.log('handle show all button clicked');
}


loadPhone();