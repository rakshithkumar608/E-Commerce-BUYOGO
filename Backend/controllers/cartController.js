const Cart = require("../models/Cart");

// Add to cart
exports.addToCart = async (req, res) => {
    try {
        const { productId } = req.body;
        const userId = req.user.id;

        let cart = await Cart.findOne({ user: userId });

        if(!cart) {
            cart = await Cart.create({
                user: userId,
                items: [{ product: productId, quantity: 1 }],
            })
        } else {
            const itemIndex = cart.items.findIndex(
                (item) => item.product.toString() === productId
            );

            if(itemIndex > -1) {
                cart.items[itemIndex].quantity += 1;
            } else {
                cart.items.push({ product: productId, quantity: 1 });
            }

            await cart.save();

            res.json({ message: "Product added to cart", cart });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Get cart
exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user.id })
            .populate("items.product");

        res.json(cart || { items: [] });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Remove from Cart
exports.removeFromCart = async (req, res) => {
    try {
        const {productId} = req.params;

        const cart = await Cart.findOne({ user: req.user.id });

        if(!cart) return res.status(404).json({ message: "Cart not found" });

        cart.items = cart.items.filter(
            (item) => item.product.toString() !== productId
        );

        await cart.save();

        res.json({ message: "Item removed", cart });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}