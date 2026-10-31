
const http = require('http');

const server = http.createServer((req, res) => {
    let message = "";

if (req.url === "/home") {
    message = "Welcome to DriveLux Home Page!";
}
else if (req.url === "/about") {
    message = "Learn More About DriveLux!";
}
else {
    message = "Welcome to DriveLux Car Rental!";
}
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>DriveLux | Premium Car Rentals</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-family: Arial, sans-serif;
                background: #111;
                color: white;
            }

            nav {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 22px 8%;
                background: #191919;
            }

            .logo {
                color: #d9a441;
                font-size: 26px;
                font-weight: bold;
            }

            nav a {
                color: white;
                text-decoration: none;
                margin-left: 25px;
                font-size: 14px;
            }

            nav a:hover {
                color: #d9a441;
            }

            .hero {
                min-height: 430px;
                display: flex;
                align-items: center;
                padding: 60px 8%;
                background:
                    linear-gradient(90deg, #111 25%, #1119),
                    url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1400')
                    center/cover;
            }

            .hero-content {
                max-width: 550px;
            }

            .hero h1 {
                font-size: 48px;
                margin-bottom: 18px;
            }

            .hero h1 span {
                color: #d9a441;
            }

            .hero p {
                color: #ccc;
                line-height: 1.7;
                margin-bottom: 25px;
            }

            .btn {
                display: inline-block;
                background: #d9a441;
                color: #111;
                padding: 13px 25px;
                border-radius: 4px;
                text-decoration: none;
                font-weight: bold;
            }

            .section {
                padding: 55px 8%;
                text-align: center;
            }

            .section h2 {
                color: #d9a441;
                margin-bottom: 30px;
                font-size: 28px;
            }

            .cars {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                gap: 25px;
            }

            .car-card {
                background: #202020;
                padding: 25px;
                border-radius: 8px;
                width: 260px;
            }

            .car-card h3 {
                margin-bottom: 12px;
            }

            .price {
                color: #d9a441;
                margin: 15px 0;
                font-weight: bold;
            }

            .details {
                background: #202020;
                padding: 25px;
                margin: 25px auto;
                max-width: 650px;
                border-radius: 8px;
                line-height: 2;
            }

            footer {
                background: #191919;
                text-align: center;
                padding: 25px;
                color: #aaa;
            }

            @media (max-width: 600px) {
                nav {
                    flex-direction: column;
                    gap: 18px;
                }

                nav a {
                    margin: 0 7px;
                }

                .hero h1 {
                    font-size: 34px;
                }
            }
        </style>
    </head>

    <body>

        <nav>
            <div class="logo">DriveLux</div>
            <div>
                <a href="/">Home</a>
                <a href="#cars">Cars</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>

        <section class="hero">
            <div class="hero-content">
                <h1>Drive Your <span>Dream.</span></h1>
                <p>
                    Discover premium cars for every journey.
                    Enjoy comfort, style and reliable service
                    with DriveLux Car Rentals.
                </p>
                <a href="#cars" class="btn">Explore Cars</a>
            </div>
        </section>

        <section class="section" id="cars">
            <h2>Our Featured Cars</h2>

            <div class="cars">
                <div class="car-card">
                    <h3>Swift</h3>
                    <p>Compact & Comfortable</p>
                    <p class="price">₹1,500 / day</p>
                </div>

                <div class="car-card">
                    <h3>Hyundai Creta</h3>
                    <p>Premium SUV</p>
                    <p class="price">₹2,500 / day</p>
                </div>

                <div class="car-card">
                    <h3>Toyota Innova</h3>
                    <p>Family Travel</p>
                    <p class="price">₹3,500 / day</p>
                </div>
            </div>
        </section>

        <section class="section" id="about">
            <h2>Why Choose DriveLux?</h2>
            <p>Quality cars, affordable prices and comfortable journeys.</p>
        </section>

        <section class="section" id="contact">
            <h2>Contact Us</h2>
            <p>Ready for your next journey? Book your car with DriveLux.</p>
        </section>
<div class="section">
    <h2>${message}</h2>
</div>
        <div class="details">
            <h3>Server Request Details</h3>
            <p>Request URL: ${req.url}</p>
            <p>Request Method: ${req.method}</p>
        </div>

        <footer>
            <p>&copy; 2026 DriveLux Car Rental. All Rights Reserved.</p>
        </footer>

    </body>
    </html>
    `);
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
