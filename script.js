// Array of car objects
const cars = [
    {
        model: "Audi A7 3.0 (A)",
        year: 2011,
        price: "RM69,800",
        image: "images/Audi A7.jpg",
        fbLink: "https://www.facebook.com/share/p/BtB6rdZXK6J5voC6/"
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
    },
    {
        model: "BMW 330e (A)",
        year: 2018,
        price: "RM84,800",
        image: "images/BMW 330e.jpg",
        fbLink: "https://www.facebook.com/share/v/6Y83t7hhGhquhAg9/"
    },
    {
        model: "Honda Civic 2.0 (A)",
        year: 2011,
        price: "RM41,800",
        image: "images/2011 Honda Civic 2.0.jpg",
        fbLink: "https://www.facebook.com/share/p/e1T45DtiFiRq87LM/"
    },
    {
        model: "Honda Civic 1.8 (A)",
        year: 2012,
        price: "RM36,800",
        image: "images/Honda Civic 1.8.jpg",
        fbLink: "https://www.facebook.com/share/p/oLfKzSWnZPMN2r8j/"
    },
    {
        model: "Honda City 1.5 (A)",
        year: 2014,
        price: "RM36,800",
        image: "images/City Black.jpg",
        fbLink: "https://www.facebook.com/share/v/dZwNw17xUNrLxDGo/"
    },
    {
        model: "KIA Optima 2.0 (A)",
        year: 2012,
        price: "RM34,800",
        image: "images/2012 Kia Black.jpg",
        fbLink: "https://www.facebook.com/share/p/wsB3fV2gJuoBF6xM/"
    },
    {
        model: "KIA Optima K5 2.0 (A)",
        year: 2014,
        price: "RM49,800",
        image: "images/2014 KIA White.jpg",
        fbLink: "https://www.facebook.com/share/p/dFNMrXcAL56XS9bd/"
    },
    {
        model: "Mitsubishi Xpander 1.5 (A)",
        year: 2020,
        price: "RM79,800",
        image: "images/Mit Xpander.jpg",
        fbLink: "https://www.facebook.com/share/v/Lfbv1E2xDZbAhpH8/"
    },
    {
        model: "Mercedes Benz GLA250 (A)",
        year: 2015,
        price: "RM99,800",
        image: "images/Merc GLA250.jpg",
        fbLink: "https://www.facebook.com/share/p/toCpArMVhJ7hNkVz/"
    },
    {
        model: "Mazda CX-3 2.0 (A)",
        year: 2019,
        price: "RM79,800",
        image: "images/Mazda CX-3.jpg",
        fbLink: "https://www.facebook.com/reel/1548513526030245"
    },
    {
        model: "Nissan Navara 2.5 (A)",
        year: 2015,
        price: "RM44,800",
        image: "images/Navara.jpg",
        fbLink: "https://www.facebook.com/reel/804390764845742"
    }






    
];

// Function to display cars
function displayCars(cars) {
    const carList = document.getElementById('car-list');
    carList.innerHTML = '';

    cars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.classList.add('car-card');
        
        // Construct HTML for each car card
        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.model}">
            <h2>${car.model}</h2>
            <p>Year: ${car.year}</p>
            <p>Price: ${car.price}</p>
            <a href="${car.fbLink}" target="_blank" class="fb-link">View More</a>
        `;

        // Append the car card to the car list
        carList.appendChild(carCard);
    });
}

// Event listener for search input
document.getElementById('search-bar').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredCars = cars.filter(car => 
        car.model.toLowerCase().includes(searchTerm) ||
        car.year.toString().includes(searchTerm)
    );
    displayCars(filteredCars);
});

// Initial display of cars
displayCars(cars);
