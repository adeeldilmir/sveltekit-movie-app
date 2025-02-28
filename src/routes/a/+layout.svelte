<script>
    const products = [
        { id: 1, name: "Product 1", price: "$10" },
        { id: 2, name: "Product 2", price: "$15" },
        { id: 3, name: "Product 3", price: "$20" }
    ];

    function openWhatsApp(product) {
        const message = encodeURIComponent(`Hi, I'm interested in ${product.name}`);
        const phoneNumber = "+923246824768"; // Your WhatsApp number
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        
        // Open in new tab
        window.open(url, '_blank');
    }
</script>

<main class="p-4">
    <h1 class="text-2xl font-bold mb-4">Our Products</h1>
	<a href="https://api.whatsapp.com/send?phone=50600000000">Click to connect +506 0000 0000</a>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {#each products as product}
            <div class="border p-4 rounded-lg shadow">
                <h2 class="text-lg font-semibold">{product.name}</h2>
                <p class="text-gray-600">{product.price}</p>
                <button
                    class="mt-2 bg-green-500 text-white px-4 py-2 rounded"
                    on:click={() => openWhatsApp(product)}
                >
                    Buy on WhatsApp
                </button>
            </div>
        {/each}
    </div>
</main>

<style>
    main {
        font-family: Arial, sans-serif;
    }
</style>
