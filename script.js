// Simulated JSON data
let products = [];
let purchases = [];

document.getElementById("addProduct").addEventListener("click", () => {
  const name = document.getElementById("productName").value;
  const quantity = parseInt(document.getElementById("productQuantity").value, 10);

  if (name && quantity > 0) {
    const code = Math.floor(1000 + Math.random() * 9000);
    products.push({ code, name, quantity });
    alert(`Product added! Code: ${code}`);
    document.getElementById("productName").value = "";
    document.getElementById("productQuantity").value = "";
  } else {
    alert("Please provide valid product details.");
  }
});

document.getElementById("buyProduct").addEventListener("click", () => {
  const code = parseInt(document.getElementById("productCode").value, 10);
  const product = products.find(p => p.code === code);

  if (product && product.quantity > 0) {
    const name = document.getElementById("customerName").value;
    const birthday = document.getElementById("customerBirthday").value;
    const date = document.getElementById("purchaseDate").value;

    if (name && birthday && date) {
      const purchaseCode = Math.floor(1000000 + Math.random() * 9000000);
      purchases.push({ purchaseCode, product: product.name, name, birthday, date });
      product.quantity -= 1;
      alert(`Purchase successful! Purchase Code: ${purchaseCode}`);
      document.getElementById("productCode").value = "";
      document.getElementById("customerName").value = "";
      document.getElementById("customerBirthday").value = "";
      document.getElementById("purchaseDate").value = "";
    } else {
      alert("Please fill in all customer details.");
    }
  } else {
    alert("Invalid product code or out of stock.");
  }
});

document.getElementById("searchPurchase").addEventListener("click", () => {
  const searchCode = parseInt(document.getElementById("searchCode").value, 10);
  const purchase = purchases.find(p => p.purchaseCode === searchCode);

  if (purchase) {
    document.getElementById("purchaseDetails").innerText = `
      Purchase Code: ${purchase.purchaseCode}
      Product: ${purchase.product}
      Customer Name: ${purchase.name}
      Birthday: ${purchase.birthday}
      Date: ${purchase.date}
    `;
    purchases = purchases.filter(p => p.purchaseCode !== searchCode);
    alert("Purchase removed from records.");
  } else {
    alert("Purchase not found.");
  }
});

document.getElementById("productCode").addEventListener("blur", () => {
  const code = parseInt(document.getElementById("productCode").value, 10);
  const product = products.find(p => p.code === code);

  if (product) {
    document.getElementById("productDetails").innerText = `Product: ${product.name}`;
  } else {
    document.getElementById("productDetails").innerText = "Product not found.";
  }
});
