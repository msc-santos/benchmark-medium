export default class Product {
  constructor({ description, name, price, tempProperty, activePromoId }) {
    this.description = description;
    this.name = name;
    this.price = price;
    this.tempProperty = tempProperty;
    this.activePromoId = activePromoId ?? 0;
  }
}
