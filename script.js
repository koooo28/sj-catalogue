const cars = [
    {
        model: "Audi A7 3.0 (A)",
        year: 2011,
        price: "RM69,800",
        image: "images/Audi A7.jpg",
        fbLink: "https://fb.watch/uf3wcxQp8k/"
    },
    {
        model: "BMW 328i",
        year: 2012,
        price: "RM56,800",
        image: "images/BMW 328i.jpg",
        fbLink: "https://www.facebook.com/share/p/RFmr2qj2vSfQ1Yqb/"
    },
    {
        model: "BMW 320d",
        year: 2012,
        price: "RM46,000",
        image: "images/BMW 320d.jpg",
        fbLink: "https://www.facebook.com/share/p/aeVCUQE3Gs2gx5HX/"
    },
    {
        model: "Perodua Bezza",
        year: 2019,
        price: "RM35,800",
        image: "images/Bezza.jpg",
        fbLink: "https://www.facebook.com/reel/2275495449496098"
    },
    {
        model: "Volkswagen Tiguan",
        year: 2021,
        price: "RM114,800",
        image: "images/VW Tiguan.jpg",
        fbLink: "https://www.facebook.com/share/v/ENV74DrUL5tmfVRz/"
    }
    // Add more car objects as needed
];

function displayCars(cars) {
    const carList = document.getElementById('car-list');
    carList.innerHTML = '';

    cars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.classList.add('car-card');
        
        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.model}">
            <h2>${car.model}</h2>
            <p>Year: ${car.year}</p>
            <p>Price: ${car.price}</p>
            <a href="${car.fbLink}" target="_blank" class="fb-link">View More</a>
        `;

        carList.appendChild(carCard);
    });
}

document.getElementById('search-bar').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredCars = cars.filter(car => 
        car.model.toLowerCase().includes(searchTerm) ||
        car.year.toString().includes(searchTerm)
    );
    displayCars(filteredCars);
});

displayCars(cars);
